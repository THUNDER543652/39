import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.testappara.com';

const COMMON_KEYWORDS = [
  'TestAppara',
  'free online test',
  'online test',
  'device test',
  'device diagnostic',
  'device diagnostics',
  'hardware test',
  'hardware diagnostic',
  'online hardware diagnostic',
  'browser based test',
  'free device testing',
];

export function createToolMetadata({
  title,
  description,
  canonical,
  keywords = [],
}: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${canonical}`;

  return {
    title,
    description,
    keywords: Array.from(new Set([...keywords, ...COMMON_KEYWORDS])),
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'TestAppara',
      locale: 'en_US',
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
