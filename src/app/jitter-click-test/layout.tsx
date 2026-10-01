import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Jitter Click Test — Mouse Click Speed Diagnostic',
  description: 'Measure jitter clicking speed, CPS, and click consistency with a free browser-based mouse click diagnostic tool.',
  canonical: '/jitter-click-test',
  keywords: [
    'jitter click test',
    'jitter clicking test',
    'CPS test',
    'mouse click test',
    'click speed test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Jitter Click Test — Mouse Click Speed Diagnostic' description='Measure jitter clicking speed, CPS, and click consistency with a free browser-based mouse click diagnostic tool.' canonical='/jitter-click-test' />
      {children}
    </>
  );
}
