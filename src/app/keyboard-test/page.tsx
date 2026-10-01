import type { Metadata } from 'next';
import KeyboardTestClient from './Keyboard testing/keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'Keyboard Test — Check Every Key Online | Keyboard Diagnostic',
  description: 'Test every keyboard key online, check key presses, layouts, and key registration with a free keyboard test and hardware diagnostic tool.',
  keywords: [
    'keyboard test', 'keyboard tester', 'keyboard diagnostic', 'keyboard hardware test',
    'key test', 'key checker', 'keyboard key test', 'full keyboard test', 'laptop keyboard test',
    'mechanical keyboard test', 'keyboard troubleshooting', 'online keyboard test',
  ],
  alternates: { canonical: '/keyboard-test' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', title: 'Keyboard Test — Free Online Keyboard Diagnostic', description: 'Test every keyboard key online and check key registration, layouts, and keyboard input.', url: 'https://www.testappara.com/keyboard-test', siteName: 'TestAppara' },
  twitter: { card: 'summary', title: 'Keyboard Test — Test Every Key Online', description: 'Free online keyboard tester and keyboard diagnostic tool.' },
};

export default function KeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='Keyboard Test — Check Every Key Online | Keyboard Diagnostic' description='Test every keyboard key online, check key presses, layouts, and key registration with a free keyboard test and hardware diagnostic tool.' canonical='/keyboard-test' />
      <KeyboardTestClient initialLayout="full" initialPlatform="windows" initialRegion="ansi" initialTheme="dark" pageTitle="Keyboard Tester" pageDescription="Test every key on your keyboard in real time. Supports all layouts." />
    </>
  );
}
