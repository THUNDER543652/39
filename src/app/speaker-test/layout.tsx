import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Speaker Test — Audio & Speaker Diagnostic',
  description: 'Test left and right speakers, stereo channels, audio output, and sound playback with a free online speaker and audio diagnostic tool.',
  canonical: '/speaker-test',
  keywords: [
    'speaker test',
    'audio test',
    'speaker diagnostic',
    'sound test',
    'stereo test',
    'audio diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Speaker Test — Audio & Speaker Diagnostic' description='Test left and right speakers, stereo channels, audio output, and sound playback with a free online speaker and audio diagnostic tool.' canonical='/speaker-test' />
      {children}
    </>
  );
}
