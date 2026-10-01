import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Internet Speed Test — Network Diagnostic Tool',
  description: 'Test download speed, upload speed, connection performance, and network quality with a free online internet speed and network diagnostic tool.',
  canonical: '/internet-speed-test',
  keywords: [
    'internet speed test',
    'network speed test',
    'download speed test',
    'upload speed test',
    'internet diagnostic',
    'network diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Internet Speed Test — Network Diagnostic Tool' description='Test download speed, upload speed, connection performance, and network quality with a free online internet speed and network diagnostic tool.' canonical='/internet-speed-test' />
      {children}
    </>
  );
}
