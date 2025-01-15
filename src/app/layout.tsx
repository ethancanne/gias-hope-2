import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.scss';
import NavbarLayout from '@/layout/navbar/navbar.layout';
import Footer from '@/layout/footer/footer.view';

const serifFont = localFont({
  src: '../fonts/PTSerif-Regular.ttf',
  variable: '--font-pt',
  weight: '100 900',
});

const serifBoldFont = localFont({
  src: '../fonts/PTSerif-Bold.ttf',
  variable: '--font-pt-bold',
  weight: '100 900',
});

const sansFont = localFont({
  src: '../fonts/OpenSans.ttf',
  variable: '--font-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Gia's Hope",
  description:
    'Witnessing goodness arise by shining God’s light and hope for the most broken, hurting, poor, orphaned and vulnerable ones here at home, and around the world in honor of Gianna Lilyfaith.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serifFont.variable}  ${sansFont.variable}  ${serifBoldFont.variable} body`}
      >
        <NavbarLayout />

        {children}
        <Footer />
      </body>
    </html>
  );
}
