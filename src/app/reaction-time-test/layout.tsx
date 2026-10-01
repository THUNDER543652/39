import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Reaction Time Test — Reflex & Response Diagnostic',
  description: 'Measure reaction time in milliseconds with a free online reaction time test for checking reflexes and response performance.',
  canonical: '/reaction-time-test',
  keywords: [
    'reaction time test',
    'reaction speed test',
    'reflex test',
    'response time test',
    'reaction diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Reaction Time Test — Reflex & Response Diagnostic' description='Measure reaction time in milliseconds with a free online reaction time test for checking reflexes and response performance.' canonical='/reaction-time-test' />
      {children}
    </>
  );
}
