import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'CPS Test — Clicks Per Second & Mouse Diagnostic',
  description: 'Measure clicks per second, click speed, and accuracy with a free online CPS test and mouse diagnostic tool.',
  canonical: '/cps-test',
  keywords: [
    'CPS test',
    'clicks per second test',
    'click speed test',
    'mouse CPS test',
    'mouse diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='CPS Test — Clicks Per Second & Mouse Diagnostic' description='Measure clicks per second, click speed, and accuracy with a free online CPS test and mouse diagnostic tool.' canonical='/cps-test' />
      {children}
    </>
  );
}
