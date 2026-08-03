import { AppShell } from "@/components/layout/app-shell";

const actions = [
  {
    title: "Neues Projekt",
    description: "Eine neue Gerüstprüfung anlegen",
    accent: "from-cyan-400 to-blue-500",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-8 w-8"
      >
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Projekte",
    description: "Bestehende Prüfungen verwalten",
    accent: "from-violet-400 to-fuchsia-500",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-8 w-8"
      >
        <path
          d="M3.75 7.75h6l1.5 2h9v7.5a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2v-9.5Z"
          strokeLinejoin="round"
        />
        <path d="M3.75 9.75v-3a2 2 0 0 1 2-2h3l1.5 2h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Einstellungen",
    description: "Anwendung individuell konfigurieren",
    accent: "from-amber-300 to-orange-500",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-8 w-8"
      >
        <path
          d="M12 15.25A3.25 3.25 0 1 0 12 8.75a3.25 3.25 0 0 0 0 6.5Z"
        />
        <path
          d="m19.1 13.4 1.15.9-1.8 3.1-1.35-.55a7.6 7.6 0 0 1-2.35 1.35l-.2 1.45h-3.6l-.2-1.45a7.6 7.6 0 0 1-2.35-1.35l-1.35.55-1.8-3.1 1.15-.9a7.8 7.8 0 0 1 0-2.7l-1.15-.9 1.8-3.1 1.35.55a7.6 7.6 0 0 1 2.35-1.35l.2-1.45h3.6l.2 1.45a7.6 7.6 0 0 1 2.35 1.35l1.35-.55 1.8 3.1-1.15.9a7.8 7.8 0 0 1 0 2.7Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="relative flex min-h-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 lg:px-10 xl:px-12">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-slate-500 uppercase">Arbeitsbereich</p>
            <h2 className="mt-1 text-lg font-semibold">Übersicht</h2>
          </div>
          <button type="button" aria-label="Benachrichtigungen" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-slate-400">●</button>
        </header>

        <section className="flex flex-1 flex-col justify-center py-12 sm:py-16 xl:py-20">
          <div className="mb-10 max-w-3xl sm:mb-14">
            <div className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-cyan-300 uppercase sm:text-sm">
              <span className="h-px w-8 bg-cyan-300/70" />
              Digitale Gerüstprüfung
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl xl:text-6xl">
              ScaffoldAI <span className="text-slate-500">Inspect</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Gerüstprüfungen übersichtlich, effizient und digital organisieren.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-3 xl:gap-5">
            {actions.map((action, index) => (
              <button
                key={action.title}
                type="button"
                className="group relative min-h-44 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${action.accent} opacity-70`}
                />
                <span className="absolute right-5 top-4 font-mono text-xs text-slate-600">
                  0{index + 1}
                </span>
                <span
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${action.accent} text-slate-950 shadow-lg transition duration-300 group-hover:scale-105`}
                >
                  {action.icon}
                </span>
                <span className="block text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
                  {action.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-slate-400">
                  {action.description}
                </span>
                <span className="absolute bottom-6 right-6 text-xl text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-slate-300">
                  →
                </span>
              </button>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-white/[0.07] pt-5 text-xs text-slate-600">
          <span>ScaffoldAI Inspect</span>
          <span>Digitale Sicherheit am Gerüst</span>
        </footer>
      </div>
      </div>
    </AppShell>
  );
}
