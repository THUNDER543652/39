import type { Metadata } from 'next';
import { createToolMetadata } from '@/lib/seo';
import ToolSeoSchema from '@/app/components/ToolSeoSchema';

export const metadata: Metadata = createToolMetadata({
  title: 'Latency Test — Ping & Network Diagnostic',
  description: 'Measure network ping, latency, and connection delay with a free online latency test and network diagnostic tool.',
  canonical: '/latency-test',
  keywords: [
    'latency test',
    'ping test',
    'network latency test',
    'ping diagnostic',
    'network diagnostic',
    'internet latency test',
  ],
});

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToolSeoSchema name='Latency Test — Ping & Network Diagnostic' description='Measure network ping, latency, and connection delay with a free online latency test and network diagnostic tool.' canonical='/latency-test' />
      {children}
    </>
  );
}
