import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Monitor Test — Display & Screen Diagnostic',
  description: 'Run free online monitor and screen diagnostics for display quality, colors, contrast, brightness, and visual uniformity.',
  canonical: '/monitor-test',
  keywords: [
    'monitor test',
    'screen test',
    'display test',
    'monitor diagnostic',
    'screen diagnostic',
    'display diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Monitor Test — Display & Screen Diagnostic' description='Run free online monitor and screen diagnostics for display quality, colors, contrast, brightness, and visual uniformity.' canonical='/monitor-test' />
      {children}
    </>
  );
}
