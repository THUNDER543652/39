import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: '65% Keyboard Test – Test 65 Percent Mechanical Keyboard Online',
  description:
    'Test your 65% mechanical keyboard online. Includes arrow keys and a few extra keys over 60%. Real-time key detection for compact 65 percent keyboards.',
  keywords: [
    '65% keyboard test',
    '65 percent keyboard test',
    '65% mechanical keyboard tester',
    'test 65 percent keyboard',
    'compact keyboard with arrows test',
    'keyboard tester online',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: '65% Keyboard Test – Compact Keyboard Tester with Arrow Keys',
    description:
      'Test every key on your 65% keyboard. Includes arrow keys and navigation keys in a compact form factor.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/65-percent-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/65-percent-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function SixtyFivePercentKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='65% Keyboard Test – Test 65 Percent Mechanical Keyboard Online' description='Test your 65% mechanical keyboard online. Includes arrow keys and a few extra keys over 60%. Real-time key detection for compact 65 percent keyboards.' canonical='/keyboard-test/Keyboard%20testing/65-percent-keyboard-test' />
      <KeyboardTestClient
      initialLayout="65"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="65% Keyboard Test"
      pageDescription="Test every key on your 65% keyboard with arrow keys and navigation keys."
    />
    </>
  );
}
