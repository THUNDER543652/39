import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Spacebar Test — Keyboard Key Diagnostic',
  description: 'Test spacebar presses, response, speed, and key registration with a free online keyboard and device diagnostic tool.',
  canonical: '/spacebar-test',
  keywords: [
    'spacebar test',
    'space bar test',
    'keyboard test',
    'keyboard diagnostic',
    'key test',
    'keyboard key test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Spacebar Test — Keyboard Key Diagnostic' description='Test spacebar presses, response, speed, and key registration with a free online keyboard and device diagnostic tool.' canonical='/spacebar-test' />
      {children}
    </>
  );
}
