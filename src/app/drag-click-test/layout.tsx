import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Drag Click Test — Mouse Drag Clicking Diagnostic',
  description: 'Test drag clicking performance, click registration, CPS, and consistency with a free online mouse drag-click diagnostic tool.',
  canonical: '/drag-click-test',
  keywords: [
    'drag click test',
    'drag clicking test',
    'mouse drag click test',
    'drag click CPS',
    'mouse click test',
    'mouse diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Drag Click Test — Mouse Drag Clicking Diagnostic' description='Test drag clicking performance, click registration, CPS, and consistency with a free online mouse drag-click diagnostic tool.' canonical='/drag-click-test' />
      {children}
    </>
  );
}
