import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'Full Size Keyboard Test – 104/105 Key Keyboard Tester Online',
  description:
    'Test your full size 104 or 105 key keyboard online. Includes function keys F1–F12, numpad, navigation keys, arrow keys, and all modifier keys. Free real-time key tester.',
  keywords: [
    'full size keyboard test',
    '104 key keyboard test',
    '105 key keyboard test',
    'full keyboard tester',
    'numpad keyboard test',
    'keyboard test online',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'Full Size Keyboard Test – 104/105 Key Keyboard Tester',
    description:
      'Test every key on your full size 104/105 key keyboard. Real-time detection with RGB highlights, N-key rollover support.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/full-size-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/full-size-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function FullSizeKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='Full Size Keyboard Test – 104/105 Key Keyboard Tester Online' description='Test your full size 104 or 105 key keyboard online. Includes function keys F1–F12, numpad, navigation keys, arrow keys, and all modifier keys. Free real-time key tester.' canonical='/keyboard-test/Keyboard%20testing/full-size-keyboard-test' />
      <KeyboardTestClient
      initialLayout="full"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="Full Size Keyboard Test"
      pageDescription="Test every key on your 104/105 key full size keyboard including numpad, F-keys, and navigation cluster."
    />
    </>
  );
}
