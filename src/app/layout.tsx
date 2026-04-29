import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한성전자 | Hansung Electronics',
  description: 'Cable Harness Manufacturer - Samsung Electronics Tier-1 Vendor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
