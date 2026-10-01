import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Full Device Test — PC, Laptop, Phone & Tablet Diagnostic',
  description: 'Run a complete device diagnostic and hardware test for PC, laptop, phone, or tablet. Check keyboard, mouse, touchscreen, display, network, audio, microphone, and camera.',
  canonical: '/device-test-series',
  keywords: [
    'full device test',
    'device diagnostic',
    'hardware diagnostic',
    'PC diagnostic',
    'laptop diagnostic',
    'phone diagnostic',
    'tablet diagnostic',
    'computer diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Full Device Test — PC, Laptop, Phone & Tablet Diagnostic' description='Run a complete device diagnostic and hardware test for PC, laptop, phone, or tablet. Check keyboard, mouse, touchscreen, display, network, audio, microphone, and camera.' canonical='/device-test-series' />
      {children}
    </>
  );
}
