import { NextResponse } from 'next/server';

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

      await resend.emails.send({
        from: 'Hansung Website <noreply@hihansung.com>',
        to: 'hkkim@hihansung.com',
        subject: `[웹사이트 문의] ${type === 'quote' ? '견적 요청' : type === 'partnership' ? '제휴 제안' : '일반 문의'} - ${name}`,
        html: `
          <h2>웹사이트 문의가 접수되었습니다</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이름</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">회사</td><td style="padding: 8px; border: 1px solid #ddd;">${company || '-'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">이메일</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">전화</td><td style="padding: 8px; border: 1px solid #ddd;">${phone || '-'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">문의유형</td><td style="padding: 8px; border: 1px solid #ddd;">${type}</td></tr>
          </table>
          <h3>문의 내용:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });
    } else {
      // Log to console if no email service configured
      console.log('Contact form submission:', data);
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
