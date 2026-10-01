import type { Metadata } from 'next';
import KeyboardTestClient from './KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'Keyboard Tester – Test Every Key Online | Free Keyboard Test Tool',
  description:
    'Free online keyboard tester. Test every key on your keyboard in real time. Supports Full Size, TKL, 75%, 65%, 60%, Mac, MacBook, Laptop, and more layouts. ANSI & ISO support.',
  keywords: [
    'keyboard tester',
    'keyboard test online',
    'test keyboard keys',
    'keyboard checker',
    'mechanical keyboard test',
    'full size keyboard test',
    'TKL keyboard test',
    '60% keyboard test',
    'mac keyboard test',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'Keyboard Tester – Test Every Key Online',
    description:
      'Free online keyboard tester supporting Full Size, TKL, 75%, 65%, 60%, Mac, MacBook, Laptop layouts. Real-time key detection with RGB highlights.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/keyboard-test' },
  robots: { index: true, follow: true },
};

export default function KeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='Keyboard Tester – Test Every Key Online | Free Keyboard Test Tool' description='Free online keyboard tester. Test every key on your keyboard in real time. Supports Full Size, TKL, 75%, 65%, 60%, Mac, MacBook, Laptop, and more layouts. ANSI & ISO support.' canonical='/keyboard-test/Keyboard%20testing/keyboard-test' />
      <KeyboardTestClient
      initialLayout="full"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="Keyboard Tester"
      pageDescription="Test every key on your keyboard in real time. Supports all layouts."
    />
    </>
  );
}
