import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: '60% Keyboard Test – Test 60 Percent Mechanical Keyboard Online',
  description:
    'Test your 60% mechanical keyboard online. Real-time key detection for compact 60 percent keyboards. Check every key works correctly with our free keyboard tester.',
  keywords: [
    '60% keyboard test',
    '60 percent keyboard test',
    'compact keyboard test',
    '60% mechanical keyboard tester',
    'test 60 percent keyboard',
    'GH60 keyboard test',
    'poker keyboard test',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: '60% Keyboard Test – Compact Keyboard Tester',
    description:
      'Test every key on your 60% compact mechanical keyboard. Real-time detection with RGB highlights.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/60-percent-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/60-percent-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function SixtyPercentKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='60% Keyboard Test – Test 60 Percent Mechanical Keyboard Online' description='Test your 60% mechanical keyboard online. Real-time key detection for compact 60 percent keyboards. Check every key works correctly with our free keyboard tester.' canonical='/keyboard-test/Keyboard%20testing/60-percent-keyboard-test' />
      <KeyboardTestClient
      initialLayout="60"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="60% Keyboard Test"
      pageDescription="Test every key on your 60% compact keyboard. Popular with mechanical keyboard enthusiasts."
    />
    </>
  );
}
