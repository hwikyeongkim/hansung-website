import { useLocale, useTranslations } from 'next-intl';
import ContactForm from '@/components/forms/ContactForm';
import PageHeader from '@/components/ui/PageHeader';
import SalesContactCard from '@/components/ui/SalesContactCard';
import { COMPANY } from '@/lib/constants/company';
import { Phone, Printer, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  // 해외 영업메일 캠페인(미국·일본) 수신자용: 영어·일본어 페이지에만 해외 영업 창구를 노출
  const showSalesContact = locale === 'en' || locale === 'ja';

  return (
    <>
      <PageHeader
        tag="Contact"
        title={t('title')}
        subtitle={t('subtitle')}
        image="/images/headers/header-contact.jpg"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              {showSalesContact && (
                <div className="mb-10">
                  <SalesContactCard />
                </div>
              )}
              <h3 className="text-xl font-bold text-navy-900 mb-8">{t('info')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('infoTel')}</p>
                    <p className="font-medium text-navy-900">{COMPANY.tel}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
                    <Printer className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('infoFax')}</p>
                    <p className="font-medium text-navy-900">{COMPANY.fax}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('infoEmail')}</p>
                    <a href={`mailto:${COMPANY.email}`} className="font-medium text-brand-blue hover:text-brand-blue-hover transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-700/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('infoAddress')}</p>
                    <p className="font-medium text-navy-900">{COMPANY.address.ko}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden h-[250px] bg-gray-100 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.5!2d127.074!3d37.203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7ZmU7ISx7IucIOuPmeuzqO2VmOuCmDHquLggMjgtMTU!5e0!3m2!1sko!2skr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hansung Electronics Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
