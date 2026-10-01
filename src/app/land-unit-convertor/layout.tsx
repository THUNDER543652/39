import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Land Unit Converter — Kanal, Marla & Square Feet',
  description: 'Convert land area between Kanal, Marla, square feet, and related land units with a free online calculator.',
  alternates: { canonical: '/land-unit-convertor' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
