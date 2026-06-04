// Version A — "Operations" · premium B2B naval site.
// Shell, language system, top bar, hero, home. Inner pages in pages-a.jsx.

const { useState, useEffect, useRef } = React;
const A = window.A22_A;

// Resolve a {es,en,pt,nl} node for the active language.
function tt(node, lang) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  return node[lang] || node.en || node.es || "";
}
window.tt = tt;

// ── Logo (real A22 symbol, transparent)
function LogoMark({ size = 26 }) {
  return (
    <img src="img/a22-symbol-t.png" width={size} height={size}
         alt="A22 Investments" style={{ display: "block", objectFit: "contain" }} />
  );
}
window.LogoMark = LogoMark;

// ── Language selector (4 languages, dropdown)
function LangMenu({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const current = A.langs.find(l => l.code === lang) || A.langs[0];
  return (
    <div className="ops-lang" ref={ref}>
      <button className="ops-lang-btn" onClick={() => setOpen(o => !o)} aria-haspopup="listbox" aria-expanded={open}>
        <span className="ops-lang-globe" aria-hidden>⊕</span>
        <span>{current.label}</span>
        <span className={`ops-lang-caret ${open ? "is-open" : ""}`} aria-hidden>▾</span>
      </button>
      {open && (
        <ul className="ops-lang-menu" role="listbox">
          {A.langs.map(l => (
            <li key={l.code}>
              <button
                className={l.code === lang ? "is-on" : ""}
                role="option"
                aria-selected={l.code === lang}
                onClick={() => { setLang(l.code); setOpen(false); }}>
                <span className="ops-mono">{l.label}</span>
                <span>{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Top bar
function TopBar({ page, setPage, lang, setLang }) {
  const sections = ["home", "about", "services", "products", "contact"];
  return (
    <header className="ops-top">
      <div className="ops-top-marquee" aria-hidden="true">
        <span className="ops-pulse-dot" /> {tt(A.hero.status, lang)}
        <span className="ops-marq-sep">·</span> {tt(A.brand.location, lang)}
        <span className="ops-marq-sep">·</span> ISO 9001 · IMO · ABS · DNV · LLOYD'S REGISTER · BUREAU VERITAS
        <span className="ops-marq-sep">·</span> {tt(A.hero.eyebrow, lang)}
      </div>
      <div className="ops-top-inner">
        <button className="ops-brand" onClick={() => setPage("home")}>
          <LogoMark size={26} />
          <span className="ops-brand-name">A22<span className="ops-brand-thin">INVESTMENTS</span></span>
        </button>

        <nav className="ops-nav">
          {sections.map((s) => (
            <button
              key={s}
              className={`ops-nav-item ${page === s ? "is-active" : ""}`}
              onClick={() => setPage(s)}>
              {tt(A.nav[s], lang)}
            </button>
          ))}
        </nav>

        <div className="ops-top-right">
          <LangMenu lang={lang} setLang={setLang} />
          <button className="ops-cta-sm" onClick={() => setPage("contact")}>
            {tt(A.cta.quoteShort, lang)} <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// ── Home
function PageHome({ lang, setPage }) {
  return (
    <React.Fragment>
      {/* HERO */}
      <section className="ops-hero">
        <img className="ops-hero-bg" src="img/hero-ship.jpg" alt="" aria-hidden="true" />
        <div className="ops-hero-scrim" aria-hidden="true" />
        <div className="ops-hero-inner">
          <div className="ops-hero-eyebrow">
            <span className="ops-tick" />
            <span>{tt(A.hero.eyebrow, lang)}</span>
          </div>
          <h1 className="ops-hero-title">{tt(A.hero.title, lang)}</h1>
          <p className="ops-hero-sub">{tt(A.hero.sub, lang)}</p>
          <div className="ops-hero-ctas">
            <button className="ops-btn ops-btn-primary ops-btn-lg" onClick={() => setPage("contact")}>
              {tt(A.cta.quote, lang)} <span aria-hidden>→</span>
            </button>
            <button className="ops-btn ops-btn-ghost ops-btn-lg" onClick={() => setPage("services")}>
              {tt(A.cta.services, lang)}
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT TRUST STRIP */}
      <section className="ops-trust">
        <span className="ops-trust-line">{tt(A.trust.line, lang)}</span>
        <div className="ops-trust-marks">
          {A.trust.marks.map((m, i) => (
            <span key={i} className="ops-trust-mark">{tt(m, lang)}</span>
          ))}
        </div>
      </section>

      {/* CREDIBILITY METRICS */}
      <section className="ops-section ops-section-tight">
        <SectionHead idx="01" eyebrow={tt(A.metrics.eyebrow, lang)} title={tt(A.metrics.title, lang)} />
        <div className="ops-metrics">
          {A.metrics.items.map((m, i) => (
            <div key={i} className="ops-metric">
              <span className="ops-mono ops-dim ops-metric-idx">{String(i+1).padStart(2,"0")} /</span>
              <span className="ops-metric-num">{m.num}</span>
              <span className="ops-metric-label">{tt(m.label, lang)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="ops-section ops-section-alt">
        <SectionHead idx="02" eyebrow={tt(A.services.eyebrow, lang)} title={tt(A.services.title, lang)} sub={tt(A.services.sub, lang)} />
        <div className="ops-services-grid">
          {A.services.list.map((s, i) => (
            <div key={i} className="ops-service-card">
              <div className="ops-service-num ops-mono">{s.num}</div>
              <h3>{tt(s.title, lang)}</h3>
              <p>{tt(s.desc, lang)}</p>
              <div className="ops-card-arrow" aria-hidden>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES TEASER */}
      <section className="ops-section">
        <SectionHead idx="03" eyebrow={tt(A.products.eyebrow, lang)} title={tt(A.products.title, lang)} sub={tt(A.products.sub, lang)} />
        <div className="ops-prod-grid">
          {A.products.list.map((p, i) => (
            <div key={i} className="ops-prod-card" onClick={() => setPage("products")}>
              <div className="ops-prod-card-top">
                <span className="ops-mono">{p.code}</span>
                <span className="ops-mono ops-dim">{String(i+1).padStart(2,"0")}/04</span>
              </div>
              <div className="ops-prod-card-stripe" aria-hidden />
              <h3>{tt(p.title, lang)}</h3>
              <p>{tt(p.short, lang)}</p>
            </div>
          ))}
        </div>
        <div className="ops-cta-row">
          <button className="ops-btn ops-btn-ghost" onClick={() => setPage("products")}>
            {tt(A.cta.portfolio, lang)} <span aria-hidden>→</span>
          </button>
        </div>
      </section>

      {/* BLUEPRINT BAND */}
      <BlueprintBand lang={lang} />

      {/* WORK PROOF BAND */}
      <WorkBand lang={lang} />

      {/* CLIENT SHOWCASE */}
      <ClientShowcase lang={lang} />

      {/* FINAL CTA */}
      <FinalCta lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}
