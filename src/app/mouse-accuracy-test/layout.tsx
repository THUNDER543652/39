import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Mouse Accuracy Test — Pointer Precision Diagnostic',
  description: 'Test mouse pointer accuracy, targeting precision, movement, and control with a free online mouse diagnostic and accuracy test.',
  canonical: '/mouse-accuracy-test',
  keywords: [
    'mouse accuracy test',
    'mouse precision test',
    'pointer test',
    'mouse diagnostic',
    'mouse test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Mouse Accuracy Test — Pointer Precision Diagnostic' description='Test mouse pointer accuracy, targeting precision, movement, and control with a free online mouse diagnostic and accuracy test.' canonical='/mouse-accuracy-test' />
      {children}
    </>
  );
}
