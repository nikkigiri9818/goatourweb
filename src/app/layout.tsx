


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const BRAND = 'Goa Holiday Tours';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const DESCRIPTION =
  'Goa tour packages with resort stay, pickup & drop, daily breakfast and sightseeing. Honeymoon, family and group trips plus scuba, water sports and cruise.';

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} | Goa Tour Packages`,
    template: `%s | ${BRAND}`,
  },

  description: DESCRIPTION,

  keywords: [
    'Goa tour packages',
    'Goa trip packages',
    'Goa honeymoon package',
    'Goa family tour package',
    'Goa adventure activities',
    'scuba diving in Goa',
    'Dudhsagar waterfall trip',
  ],

  applicationName: BRAND,

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: BRAND,
    url: '/',
    title: `${BRAND} | Goa Tour Packages`,
    description: DESCRIPTION,
    images: [
      {
        url: '/assets/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${BRAND} - Goa tour packages`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${BRAND} | Goa Tour Packages`,
    description: DESCRIPTION,
    images: ['/assets/img/og-image.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: BRAND,
  url: SITE_URL,
  description: DESCRIPTION,
  telephone: '+917678464517',
  areaServed: 'Goa, India',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content={BRAND} />

        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}