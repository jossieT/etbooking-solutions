import type { Metadata } from 'next';
import { Inter, Noto_Sans_Ethiopic } from 'next/font/google';
import { Providers } from '@/components/shared/Providers';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-ethiopic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ETBooking Solutions | Smart Booking Systems for Modern Service Businesses',
  description:
    'Custom booking platforms for salons, clinics, gyms, car washes, and service businesses in Ethiopia. Secure local payments, SMS notifications, and staff management.',
  keywords: [
    'booking system',
    'appointment scheduling',
    'service booking',
    'Ethiopia',
    'Telebirr',
    'Chapa',
    'SMS notifications',
  ],
  openGraph: {
    title: 'ETBooking Solutions | Smart Booking Platforms',
    description: 'Custom booking systems designed for Ethiopian service businesses',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['am_ET'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ETBooking Solutions',
    description: 'Smart booking platforms for service businesses',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${notoEthiopic.variable} font-sans overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
