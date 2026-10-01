import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Mouse Test — Button, Scroll & Device Diagnostic',
  description: 'Test left, right, middle, side buttons, scroll wheel, click response, and mouse input with a free online mouse and device diagnostic tool.',
  canonical: '/mouse-test',
  keywords: [
    'mouse test',
    'mouse button test',
    'mouse click test',
    'mouse scroll test',
    'mouse diagnostic',
    'mouse device test',
    'hardware mouse test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Mouse Test — Button, Scroll & Device Diagnostic' description='Test left, right, middle, side buttons, scroll wheel, click response, and mouse input with a free online mouse and device diagnostic tool.' canonical='/mouse-test' />
      {children}
    </>
  );
}
