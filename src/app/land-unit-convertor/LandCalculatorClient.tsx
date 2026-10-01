'use client';

import { useMemo, useState } from 'react';
import { ArrowLeftRight, Check, ChevronDown, Copy, LandPlot, Search } from 'lucide-react';
import { LAND_UNITS, type LandUnit } from '@/lib/landUnits';

const fmt = (value: number) => {
  if (!Number.isFinite(value)) return '0';
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 8 }).format(value);
};

function UnitCombobox({ value, onChange, label }: { value: LandUnit; onChange: (unit: LandUnit) => void; label: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LAND_UNITS;
    return [...LAND_UNITS]
      .filter(unit => [unit.name, unit.category, ...(unit.searchTerms ?? [])].join(' ').toLowerCase().includes(q))
      .sort((a, b) => {
        const aText = `${a.name} ${a.searchTerms?.join(' ') ?? ''}`.toLowerCase();
        const bText = `${b.name} ${b.searchTerms?.join(' ') ?? ''}`.toLowerCase();
        const aStarts = aText.startsWith(q) ? 0 : aText.includes(q) ? 1 : 2;
        const bStarts = bText.startsWith(q) ? 0 : bText.includes(q) ? 1 : 2;
        return aStarts - bStarts || a.name.localeCompare(b.name);
      });
  }, [query]);

  return (
    <div className="relative min-w-0 w-full">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="converter-unit flex min-h-[54px] w-full items-center justify-between gap-3 rounded-2xl border border-border bg-input px-4 py-3 text-left text-sm font-bold text-foreground transition hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-ring/30"
      >
        <span className="min-w-0 truncate">{value.name}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <button aria-label="Close unit selector" className="fixed inset-0 z-30 cursor-default" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="border-b border-border p-2">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-input px-3">
                <Search className="h-4 w-4 shrink-0 text-foreground/45" />
                <input
                  autoFocus
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search any land unit..."
                  aria-label="Search all land units"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-foreground/35"
                />
              </div>
            </div>
            <div className="max-h-72 overflow-y-auto p-1.5" role="listbox">
              {filtered.map(unit => (
                <button
                  key={unit.name}
                  type="button"
                  role="option"
                  aria-selected={unit.name === value.name}
                  onClick={() => { onChange(unit); setOpen(false); setQuery(''); }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm transition hover:bg-primary/10 ${unit.name === value.name ? 'bg-primary/10 text-primary' : 'text-foreground/80'}`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold">{unit.name}</span>
                    <span className="mt-0.5 block truncate text-[11px] text-foreground/40">{unit.category}</span>
                  </span>
                  {unit.name === value.name && <Check className="h-4 w-4 shrink-0" />}
                </button>
              ))}
              {!filtered.length && <p className="px-3 py-8 text-center text-sm text-foreground/50">No matching land unit</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function LandCalculatorClient() {
  const defaultFrom = LAND_UNITS.find(unit => unit.name === 'Marla')!;
  const defaultTo = LAND_UNITS.find(unit => unit.name === 'Acre')!;
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const [input, setInput] = useState('5');
  const [copied, setCopied] = useState(false);

  const numericInput = Number(input) || 0;
  const sqft = numericInput * fromUnit.sqft;
  const result = sqft / toUnit.sqft;

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInput(Number.isFinite(result) ? String(Number(result.toPrecision(12))) : '0');
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(String(result));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access can be unavailable in some browsers/contexts.
    }
  };

  return (
    <main className="land-converter-page relative overflow-hidden">
      <div className="tw-hero-glow pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-90" />
      <section className="land-converter-hero relative mx-auto w-full max-w-[1400px] px-2 pb-12 pt-8 sm:px-5 sm:pb-14 sm:pt-10 lg:px-7 xl:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary"><LandPlot className="h-3.5 w-3.5" /> Land Tools</div>
          <h1 className="land-converter-title text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">Land Unit Converter</h1>
          <p className="land-converter-subtitle mx-auto mt-3 max-w-2xl text-sm leading-6 text-foreground/65 sm:mt-4 sm:text-base sm:leading-7">Convert land measurements across Indian, metric, Asian, European, Middle Eastern, American, and historical units using square feet as the central calculation base.</p>
        </div>

        <div className="converter-shell mx-auto mt-7 w-full min-w-0 max-w-full rounded-[1.5rem] border border-border bg-card/90 p-2.5 shadow-2xl backdrop-blur-xl sm:mt-9 sm:rounded-[2rem] sm:p-5">
          <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-4">
            <div className="converter-panel min-w-0 w-full rounded-2xl border border-border bg-background/45 p-3.5 sm:rounded-3xl sm:p-5">
              <h2 className="mb-3 text-base font-extrabold text-foreground sm:mb-4 sm:text-lg">From</h2>
              <input
                className="converter-value mb-3 block min-w-0 w-full max-w-full rounded-2xl border border-border bg-input px-4 py-3.5 text-2xl font-black tracking-tight text-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-ring/20 sm:mb-4 sm:py-4"
                inputMode="decimal"
                value={input}
                onChange={e => setInput(e.target.value)}
                aria-label={`Value in ${fromUnit.name}`}
              />
              <UnitCombobox value={fromUnit} onChange={setFromUnit} label="Choose source land unit" />
            </div>

            <button type="button" onClick={swap} aria-label="Swap source and target units" className="converter-swap mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition hover:scale-105 hover:bg-primary/15 lg:mt-6">
              <ArrowLeftRight className="h-5 w-5" />
            </button>

            <div className="converter-panel min-w-0 w-full rounded-2xl border border-border bg-background/45 p-3.5 sm:rounded-3xl sm:p-5">
              <h2 className="mb-3 text-base font-extrabold text-foreground sm:mb-4 sm:text-lg">To</h2>
              <div className="mb-3 flex w-full min-w-0 max-w-full gap-2 sm:mb-4">
                <input readOnly value={fmt(result)} aria-label={`Converted value in ${toUnit.name}`} className="converter-value min-w-0 w-0 flex-1 max-w-full rounded-2xl border border-border bg-input px-4 py-3.5 text-2xl font-black tracking-tight text-primary outline-none sm:py-4" />
                <button type="button" onClick={copyResult} className="converter-copy grid w-12 min-w-12 shrink-0 place-items-center rounded-2xl border border-border bg-input text-foreground/65 transition hover:border-primary/40 hover:text-primary sm:w-14" aria-label="Copy converted result">
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>
              <UnitCombobox value={toUnit} onChange={setToUnit} label="Choose target land unit" />
            </div>
          </div>

          <div className="live-conversion mt-3 rounded-2xl border border-primary/15 bg-primary/5 px-3.5 py-3.5 sm:mt-4 sm:px-5 sm:py-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-primary/70">Live conversion</div>
            <p className="mt-1 break-words font-mono text-xs font-semibold leading-6 text-foreground sm:text-sm sm:leading-7">{fmt(numericInput)} {fromUnit.name} <span className="text-foreground/35">→</span> {fmt(sqft)} sq ft <span className="text-foreground/35">→</span> {fmt(result)} {toUnit.name}</p>
          </div>
        </div>

        <div className="quick-info mx-auto mt-4 grid w-full max-w-[1280px] gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-3">
          {[['Central base', 'Square Feet (sq ft)'], ['Formula', 'Input × source ratio ÷ target ratio'], ['Updates', 'Instant on every change']].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-border bg-card/60 px-3.5 py-3 text-center sm:px-4">
              <div className="quick-info-title text-[10px] font-bold uppercase tracking-wider text-foreground/40">{title}</div>
              <div className="quick-info-text mt-1 text-xs font-bold text-foreground/80 sm:text-sm">{text}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
