import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Scroll Test — Mouse Wheel & Scroll Diagnostic',
  description: 'Test mouse scroll wheel input, direction, scrolling behavior, and wheel response with a free online mouse diagnostic tool.',
  canonical: '/scroll-test',
  keywords: [
    'scroll test',
    'mouse scroll test',
    'scroll wheel test',
    'mouse wheel test',
    'mouse diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Scroll Test — Mouse Wheel & Scroll Diagnostic' description='Test mouse scroll wheel input, direction, scrolling behavior, and wheel response with a free online mouse diagnostic tool.' canonical='/scroll-test' />
      {children}
    </>
  );
}
