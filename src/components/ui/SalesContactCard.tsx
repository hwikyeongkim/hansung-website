import { useTranslations } from 'next-intl';
import { CalendarDays, Mail, UserRound } from 'lucide-react';
import { SALES_CONTACT } from '@/lib/constants/company';

export default function SalesContactCard() {
  const t = useTranslations('sales');

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">{t('title')}</h3>
      <div className="flex items-start gap-4 mb-3">
        <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
          <UserRound className="w-5 h-5 text-navy-700" />
        </div>
        <div>
          <p className="font-medium text-navy-900">{t('name')}</p>
          <p className="text-sm text-gray-500">{t('role')}</p>
        </div>
      </div>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-navy-700" />
        </div>
        <a
          href={`mailto:${SALES_CONTACT.email}`}
          className="self-center font-medium text-brand-blue hover:text-brand-blue-hover transition-colors break-all"
        >
          {SALES_CONTACT.email}
        </a>
      </div>
      <a
        href={SALES_CONTACT.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white font-semibold rounded-xl transition-colors"
      >
        <CalendarDays className="w-5 h-5" />
        {t('bookCall')}
      </a>
    </div>
  );
}
