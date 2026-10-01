'use client';

import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';



export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Full footer for tablets/desktop */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-6 lg:py-9">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <AppLogo size={28} />
            </Link>
            <p className="mt-2 max-w-md text-[11px] leading-5 text-foreground/45">Free online tools to test your gear. No downloads, instant results.</p>
            <Link href="/test-tool-page" className="mt-2 text-[11px] font-semibold text-primary transition-colors hover:text-foreground">View all 24 tests →</Link>
          </div>

        </div>

        <div className="border-t border-border/80">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 py-5 text-center sm:px-6">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-foreground/60">
              <Link href="/about" className="transition-colors hover:text-primary">About</Link>
              <span className="text-foreground/20" aria-hidden="true">|</span>
              <Link href="/privacy" className="transition-colors hover:text-primary">Privacy</Link>
              <span className="text-foreground/20" aria-hidden="true">|</span>
              <Link href="/terms" className="transition-colors hover:text-primary">Terms</Link>
              <span className="text-foreground/20" aria-hidden="true">|</span>
              <Link href="/faq" className="transition-colors hover:text-primary">FAQ</Link>
            </nav>
            <div className="mt-4 w-full border-t border-border/70 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=testappara.tools@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
              >
                testappara.tools@gmail.com
              </a>
              <p className="mt-2 text-[10px] leading-5 text-foreground/40">© 2026 TestAppara. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal footer on phones, as requested */}
      <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 text-center sm:hidden">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=testappara.tools@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
        >
          testappara.tools@gmail.com
        </a>
        <p className="text-[10px] leading-5 text-foreground/45">© 2026 TestAppara. All rights reserved.</p>
      </div>
    </footer>
  );
}
