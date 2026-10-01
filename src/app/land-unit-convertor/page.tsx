import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandCalculatorClient from './LandCalculatorClient';
import { LAND_CATEGORIES } from '@/lib/landUnits';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.testappara.com';
const categoryKeywords = LAND_CATEGORIES.flatMap(category => [category.name, ...category.units.map(unit => unit.name)]);

export const metadata: Metadata = {
  title: 'Land Unit Converter | Marla, Kanal, Acre, Bigha, Gaj, Sq Ft & More',
  description: 'Free international land unit converter for India, South Asia and worldwide. Convert Marla, Kanal, Acre, Bigha, Gaj, Guntha, Katha, Dhur, Hectare, square feet and 39+ land units instantly.',
  keywords: [
    'land unit converter', 'land area converter', 'area converter',
    'international land unit converter', 'land measurement converter', 'square feet converter', 'sq ft converter',
    'marla calculator', 'marla to square feet', 'marla to acre', 'kanal calculator', 'kanal to square feet', 'kanal to acre',
    'acre to marla', 'acre to kanal', 'bigha calculator', 'bigha to acre', 'bigha to square feet', 'gaj to square feet',
    'guntha to square feet', 'dhur to square feet', 'katha to square feet', 'hectare to acre', 'cent to square feet',
    'India land measurement', 'Indian land units', 'South Asia land measurement', 'land measurement conversion',
    ...categoryKeywords,
  ],
  alternates: { canonical: '/land-unit-convertor' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Land Unit Converter – Marla, Kanal, Acre, Bigha, Gaj & Sq Ft',
    description: 'Convert 39+ land measurement units instantly across India, South Asia and international regions.',
    type: 'website',
    url: `${siteUrl}/land-unit-convertor`,
    siteName: 'TestAppara',
  },
  twitter: {
    card: 'summary',
    title: 'Land Unit Converter | TestAppara',
    description: 'Convert Marla, Kanal, Acre, Bigha, Gaj, square feet and international land units instantly.',
  },
};

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Land Unit Converter',
  url: `${siteUrl}/land-unit-convertor`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  description: 'Free land unit converter for Indian, South Asian, metric, Asian, European, Middle Eastern, American and historical land measurement units.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: ['Marla conversion', 'Kanal conversion', 'Acre conversion', 'Bigha conversion', 'Square feet conversion', '39+ land units'],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Land Unit Converter', item: `${siteUrl}/land-unit-convertor` },
  ],
};

export default function LandCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <LandCalculatorClient />

      <section className="mx-auto max-w-5xl px-3 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-8">
          <div className="mb-5">
            <h2 className="text-xl font-black text-foreground sm:text-2xl">Land units and categories</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/60 sm:text-base">Browse every supported unit by region. These categories are reference information only; the converter search includes every unit at the same time.</p>
          </div>

          <div className="space-y-2.5">
            {LAND_CATEGORIES.map(category => (
              <details key={category.name} className="group overflow-hidden rounded-2xl border border-border bg-background/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-bold text-foreground marker:hidden sm:px-5">
                  <span>{category.name} <span className="font-normal text-foreground/40">({category.units.length} units)</span></span>
                  <span className="text-foreground/40 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="border-t border-border px-4 pt-3 text-xs leading-5 text-foreground/50 sm:px-5">{category.description}</p>
                <div className="grid gap-x-4 gap-y-2 border-t border-border px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
                  {category.units.map(unit => (
                    <div key={unit.name} className="rounded-xl border border-border/70 bg-card/50 px-3 py-2.5">
                      <div className="text-sm font-semibold text-foreground/85">{unit.name}</div>
                      <div className="mt-0.5 text-xs text-foreground/45">1 unit = {unit.sqft.toLocaleString('en-IN')} sq ft</div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-3 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-8">
          <h2 className="text-xl font-black text-foreground sm:text-2xl">How the land unit converter works</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/65 sm:text-base">Every conversion uses square feet as the central intermediate pivot. First, the entered value is multiplied by the source unit&apos;s square-foot ratio. The square-foot value is then divided by the target unit&apos;s ratio.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-background/60 px-4 py-4 font-mono text-sm font-semibold text-primary">Result = Input × (From Unit in sq ft ÷ To Unit in sq ft)</div>
          <p className="mt-4 text-sm leading-7 text-foreground/60">The converter is useful for land measurements in India and South Asia, as well as metric, Asian, European, Middle Eastern, American and historical Imperial units.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
