import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Butterfly Click Test — CPS & Mouse Click Diagnostic',
  description: 'Test butterfly clicking speed, CPS, click consistency, and mouse performance with a free online click diagnostic tool.',
  canonical: '/butterfly-click-test',
  keywords: [
    'butterfly click test',
    'butterfly clicking test',
    'CPS test',
    'mouse click test',
    'click speed test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Butterfly Click Test — CPS & Mouse Click Diagnostic' description='Test butterfly clicking speed, CPS, click consistency, and mouse performance with a free online click diagnostic tool.' canonical='/butterfly-click-test' />
      {children}
    </>
  );
}
