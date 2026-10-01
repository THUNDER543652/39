import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'Laptop Keyboard Test – Test Notebook Keyboard Keys Online',
  description:
    'Test your laptop or notebook keyboard online. Supports compact laptop layouts with Fn key, arrow keys, and all standard keys. Free real-time keyboard tester.',
  keywords: [
    'laptop keyboard test',
    'notebook keyboard test',
    'laptop keyboard checker',
    'test laptop keys',
    'fn key test',
    'laptop keyboard tester online',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'Laptop Keyboard Test – Notebook Keyboard Tester',
    description:
      'Test every key on your laptop keyboard. Supports Fn key, compact layout, and all standard laptop keys.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/laptop-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/laptop-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function LaptopKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='Laptop Keyboard Test – Test Notebook Keyboard Keys Online' description='Test your laptop or notebook keyboard online. Supports compact laptop layouts with Fn key, arrow keys, and all standard keys. Free real-time keyboard tester.' canonical='/keyboard-test/Keyboard%20testing/laptop-keyboard-test' />
      <KeyboardTestClient
      initialLayout="laptop"
      initialPlatform="windows"
      initialRegion="ansi"
      initialTheme="dark"
      pageTitle="Laptop Keyboard Test"
      pageDescription="Test every key on your laptop keyboard including Fn key, arrow keys, and all compact layout keys."
    />
    </>
  );
}
