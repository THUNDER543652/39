import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Touchscreen Test — Touch & Mobile Device Diagnostic',
  description: 'Test touchscreen responsiveness, touch points, multi-touch, and input behavior with a free online touchscreen and mobile device diagnostic.',
  canonical: '/touchscreen-test',
  keywords: [
    'touchscreen test',
    'touch screen test',
    'multi touch test',
    'touch diagnostic',
    'mobile diagnostic',
    'phone screen test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Touchscreen Test — Touch & Mobile Device Diagnostic' description='Test touchscreen responsiveness, touch points, multi-touch, and input behavior with a free online touchscreen and mobile device diagnostic.' canonical='/touchscreen-test' />
      {children}
    </>
  );
}
