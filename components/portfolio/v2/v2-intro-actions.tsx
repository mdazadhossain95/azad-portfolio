"use client";

const INTRO_PREFERENCE_KEY = "v2-universe-intro-seen";

export function V2IntroActions() {
  const rememberSkip = () => {
    window.sessionStorage.setItem(INTRO_PREFERENCE_KEY, "true");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#hero"
        className="btn-primary inline-flex min-h-12 items-center px-7 font-medium"
      >
        Enter portfolio
      </a>
      <a
        href="#hero"
        onClick={rememberSkip}
        className="btn-secondary inline-flex min-h-12 items-center px-7 font-medium"
      >
        Skip intro
      </a>
    </div>
  );
}
