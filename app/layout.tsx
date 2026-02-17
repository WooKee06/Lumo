import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import './global.scss';
import Sidebar from '@/components/sidebar/ui/Sidebar';

const montserratAlternates = Montserrat_Alternates({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat-alternates',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zpotify',
  description: 'Wookee sound club',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratAlternates.variable} antialiased`}>
        <Sidebar />

        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
