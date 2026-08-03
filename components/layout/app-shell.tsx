import type { ReactNode } from "react";

const navigation = [
  { label: "Übersicht", icon: "⌂", active: true },
  { label: "Projekte", icon: "▦" },
  { label: "Aufnahmen", icon: "□" },
  { label: "Einstellungen", icon: "⚙" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100">
      <div className="grid min-h-screen md:grid-cols-[88px_minmax(0,1fr)_280px] xl:grid-cols-[240px_minmax(0,1fr)_320px]">
        <aside className="border-b border-white/[0.08] bg-[#090e19]/95 md:border-r md:border-b-0">
          <div className="flex h-full items-center justify-between px-5 py-4 md:flex-col md:items-stretch md:px-3 md:py-6 xl:px-5">
            <div className="flex items-center gap-3 md:justify-center xl:justify-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
                  <path d="M6 3v18M18 3v18M4 7h16M4 17h16M8 7v10M16 7v10" />
                </svg>
              </div>
              <div className="hidden xl:block">
                <p className="text-sm font-semibold tracking-[0.16em] uppercase">ScaffoldAI</p>
                <p className="text-xs text-slate-500">Inspect</p>
              </div>
            </div>

            <nav aria-label="Hauptnavigation" className="flex gap-1 md:my-auto md:flex-col md:gap-2">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  aria-current={item.active ? "page" : undefined}
                  title={item.label}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition md:justify-center xl:justify-start ${
                    item.active
                      ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-300/15"
                      : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"
                  }`}
                >
                  <span aria-hidden="true" className="w-5 text-center text-lg">{item.icon}</span>
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 rounded-xl border border-white/[0.07] p-3 md:flex md:justify-center xl:justify-start">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold">BL</div>
              <div className="hidden min-w-0 xl:block">
                <p className="truncate text-xs font-medium">Bauleitung</p>
                <p className="text-[11px] text-emerald-400">Online</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="relative min-w-0 overflow-hidden">{children}</main>

        <aside className="border-t border-white/[0.08] bg-[#090e19]/95 md:border-l md:border-t-0">
          <div className="flex h-full flex-col p-5 md:p-4 xl:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">ScaffoldAI Brain</p>
                <p className="mt-1 text-xs text-slate-500">Projektassistent</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            </div>

            <div className="my-6 rounded-2xl border border-cyan-300/10 bg-cyan-400/[0.045] p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">✦</div>
              <p className="text-sm font-medium text-slate-200">Bereit für dein Projekt</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Ich begleite dich bei Aufnahme, Prüfung und Dokumentation.</p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-600 uppercase">Projektstatus</p>
              {["Projektdaten", "Baustellenfotos", "Prüfangaben"].map((label) => (
                <div key={label} className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{label}</span>
                  <span className="text-slate-600">Offen</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-xl border border-dashed border-white/10 p-3 text-center text-xs leading-5 text-slate-600">
                Hinweise erscheinen, sobald du ein Projekt öffnest.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
