import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Mouse Polling Rate Test — Hz & Mouse Diagnostic',
  description: 'Check mouse polling rate in Hz and inspect mouse movement reporting with a free online polling-rate diagnostic tool.',
  canonical: '/mouse-polling-rate-test',
  keywords: [
    'mouse polling rate test',
    'polling rate test',
    'mouse Hz test',
    'mouse report rate test',
    'mouse diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Mouse Polling Rate Test — Hz & Mouse Diagnostic' description='Check mouse polling rate in Hz and inspect mouse movement reporting with a free online polling-rate diagnostic tool.' canonical='/mouse-polling-rate-test' />
      {children}
    </>
  );
}
