import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Dead Pixel Test — Monitor & Display Diagnostic',
  description: 'Find dead, stuck, or defective pixels with a free online monitor test and display diagnostic tool using full-screen colors.',
  canonical: '/dead-pixel-test',
  keywords: [
    'dead pixel test',
    'stuck pixel test',
    'monitor test',
    'display test',
    'screen diagnostic',
    'pixel test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Dead Pixel Test — Monitor & Display Diagnostic' description='Find dead, stuck, or defective pixels with a free online monitor test and display diagnostic tool using full-screen colors.' canonical='/dead-pixel-test' />
      {children}
    </>
  );
}
