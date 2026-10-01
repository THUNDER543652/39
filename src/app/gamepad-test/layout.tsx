import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Gamepad Test — Controller & Gamepad Diagnostic',
  description: 'Test gamepad and controller buttons, sticks, triggers, axes, and input response with a free online controller diagnostic tool.',
  canonical: '/gamepad-test',
  keywords: [
    'gamepad test',
    'controller test',
    'game controller test',
    'joystick test',
    'controller diagnostic',
    'gamepad diagnostic',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Gamepad Test — Controller & Gamepad Diagnostic' description='Test gamepad and controller buttons, sticks, triggers, axes, and input response with a free online controller diagnostic tool.' canonical='/gamepad-test' />
      {children}
    </>
  );
}
