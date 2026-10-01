import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'TKL Keyboard Test – Tenkeyless 87 Key Keyboard Tester Online',
  description:
    'Test your TKL (Tenkeyless) 87-key keyboard online. No numpad, full function row and navigation cluster. Free real-time keyboard tester for mechanical keyboards.',
  keywords: [
    'TKL keyboard test',
    'tenkeyless keyboard test',
    '87 key keyboard test',
    'TKL mechanical keyboard tester',
    'test TKL keyboard online',
    'tenkeyless keyboard checker',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'TKL Keyboard Test – Tenkeyless 87-Key Keyboard Tester',
    description:
      'Test every key on your TKL tenkeyless 87-key keyboard. Full function row, navigation cluster, no numpad.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/tkl-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/tkl-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function TKLKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='TKL Keyboard Test – Tenkeyless 87 Key Keyboard Tester Online' description='Test your TKL (Tenkeyless) 87-key keyboard online. No numpad, full function row and navigation cluster. Free real-time keyboard tester for mechanical keyboards.' canonical='/keyboard-test/Keyboard%20testing/tkl-keyboard-test' />
      <KeyboardTestClient
      initialLayout="tkl"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="TKL Keyboard Test"
      pageDescription="Test every key on your TKL (Tenkeyless) 87-key keyboard. Full function row and navigation cluster without numpad."
    />
    </>
  );
}
