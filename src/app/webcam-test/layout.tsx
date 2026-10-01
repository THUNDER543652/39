import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Webcam Test — Camera & Video Diagnostic',
  description: 'Test webcam camera feed, resolution, FPS, permissions, and video input with a free online camera and device diagnostic tool.',
  canonical: '/webcam-test',
  keywords: [
    'webcam test',
    'camera test',
    'webcam diagnostic',
    'camera diagnostic',
    'video test',
    'camera FPS test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Webcam Test — Camera & Video Diagnostic' description='Test webcam camera feed, resolution, FPS, permissions, and video input with a free online camera and device diagnostic tool.' canonical='/webcam-test' />
      {children}
    </>
  );
}
