// Version B — "Trade Bureau"
// Industrial editorial: cream paper, deep navy ink, asymmetric publication
// layouts, big editorial type, ledger numerals, sparse cyan accents.

const { useState, useEffect, useRef } = React;
const C = window.A22_CONTENT;
const t = window.t;

// ── Logo mark (real A22 symbol)
function TBLogoMark({ size = 28 }) {
  return (
    <img src="img/a22-symbol-t.png" width={size} height={size}
         alt="A22 Investments" style={{ display: "block", objectFit: "contain" }} />
  );
}

// ── Top bar (minimal editorial)
function TBTop({ page, setPage, lang, setLang }) {
  const sections = ["home", "about", "projects", "services", "products", "contact"];
  return (
    <header className="tb-top">
      <div className="tb-top-meta">
        <span>A22 INVESTMENTS LLC · {lang === "es" ? "DIVISIÓN NAVAL Y PORTUARIA" : "NAVAL & PORT DIVISION"}</span>
        <span className="tb-top-meta-mid">MIAMI, FL · +30 AÑOS</span>
        <span>
          {lang === "es" ? "PUERTA DE LAS AMÉRICAS · BILINGÜE" : "GATEWAY TO THE AMERICAS · BILINGUAL"}
        </span>
      </div>
      <div className="tb-top-bar">
        <button className="tb-brand" onClick={() => setPage("home")}>
          <TBLogoMark size={32} />
          <div>
            <div className="tb-brand-name">A22<span className="tb-brand-thin">INVESTMENTS</span></div>
            <div className="tb-brand-sub">{lang === "es" ? "Industria naval y portuaria" : "Naval & port industry"}</div>
          </div>
        </button>
        <nav className="tb-nav">
          {sections.map(s => (
            <button key={s}
              className={`tb-nav-item ${page === s ? "is-on" : ""}`}
              onClick={() => setPage(s)}>
              {t(C.nav[s], lang)}
            </button>
          ))}
        </nav>
        <div className="tb-top-right">
          <div className="tb-lang">
            <button className={lang === "es" ? "is-on" : ""} onClick={() => setLang("es")}>Español</button>
            <span>·</span>
            <button className={lang === "en" ? "is-on" : ""} onClick={() => setLang("en")}>English</button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Section heading (editorial)
function TBHead({ kicker, idx, title, sub, align = "left" }) {
  return (
    <div className={`tb-shead tb-shead-${align}`}>
      <div className="tb-shead-kicker">
        <span className="tb-rule" />
        <span>§ {idx} · {kicker}</span>
      </div>
      <h2 className="tb-shead-title">{title}</h2>
      {sub && <p className="tb-shead-sub">{sub}</p>}
    </div>
  );
}

// ── Page: Home
function TBHome({ lang, setPage }) {
  return (
    <React.Fragment>
      {/* HERO — blueprint title block */}
      <section className="tb-hero">
        <div className="tb-hero-copy">
          <div className="tb-hero-kicker">
            <span>A22 · {lang === "es" ? "INDUSTRIA NAVAL Y PORTUARIA" : "NAVAL & PORT INDUSTRY"}</span>
          </div>
          <h1 className="tb-hero-title">{t(C.hero.titleB, lang)}</h1>
          <p className="tb-hero-lede">{t(C.hero.sub, lang)}</p>
          <div className="tb-hero-ctas">
            <button className="tb-btn tb-btn-primary" onClick={() => setPage("contact")}>
              {t(C.hero.primaryCta, lang)} <span aria-hidden>→</span>
            </button>
            <button className="tb-btn tb-btn-link tb-btn-link-light" onClick={() => setPage("services")}>
              {t(C.hero.secondaryCta, lang)} <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="tb-hero-dwg" aria-hidden="true">
          <div className="tb-hero-dwg-views">
            <div className="tb-hero-dwg-view"><ShipProfile lang={lang} annotate={true} /></div>
            <div className="tb-hero-dwg-view"><TopPlan lang={lang} annotate={true} /></div>
          </div>
          <div className="tb-hero-dwg-block">
            <span className="tb-mono">DWG. Nº A22-NV-001</span>
            <span className="tb-mono">{lang === "es" ? "DISPOSICIÓN GENERAL" : "GENERAL ARRANGEMENT"}</span>
            <span className="tb-mono">MIAMI, FL · +30 {lang === "es" ? "AÑOS" : "YRS"}</span>
          </div>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section className="tb-ledger">
        <div className="tb-ledger-head">
          <span>{lang === "es" ? "INDICADORES" : "KEY FIGURES"}</span>
          <span className="tb-mono">A22 · NAVAL</span>
        </div>
        <div className="tb-ledger-rows">
          {C.stats.map((s, i) => (
            <div key={i} className="tb-ledger-row">
              <span className="tb-mono">{String(i+1).padStart(2,"0")}</span>
              <span className="tb-ledger-num">{s.num}</span>
              <span className="tb-ledger-label">{t(s.label, lang)}</span>
              <span className="tb-mono tb-dim">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <TBProjects lang={lang} setPage={setPage} compact={true} />

      {/* NAVAL BLUEPRINT BAND */}
      <TBBlueprint lang={lang} />

      {/* INTRO BRIEF */}
      <section className="tb-section">
        <TBHead
          idx="01"
          kicker={t(C.about.eyebrow, lang)}
          title={t(C.about.title, lang)} />
        <div className="tb-brief">
          <p className="tb-lede">{t(C.about.body1, lang)}</p>
          <p className="tb-brief-secondary">{t(C.about.body2, lang)}</p>
        </div>
        <div className="tb-readmore">
          <button onClick={() => setPage("about")}>
            {lang === "es" ? "Conocer la empresa" : "About the company"} <span aria-hidden>→</span>
          </button>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="tb-section tb-section-tint">
        <TBHead
          idx="02"
          kicker={t(C.services.eyebrow, lang)}
          title={t(C.services.title, lang)}
          sub={t(C.services.sub, lang)} />
        <div className="tb-svc-grid">
          {C.services.list.map((s, i) => (
            <article key={i} className="tb-svc">
              <div className="tb-svc-num">{s.num}</div>
              <h3>{t(s.title, lang)}</h3>
              <p>{t(s.desc, lang)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="tb-section">
        <TBHead
          idx="03"
          kicker={t(C.products.eyebrow, lang)}
          title={t(C.products.title, lang)}
          sub={t(C.products.sub, lang)} />
        <TBProductGrid lang={lang} setPage={setPage} />
      </section>

      {/* CLIENTS */}
      <TBClients lang={lang} />

      {/* CTA */}
      <TBFinal lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: About
function TBProjectsPage({ lang, setPage }) {
  return (
    <React.Fragment>
      <div className="tb-section-top" style={{ paddingTop: "clamp(32px,4vw,56px)" }} />
      <TBProjects lang={lang} setPage={setPage} compact={false} />
      <TBBlueprint lang={lang} />
      <TBFinal lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: About
function TBAbout({ lang, setPage }) {
  return (
    <React.Fragment>
      <section className="tb-section tb-section-top">
        <TBHead
          idx="01"
          kicker={t(C.about.eyebrow, lang)}
          title={t(C.about.title, lang)} />

        <div className="tb-article">
          <div className="tb-article-body">
            <p className="tb-lede">{t(C.about.body1, lang)}</p>
            <p>{t(C.about.body2, lang)}</p>
          </div>
          <aside className="tb-article-side">
            <div className="tb-side-card">
              <div className="tb-side-card-head">
                <span className="tb-mono">FICHA · 01</span>
                <span className="tb-mono">A22 LLC</span>
              </div>
              <dl>
                <dt>{lang === "es" ? "Sede" : "HQ"}</dt><dd>Florida, USA</dd>
                <dt>{lang === "es" ? "Fundada" : "Founded"}</dt><dd>2008</dd>
                <dt>{lang === "es" ? "Operación" : "Operation"}</dt><dd>{lang==="es"?"24/7 multinacional":"24/7 multinational"}</dd>
                <dt>{lang === "es" ? "Cobertura" : "Coverage"}</dt><dd>NA · LATAM · CARIBE</dd>
                <dt>{lang === "es" ? "Entidad" : "Entity"}</dt><dd>A22 Investments LLC</dd>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="tb-section tb-section-tint">
        <div className="tb-pillars tb-pillars-lg">
          {C.about.pillars.map((p, i) => (
            <div key={i} className="tb-pillar">
              <div className="tb-pillar-num">{p.num}</div>
              <h3>{t(p.title, lang)}</h3>
              <p>{t(p.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tb-section">
        <div className="tb-mv">
          <div className="tb-mv-card">
            <div className="tb-mv-head">
              <span className="tb-mono">M · 01</span>
              <h3>{t(C.missionVision.mission.label, lang)}</h3>
            </div>
            <p>{t(C.missionVision.mission.body, lang)}</p>
          </div>
          <div className="tb-mv-card">
            <div className="tb-mv-head">
              <span className="tb-mono">V · 01</span>
              <h3>{t(C.missionVision.vision.label, lang)}</h3>
            </div>
            <p>{t(C.missionVision.vision.body, lang)}</p>
          </div>
        </div>
      </section>

      <TBLogistics lang={lang} />
      <TBFinal lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Services
function TBServices({ lang, setPage }) {
  return (
    <React.Fragment>
      <section className="tb-section tb-section-top">
        <TBHead
          idx="02"
          kicker={t(C.services.eyebrow, lang)}
          title={t(C.services.title, lang)}
          sub={t(C.services.sub, lang)} />
        <div className="tb-svc-list">
          {C.services.list.map((s, i) => (
            <article key={i} className="tb-svc-row">
              <div className="tb-svc-row-num">{s.num}</div>
              <div className="tb-svc-row-body">
                <h3>{t(s.title, lang)}</h3>
                <p>{t(s.desc, lang)}</p>
              </div>
              <div className="tb-svc-row-arrow" aria-hidden>→</div>
            </article>
          ))}
        </div>
      </section>
      <TBLogistics lang={lang} />
      <TBFinal lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Products
function TBProducts({ lang, setPage }) {
  return (
    <React.Fragment>
      <section className="tb-section tb-section-top">
        <TBHead
          idx="03"
          kicker={t(C.products.eyebrow, lang)}
          title={t(C.products.title, lang)}
          sub={t(C.products.sub, lang)} />
        <TBProductDetail lang={lang} />
      </section>
      <TBBlueprint lang={lang} />
      <TBFinal lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Contact
function TBContact({ lang }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "P-01", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(s => ({ ...s, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="tb-section tb-section-top">
      <TBHead
        idx="05"
        kicker={t(C.contact.eyebrow, lang)}
        title={t(C.contact.title, lang)}
        sub={t(C.contact.sub, lang)} />

      <div className="tb-contact">
        <div className="tb-contact-side">
          <div className="tb-contact-head">
            <span className="tb-mono">DIRECTORIO · 01</span>
          </div>
          {C.contact.channels.map((c, i) => (
            <a key={i} className={`tb-channel ${typeof c.value === "object" ? "tb-channel-static" : ""}`}
               href={typeof c.value === "string" && c.value.startsWith("+") ? `https://wa.me/${c.value.replace(/[^0-9]/g,"")}` :
                     typeof c.value === "string" && c.value.includes("@") ? `mailto:${c.value}` : undefined}>
              <span className="tb-mono tb-dim">{String(i+1).padStart(2,"0")}</span>
              <span className="tb-channel-stack">
                <span className="tb-channel-label">{t(c.label, lang)}</span>
                <span className="tb-channel-value">{typeof c.value === "string" ? c.value : t(c.value, lang)}</span>
              </span>
            </a>
          ))}
          <div className="tb-team">
            <div className="tb-team-head tb-mono">{t(C.contact.team.label, lang)}</div>
            {C.contact.team.people.map((p, i) => (
              <div key={i} className="tb-person">
                <span className="tb-person-name">{p.name}</span>
                <div className="tb-person-links">
                  <a href={`tel:${p.phone.replace(/\s/g,"")}`}>{p.phone}</a>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="tb-form" onSubmit={submit}>
          <div className="tb-form-head">
            <span className="tb-mono">{lang==="es"?"FORMULARIO · REQUERIMIENTO":"FORM · REQUEST"}</span>
            <span className="tb-mono tb-dim">{sent ? "● ENVIADO" : "○ EN BORRADOR"}</span>
          </div>
          <div className="tb-form-grid">
            <TBField label={t(C.contact.form.name, lang)} value={form.name} onChange={v=>update("name",v)} />
            <TBField label={t(C.contact.form.company, lang)} value={form.company} onChange={v=>update("company",v)} />
            <TBField label={t(C.contact.form.email, lang)} type="email" value={form.email} onChange={v=>update("email",v)} />
            <TBField label={t(C.contact.form.phone, lang)} value={form.phone} onChange={v=>update("phone",v)} />
          </div>
          <label className="tb-field tb-field-full">
            <span className="tb-field-label">{t(C.contact.form.interest, lang)}</span>
            <select value={form.interest} onChange={e=>update("interest", e.target.value)}>
              {C.products.list.map(p => (
                <option key={p.code} value={p.code}>{p.code} · {t(p.title, lang)}</option>
              ))}
              <option value="SERV">{lang==="es"?"Asesoría / Servicios":"Advisory / Services"}</option>
            </select>
          </label>
          <label className="tb-field tb-field-full">
            <span className="tb-field-label">{t(C.contact.form.message, lang)}</span>
            <textarea rows="5" value={form.message} onChange={e=>update("message", e.target.value)} />
          </label>
          <button type="submit" className="tb-btn tb-btn-primary tb-btn-full">
            {sent ? "✓ " + t(C.contact.form.sent, lang) : t(C.contact.form.submit, lang)} <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function TBField({ label, value, onChange, type = "text" }) {
  return (
    <label className="tb-field">
      <span className="tb-field-label">{label}</span>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

// ── Shared blocks
function TBProductGrid({ lang, setPage }) {
  return (
    <div className="tb-prod-grid">
      {C.products.list.map((p, i) => (
        <article key={i} className="tb-prod-card" onClick={() => setPage && setPage("products")}>
          <div className="tb-prod-card-head">
            <span className="tb-mono">{p.code}</span>
            <span className="tb-mono tb-dim">{String(i+1).padStart(2,"0")} / 04</span>
          </div>
          <h3>{t(p.title, lang)}</h3>
          <p>{t(p.short, lang)}</p>
          <ul>
            {p.items[lang].slice(0,3).map((it, j) => <li key={j}>{it}</li>)}
          </ul>
          <div className="tb-prod-card-foot">
            <span>{lang === "es" ? "Ver línea" : "View line"}</span>
            <span aria-hidden>→</span>
          </div>
        </article>
      ))}
    </div>
  );
}

function TBProductDetail({ lang }) {
  return (
    <div className="tb-prod-detail">
      {C.products.list.map((p, i) => (
        <article key={i} className="tb-prod-detail-card">
          <header className="tb-prod-detail-head">
            <span className="tb-mono">{p.code}</span>
            <h3>{t(p.title, lang)}</h3>
            <p>{t(p.short, lang)}</p>
          </header>
          <ul className="tb-prod-detail-items">
            {p.items[lang].map((it, j) => (
              <li key={j}>
                <span className="tb-mono tb-dim">{String(j+1).padStart(2,"0")}</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <footer className="tb-prod-detail-foot">
            <span className="tb-mono tb-dim">{lang==="es"?"QA · CERT":"QA · CERT"}</span>
            <span>ISO 9001 · HACCP · FDA · NSF</span>
          </footer>
        </article>
      ))}
    </div>
  );
}

function TBLogistics({ lang }) {
  return (
    <section className="tb-section tb-section-tint">
      <TBHead
        idx="04"
        kicker={t(C.logistics.eyebrow, lang)}
        title={t(C.logistics.title, lang)} />
      <p className="tb-logistics-body">{t(C.logistics.body, lang)}</p>
      <ol className="tb-pipeline">
        {C.logistics.steps.map((s, i) => (
          <li key={i} className="tb-pipe-step">
            <span className="tb-pipe-num">{s.code}</span>
            <span className="tb-pipe-label">{t(s.label, lang)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TBClients({ lang }) {
  return (
    <section className="tb-section">
      <TBHead
        idx="·"
        kicker={t(C.clients.eyebrow, lang)}
        title={t(C.clients.title, lang)}
        sub={t(C.clients.sub, lang)} />
      <div className="tb-clients">
        {C.clients.sectors.map((s, i) => (
          <div key={i} className="tb-client">
            <span className="tb-mono tb-dim">{String(i+1).padStart(2,"0")}</span>
            <span className="tb-client-label">{t(s, lang)}</span>
            <span className="tb-client-line" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Projects — real interventions executed aboard
function TBProjects({ lang, setPage, compact }) {
  const P = C.projects;
  return (
    <section className="tb-section">
      <TBHead
        idx="P"
        kicker={t(P.eyebrow, lang)}
        title={t(P.title, lang)}
        sub={t(P.sub, lang)} />
      <figure className="tb-projects-feature">
        <img src="img/hero-ship.jpg" alt={lang === "es" ? "Buque intervenido en astillero" : "Vessel serviced in shipyard"} loading="lazy" />
        <figcaption>
          <span className="tb-mono">{lang === "es" ? "INTERVENCIÓN EN ASTILLERO · MIAMI" : "SHIPYARD INTERVENTION · MIAMI"}</span>
          <span className="tb-mono tb-dim">REF. A22-NV · {lang === "es" ? "CASCO · PROPULSIÓN · SISTEMAS" : "HULL · PROPULSION · SYSTEMS"}</span>
        </figcaption>
      </figure>
      <div className="tb-projects">
        {P.list.map((p, i) => (
          <article key={i} className="tb-project">
            <div className="tb-project-media">
              {p.img ? (
                <img src={p.img} alt={t(p.title, lang)} loading="lazy" />
              ) : (
                <image-slot
                  id={p.slot}
                  shape="rect"
                  fit="cover"
                  placeholder={t(p.cat, lang)}
                  style={{ width: "100%", height: "100%", display: "block" }}>
                </image-slot>
              )}
              <span className="tb-project-code tb-mono">{p.code}</span>
            </div>
            <div className="tb-project-body">
              <span className="tb-project-cat tb-mono">{t(p.cat, lang)}</span>
              <h3>{t(p.title, lang)}</h3>
              <p>{t(p.desc, lang)}</p>
            </div>
          </article>
        ))}
      </div>
      {compact && (
        <div className="tb-readmore">
          <button onClick={() => setPage("projects")}>
            {lang === "es" ? "Ver todos los proyectos" : "View all projects"} <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </section>
  );
}

// ── Naval blueprint band — classic cyan-on-navy technical print
function TBBlueprint({ lang }) {
  const scope = C.navalScope[lang];
  return (
    <section className="tb-blueprint" aria-label={lang === "es" ? "Plano general del buque" : "Vessel general arrangement"}>
      <div className="tb-blueprint-head">
        <span className="tb-mono">A22 · {lang === "es" ? "DIVISIÓN NAVAL" : "NAVAL DIVISION"} · {lang === "es" ? "DISPOSICIÓN GENERAL" : "GENERAL ARRANGEMENT"}</span>
        <span className="tb-mono tb-bp-dim">DWG. № A22-NV-001 · REV. C · MIA</span>
      </div>

      <div className="tb-blueprint-views">
        <figure className="tb-bp-view">
          <ShipProfile lang={lang} annotate={true} />
          <figcaption className="tb-mono tb-bp-dim">{lang === "es" ? "VISTA LATERAL · ELEVACIÓN" : "SIDE VIEW · ELEVATION"}</figcaption>
        </figure>
        <figure className="tb-bp-view">
          <img src="img/lines-plan-inv.png" alt={lang === "es" ? "Plano de líneas del buque" : "Vessel lines plan"} loading="lazy" />
          <figcaption className="tb-mono tb-bp-dim">{lang === "es" ? "PLANO DE LÍNEAS · SECCIONES" : "LINES PLAN · SECTIONS"}</figcaption>
        </figure>
      </div>

      <div className="tb-blueprint-stage">
        <div className="tb-blueprint-caption">
          <h3>{lang === "es" ? "Cubrimos cada sistema, de proa a popa." : "We cover every system, bow to stern."}</h3>
          <p>{lang === "es"
            ? "Procura e intervención técnica sobre todos los sistemas del buque y la infraestructura portuaria."
            : "Procurement and technical intervention across all vessel systems and port infrastructure."}</p>
        </div>
      </div>

      <div className="tb-blueprint-scope">
        {scope.map((s, i) => (
          <span key={i} className="tb-scope-tag">
            <span className="tb-mono tb-bp-dim">{String(i+1).padStart(2,"0")}</span>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

function TBFinal({ lang, setPage }) {
  return (
    <section className="tb-final">
      <div className="tb-final-inner">
        <div className="tb-final-mark">
          <TBLogoMark size={36} />
        </div>
        <h2>{lang === "es" ? "Mantenga su embarcación operativa." : "Keep your vessel operational."}</h2>
        <p>{lang === "es" ? "Cuéntenos qué necesita y le respondemos con una propuesta técnica y comercial." : "Tell us what you need and we will reply with a technical and commercial proposal."}</p>
        <div className="tb-final-ctas">
          <button className="tb-btn tb-btn-primary" onClick={() => setPage("contact")}>
            {t(C.hero.primaryCta, lang)} <span aria-hidden>→</span>
          </button>
          <a className="tb-btn tb-btn-link" href="https://wa.me/584143431600" target="_blank" rel="noopener">
            WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function TBFooter({ lang, setPage }) {
  return (
    <footer className="tb-footer">
      <div className="tb-footer-top">
        <div className="tb-footer-brand">
          <TBLogoMark size={36} />
          <div>
            <div className="tb-brand-name" style={{ fontSize: 22 }}>A22<span className="tb-brand-thin">INVESTMENTS</span></div>
            <div className="tb-footer-note">{t(C.footer.note, lang)}</div>
          </div>
        </div>
        <div className="tb-footer-cols">
          <div>
            <div className="tb-footer-label">{lang==="es"?"Secciones":"Sections"}</div>
            {["home","about","projects","services","products","contact"].map(k => (
              <button key={k} onClick={() => setPage(k)}>{t(C.nav[k], lang)}</button>
            ))}
          </div>
          <div>
            <div className="tb-footer-label">{lang==="es"?"Productos":"Products"}</div>
            {C.products.list.map(p => <button key={p.code} onClick={() => setPage("products")}>{t(p.title, lang)}</button>)}
          </div>
          <div>
            <div className="tb-footer-label">{lang==="es"?"Contacto directo":"Direct contact"}</div>
            <a href="mailto:info@a22investments.com">info@a22investments.com</a>
            <a href="tel:+584143431600">Roberto Durdevic · +58 414 343 1600</a>
            <span>{t(C.brand.location, lang)}</span>
          </div>
        </div>
      </div>
      <div className="tb-footer-bottom">
        <span>© 2026 A22 Investments LLC. {t(C.footer.rights, lang)}</span>
        <span className="tb-mono tb-dim">v1.0 · trade bureau</span>
      </div>
    </footer>
  );
}

// ── Tweaks defaults
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "teal",
  "grid": 0.06
}/*EDITMODE-END*/;

// ── App
function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("es");
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const mainRef = useRef(null);
  useEffect(() => { if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: "instant" }); }, [page]);

  let body;
  switch (page) {
    case "about":    body = <TBAbout    lang={lang} setPage={setPage} />; break;
    case "projects": body = <TBProjectsPage lang={lang} setPage={setPage} />; break;
    case "services": body = <TBServices lang={lang} setPage={setPage} />; break;
    case "products": body = <TBProducts lang={lang} setPage={setPage} />; break;
    case "contact":  body = <TBContact  lang={lang} setPage={setPage} />; break;
    default:         body = <TBHome     lang={lang} setPage={setPage} />;
  }

  return (
    <div className="tb-app" data-screen-label={`A22 / Trade Bureau / ${page}`}
         data-theme={tw.theme} data-accent={tw.accent}
         style={{ "--tb-grid-op": tw.grid }}>
      <TBTop page={page} setPage={setPage} lang={lang} setLang={setLang} />
      <main className="tb-main" ref={mainRef} key={page}>
        {body}
        <TBFooter lang={lang} setPage={setPage} />
      </main>
      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === "es" ? "Ambiente" : "Environment"} />
        <TweakRadio
          label={lang === "es" ? "Tema" : "Theme"}
          value={tw.theme}
          options={[
            { value: "light", label: lang === "es" ? "Bitácora" : "Logbook" },
            { value: "dark", label: lang === "es" ? "Dique" : "Drydock" },
          ]}
          onChange={(v) => setTweak("theme", v)} />
        <TweakSection label={lang === "es" ? "Acento" : "Accent"} />
        <TweakColor
          label={lang === "es" ? "Color" : "Color"}
          value={tw.accent === "teal" ? "#0E6E8F" : tw.accent === "rust" ? "#B8542A" : "#3A6EA5"}
          options={["#0E6E8F", "#B8542A", "#3A6EA5"]}
          onChange={(hex) => setTweak("accent", hex === "#B8542A" ? "rust" : hex === "#3A6EA5" ? "steel" : "teal")} />
        <TweakSection label={lang === "es" ? "Trazado técnico" : "Technical grid"} />
        <TweakSlider
          label={lang === "es" ? "Cuadrícula" : "Blueprint grid"}
          value={tw.grid} min={0} max={0.2} step={0.01}
          onChange={(v) => setTweak("grid", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
