import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Browser Test — Device & Browser Diagnostic Tool',
  description: 'Test browser capabilities, device information, supported APIs, permissions, and modern web features with a free online browser and device diagnostic tool.',
  canonical: '/browser-test',
  keywords: [
    'browser test',
    'browser diagnostic',
    'browser capability test',
    'device information test',
    'browser compatibility test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Browser Test — Device & Browser Diagnostic Tool' description='Test browser capabilities, device information, supported APIs, permissions, and modern web features with a free online browser and device diagnostic tool.' canonical='/browser-test' />
      {children}
    </>
  );
}
