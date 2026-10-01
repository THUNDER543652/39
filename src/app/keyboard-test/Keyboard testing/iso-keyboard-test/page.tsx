import type { Metadata } from 'next';
import KeyboardTestClient from '../keyboard-test/KeyboardTestClient';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = {
  title: 'ISO Keyboard Test – UK/EU Layout Keyboard Tester Online',
  description:
    'Test your ISO UK or EU layout keyboard online. Includes the extra key between left Shift and Z, tall Enter key. Free real-time keyboard tester for ISO keyboards.',
  keywords: [
    'ISO keyboard test',
    'UK keyboard test',
    'EU keyboard test',
    'ISO layout keyboard tester',
    'British keyboard test',
    'ISO keyboard checker',
    'test ISO keyboard online',
    'keyboard diagnostic',
    'keyboard hardware test',
    'keyboard device diagnostic',
    'online keyboard test',
  ],
  openGraph: {
    title: 'ISO Keyboard Test – UK/EU Layout Keyboard Tester',
    description:
      'Test every key on your ISO UK/EU layout keyboard. Includes extra key, tall Enter, and £ symbol key.',
    type: 'website',
    url: 'https://www.testappara.com/keyboard-test/Keyboard%20testing/iso-keyboard-test',
  },
  alternates: { canonical: '/keyboard-test/Keyboard%20testing/iso-keyboard-test' },
  robots: { index: true, follow: true },
};

export default function ISOKeyboardTestPage() {
  return (
    <>
      <ToolSeoSchema name='ISO Keyboard Test – UK/EU Layout Keyboard Tester Online' description='Test your ISO UK or EU layout keyboard online. Includes the extra key between left Shift and Z, tall Enter key. Free real-time keyboard tester for ISO keyboards.' canonical='/keyboard-test/Keyboard%20testing/iso-keyboard-test' />
      <KeyboardTestClient
      initialLayout="full"
      initialPlatform="windows"
      initialRegion="iso"
      initialTheme="dark"
      pageTitle="ISO Keyboard Test"
      pageDescription="Test every key on your ISO (UK/EU) layout keyboard including the extra key and tall Enter."
    />
    </>
  );
}
