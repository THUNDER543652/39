import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'Mac Keyboard Test – Test Apple Keyboard Keys Online',
  description:
    'Test your Apple Mac keyboard online. Supports ⌘ Command, ⌥ Option, Control, fn, and all Mac-specific keys. Real-time key detection for macOS keyboards.',
  keywords: [
    'mac keyboard test',
    'apple keyboard test',
    'macOS keyboard tester',
    'command key test',
    'option key test',
    'mac keyboard checker',
    'test mac keys online',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'Mac Keyboard Test – Apple Keyboard Key Tester',
    description:
      'Test every key on your Apple Mac keyboard. Supports ⌘ Command, ⌥ Option, fn, and all Mac-specific keys.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/mac-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/mac-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function MacKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='Mac Keyboard Test – Test Apple Keyboard Keys Online' description='Test your Apple Mac keyboard online. Supports ⌘ Command, ⌥ Option, Control, fn, and all Mac-specific keys. Real-time key detection for macOS keyboards.' canonical='/keyboard-test/Keyboard%20testing/mac-keyboard-test' />
      <KeyboardTestClient
      initialLayout="mac"
      initialPlatform="macos"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="Mac Keyboard Test"
      pageDescription="Test every key on your Apple Mac keyboard including ⌘ Command, ⌥ Option, fn, and all Mac-specific keys."
    />
    </>
  );
}
