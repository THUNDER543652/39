import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Microphone Test — Mic & Audio Input Diagnostic',
  description: 'Check microphone input, audio levels, permissions, and microphone availability with a free online mic test and audio diagnostic tool.',
  canonical: '/microphone-test',
  keywords: [
    'microphone test',
    'mic test',
    'microphone diagnostic',
    'audio input test',
    'mic diagnostic',
    'audio diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Microphone Test — Mic & Audio Input Diagnostic' description='Check microphone input, audio levels, permissions, and microphone availability with a free online mic test and audio diagnostic tool.' canonical='/microphone-test' />
      {children}
    </>
  );
}
