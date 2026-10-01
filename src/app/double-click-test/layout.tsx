import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Double Click Test — Mouse Switch & Click Diagnostic',
  description: 'Test mouse double-click performance, switch consistency, accidental double clicks, and click response with a free online mouse diagnostic.',
  canonical: '/double-click-test',
  keywords: [
    'double click test',
    'mouse double click test',
    'double click speed test',
    'mouse switch test',
    'mouse diagnostic',
    'click test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Double Click Test — Mouse Switch & Click Diagnostic' description='Test mouse double-click performance, switch consistency, accidental double clicks, and click response with a free online mouse diagnostic.' canonical='/double-click-test' />
      {children}
    </>
  );
}
