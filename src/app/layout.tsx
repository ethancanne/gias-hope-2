import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.scss';
import NavbarLayout from '@/layout/navbar/navbar.layout';
import Footer from '@/layout/footer/footer.view';

import { headers } from 'next/headers';
import { getPagesData, getPostsData } from '@/lib/getData';

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

export async function generateMetadata({ params }: any) {
  const pathname = new URL((await headers()).get('x-request-url')!).pathname;

  console.log('PATHNAME', pathname);

  // Fetch data based on the slug

  var pageInfo;

  try {
    if (pathname.includes('posts')) {
      pageInfo = (await getPostsData())[
        pathname.split('/')[pathname.split('/').length - 1]
      ].data;
    } else {
      pageInfo = (
        await getPagesData(
          pathname.split('/')[pathname.split('/').length - 1] + '-page'
        )
      ).pageInformation;
    }
  } catch (e) {
    pageInfo = (await getPagesData('home-page')).pageInformation;
  }

  console.log('data', pageInfo);

  const title = pageInfo.title;
  const description = pageInfo.description;
  const imageUrl = 'https://giashope.org/preview-logo.jpeg';

  console.log(imageUrl);

  return {
    title: `GIA's Hope | ${title}`,
    description: description,
    openGraph: {
      title: `GIA's Hope | ${title}`,
      description: description,
      images: [imageUrl],
      siteName: "GIA's Hope",
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
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
