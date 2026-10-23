import { NextResponse } from 'next/server';

// 사용자 입력을 메일 HTML에 넣기 전에 이스케이프 (HTML 주입 방지)
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_PATTERN = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, type, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      const visitorEmail = String(email).trim();
      // 제목 줄에 줄바꿈이 섞이지 않도록 정리
      const subjectName = String(name).replace(/[\r\n]+/g, ' ').slice(0, 100);

      const { error: sendError } = await resend.emails.send({
        from: 'Hansung Website <noreply@hihansung.com>',
        to: 'asd123a3@hihansung.com',
        cc: ['hkkim@hansungelectronics.com'],
        // 답장이 바로 문의자에게 가도록 (형식이 올바른 주소일 때만)
        ...(EMAIL_PATTERN.test(visitorEmail) ? { replyTo: visitorEmail } : {}),
        subject: `[웹사이트 문의] ${type === 'quote' ? '견적 요청' : type === 'partnership' ? '제휴 제안' : '일반 문의'} - ${subjectName}`,
        html: `
          <h2>웹사이트 문의가 접수되었습니다</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이름</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">회사</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(company || '-')}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이메일</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">전화</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(phone || '-')}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">문의유형</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(type)}</td></tr>
          </table>
          <h3>문의 내용:</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        `,
      });

      // Resend SDK는 실패 시 예외를 던지지 않고 error 필드로 반환 —
      // 발송 실패를 성공으로 위장하지 않도록 명시적으로 에러 반환
      if (sendError) {
        console.error('Resend send failed — contact NOT delivered:', sendError, data);
        return NextResponse.json(
          { error: 'Email delivery failed' },
          { status: 502 }
        );
      }
    } else {
      // 키 미설정 시 문의가 조용히 유실되지 않도록 에러 반환
      // (프런트가 에러를 표시하면 방문자는 화면의 이메일 주소로 직접 연락 가능)
      console.error('RESEND_API_KEY not configured — contact NOT delivered:', data);
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
