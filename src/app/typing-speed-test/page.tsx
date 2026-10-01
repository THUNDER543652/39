import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimationInit from '@/app/components/ScrollAnimationInit';
import TypingTest from './components/TypingTest';
import TypingSeoSections from './components/TypingSeoSections';

export const metadata: Metadata = {
  title: 'Typing Speed Test — WPM, Net WPM, Accuracy | TestAppara',
  description:
    'Free online typing speed test. Measure your Gross WPM, Net WPM, CPM, and accuracy. Choose easy, medium, or hard difficulty with 2, 5, or 10 minute durations. Download your typing certificate.',
  keywords: [
    'typing speed test', 'WPM test', 'words per minute', 'gross WPM', 'net WPM',
    'typing accuracy', 'CPM test', 'typing certificate', 'online typing test',
    'typing speed calculator', 'how fast can I type', 'typing test online free',
    'typing diagnostic', 'keyboard diagnostic', 'keyboard performance test', 'computer typing test',
  ],
  openGraph: {
    title: 'Typing Speed Test — Gross WPM, Net WPM & Accuracy | TestAppara',
    description: 'Test your typing speed with detailed metrics: Net WPM, Gross WPM, CPM, accuracy, streaks, and more. Download a certificate of your results.',
    type: 'website',
    url: 'https://www.testappara.com/typing-speed-test',
    siteName: 'TestAppara',
  },
  twitter: {
    card: 'summary',
    title: 'Typing Speed Test — WPM, Net WPM & Accuracy',
    description: 'Free online typing test with WPM, Net WPM, CPM, accuracy and performance results.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/typing-speed-test' },
};

export default function TypingSpeedTestPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      <Header />

      {/* Page header */}
      <div className="pt-24 pb-8 px-6 lg:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Free Typing Test
          </span>
          <h1 className="text-hero-sm font-bold text-foreground">
            Typing Speed <span className="text-primary">Test</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl">
            Measure your WPM, accuracy, and get a detailed performance report. Easy, Medium &amp; Hard modes. 2, 5, and 10 minute durations.
          </p>
        </div>
      </div>

      {/* Typing Test */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6">
        <TypingTest />
      </div>

      {/* SEO Sections */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
        <TypingSeoSections />
      </div>

      <Footer />
      <ScrollAnimationInit />
    </main>
  );
}
