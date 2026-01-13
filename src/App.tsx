import logoUrl from "../images/logo.svg?url";

export default function App() {
  return (
    <div className="min-h-screen bg-brand text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0"></div>

        <main className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-8 py-16 text-center">
          <section className="max-w-2xl">
            <img
              src={logoUrl}
              alt="Skoruba Identity logo"
              className="mx-auto mb-6 h-24 w-24 brightness-0 invert sm:h-28 sm:w-28"
            />
            <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Skoruba Identity
            </h1>
            <p className="mt-6 text-base uppercase tracking-[0.2em] text-white/75 sm:text-lg">
              Identity, OpenID Connect, OAuth 2.1, and modern authentication for
              .NET
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">
                OIDC
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2">
                OAuth 2.1
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2">
                OSS
              </span>
            </div>
            <a
              href="https://github.com/skorubaid"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:translate-y-[-2px] hover:bg-white/20 hover:shadow-[0_14px_36px_rgba(0,0,0,0.25)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  role="img"
                  aria-label="GitHub"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.1 9.1 0 0 1 5.01 0c1.9-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
              </span>
              github.com/skorubaid
              <span aria-hidden="true" className="text-xs text-white/70">
                ↗
              </span>
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
