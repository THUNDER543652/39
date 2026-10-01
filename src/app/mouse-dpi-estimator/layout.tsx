import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Mouse DPI Test — DPI Estimator & Mouse Diagnostic',
  description: 'Estimate and check mouse DPI with a free online DPI test and mouse diagnostic tool without installing software.',
  canonical: '/mouse-dpi-estimator',
  keywords: [
    'mouse DPI test',
    'DPI test',
    'DPI estimator',
    'mouse DPI checker',
    'DPI test mouse',
    'mouse diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Mouse DPI Test — DPI Estimator & Mouse Diagnostic' description='Estimate and check mouse DPI with a free online DPI test and mouse diagnostic tool without installing software.' canonical='/mouse-dpi-estimator' />
      {children}
    </>
  );
}
