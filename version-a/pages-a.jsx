// Version A — inner pages, shared blocks, and App shell.
// Loads after app.jsx (which defines tt, LogoMark, TopBar, PageHome).

const A_ = window.A22_A;
const ttx = window.tt;

// ── Shared: section heading
function SectionHead({ idx, eyebrow, title, sub }) {
  return (
    <div className="ops-shead">
      <div className="ops-shead-eyebrow">
        <span className="ops-mono">§ {idx}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="ops-shead-title">{title}</h2>
      {sub && <p className="ops-shead-sub">{sub}</p>}
    </div>
  );
}
window.SectionHead = SectionHead;

// ── Shared: client showcase
function ClientShowcase({ lang }) {
  return (
    <section className="ops-section ops-section-alt">
      <SectionHead idx="C" eyebrow={ttx(A_.clients.eyebrow, lang)} title={ttx(A_.clients.title, lang)} sub={ttx(A_.clients.sub, lang)} />
      <div className="ops-clients-grid">
        {A_.clients.sectors.map((s, i) => (
          <div key={i} className="ops-client-tile">
            <span className="ops-mono ops-dim">{String(i+1).padStart(2,"0")}</span>
            <span className="ops-client-name">{ttx(s, lang)}</span>
          </div>
        ))}
      </div>
      <div className="ops-certs">
        <span className="ops-mono ops-dim">{ttx(A_.certs.label, lang)}</span>
        <div className="ops-certs-list">
          {A_.certs.list.map((c, i) => <span key={i} className="ops-cert">{c}</span>)}
        </div>
      </div>
    </section>
  );
}
window.ClientShowcase = ClientShowcase;

// ── Shared: onboard work proof band (3 real photos)
function WorkBand({ lang }) {
  return (
    <section className="ops-section ops-section-tight">
      <SectionHead idx="W" eyebrow={ttx(A_.work.eyebrow, lang)} title={ttx(A_.work.title, lang)} />
      <div className="ops-work-grid">
        {A_.work.items.map((w, i) => (
          <figure key={i} className="ops-work-card">
            <div className="ops-work-media">
              <img src={w.img} alt={ttx(w.label, lang)} loading="lazy" />
            </div>
            <figcaption>
              <span className="ops-mono ops-dim">{String(i+1).padStart(2,"0")} · {ttx(w.cat, lang)}</span>
              <span className="ops-work-label">{ttx(w.label, lang)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
window.WorkBand = WorkBand;

// ── Shared: blueprint band (a pair of technical drawings)
function BlueprintBand({ lang }) {
  return (
    <section className="ops-blueprint">
      <div className="ops-blueprint-head">
        <span className="ops-mono">A22 · {lang === "es" ? "DISPOSICIÓN GENERAL" : "GENERAL ARRANGEMENT"}</span>
        <span className="ops-mono ops-bp-dim">DWG. Nº A22-NV-001 · REV. C · MIA</span>
      </div>
      <div className="ops-blueprint-title">
        <h2>{lang === "es" ? "Cada sistema, de proa a popa." : "Every system, bow to stern."}</h2>
        <p>{lang === "es"
          ? "Intervención técnica y procura sobre el casco, la propulsión, la eléctrica y la navegación del buque."
          : "Technical intervention and procurement across hull, propulsion, electrical and navigation."}</p>
      </div>
      <div className="ops-blueprint-views">
        <figure className="ops-bp-view">
          <window.ShipProfile lang={lang} annotate={true} />
          <figcaption className="ops-mono ops-bp-dim">{lang === "es" ? "PERFIL · ELEVACIÓN" : "PROFILE · ELEVATION"}</figcaption>
        </figure>
        <figure className="ops-bp-view">
          <window.TopPlan lang={lang} annotate={true} />
          <figcaption className="ops-mono ops-bp-dim">{lang === "es" ? "VISTA EN PLANTA · CUBIERTA" : "TOP PLAN · DECK"}</figcaption>
        </figure>
      </div>
    </section>
  );
}
window.BlueprintBand = BlueprintBand;

// ── Shared: ILS process pipeline
function ProcessBlock({ lang }) {
  return (
    <section className="ops-section ops-section-alt">
      <SectionHead idx="ILS" eyebrow={ttx(A_.process.eyebrow, lang)} title={ttx(A_.process.title, lang)} />
      <ol className="ops-pipeline">
        {A_.process.steps.map((s, i) => (
          <li key={i} className="ops-pipe-step">
            <span className="ops-mono ops-pipe-num">{s.code}</span>
            <span className="ops-pipe-label">{ttx(s.label, lang)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Shared: final CTA
function FinalCta({ lang, setPage }) {
  return (
    <section className="ops-final">
      <div className="ops-final-inner">
        <div>
          <div className="ops-final-eyebrow"><span className="ops-mono">→ {ttx(A_.cta.quote, lang).toUpperCase()}</span></div>
          <h2>{ttx(A_.finalCta.title, lang)}</h2>
          <p>{ttx(A_.finalCta.sub, lang)}</p>
        </div>
        <div className="ops-final-actions">
          <button className="ops-btn ops-btn-primary ops-btn-lg" onClick={() => setPage("contact")}>
            {ttx(A_.cta.quote, lang)} <span aria-hidden>→</span>
          </button>
          <button className="ops-btn ops-btn-ghost ops-btn-lg" onClick={() => setPage("contact")}>
            {ttx(A_.cta.talk, lang)} <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
window.FinalCta = FinalCta;

// ── Page: About
function PageAbout({ lang, setPage }) {
  return (
    <React.Fragment>
      <section className="ops-section ops-section-top">
        <SectionHead idx="01" eyebrow={ttx(A_.about.eyebrow, lang)} title={ttx(A_.about.title, lang)} />
        <div className="ops-about-grid">
          <div className="ops-about-body">
            <p>{ttx(A_.about.body1, lang)}</p>
            <p>{ttx(A_.about.body2, lang)}</p>
            <figure className="ops-about-lead">
              <img src="img/work-generator.jpg" alt={lang==="es"?"Planta eléctrica a bordo":"Onboard power plant"} loading="lazy" />
              <figcaption className="ops-mono ops-dim">{lang==="es"?"SALA DE MÁQUINAS · PLANTA ELÉCTRICA":"ENGINE ROOM · POWER PLANT"}</figcaption>
            </figure>
          </div>
          <aside className="ops-about-meta">
            <div><span className="ops-mono ops-dim">{lang==="es"?"SEDE":"HQ"}</span><span>Miami, FL · USA</span></div>
            <div><span className="ops-mono ops-dim">{lang==="es"?"EXPERIENCIA":"EXPERIENCE"}</span><span>+30 {lang==="es"?"años":"yrs"}</span></div>
            <div><span className="ops-mono ops-dim">{lang==="es"?"COBERTURA":"COVERAGE"}</span><span>{lang==="es"?"Américas":"Americas"}</span></div>
            <div><span className="ops-mono ops-dim">{lang==="es"?"ENTIDAD":"ENTITY"}</span><span>A22 Investments LLC</span></div>
          </aside>
        </div>
      </section>

      <section className="ops-section">
        <div className="ops-pillars">
          {A_.about.pillars.map((p, i) => (
            <div key={i} className="ops-pillar">
              <span className="ops-mono ops-pillar-num">{p.num}</span>
              <h3>{ttx(p.title, lang)}</h3>
              <p>{ttx(p.desc, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ops-section ops-section-alt">
        <div className="ops-mv">
          <div className="ops-mv-card">
            <div className="ops-mv-head"><span className="ops-mono">M/01</span><h3>{ttx(A_.missionVision.mission.label, lang)}</h3></div>
            <p>{ttx(A_.missionVision.mission.body, lang)}</p>
          </div>
          <div className="ops-mv-card">
            <div className="ops-mv-head"><span className="ops-mono">V/01</span><h3>{ttx(A_.missionVision.vision.label, lang)}</h3></div>
            <p>{ttx(A_.missionVision.vision.body, lang)}</p>
          </div>
        </div>
      </section>

      <FinalCta lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Services
function PageServices({ lang, setPage }) {
  return (
    <React.Fragment>
      <section className="ops-section ops-section-top">
        <SectionHead idx="02" eyebrow={ttx(A_.services.eyebrow, lang)} title={ttx(A_.services.title, lang)} sub={ttx(A_.services.sub, lang)} />
        <div className="ops-services-list">
          {A_.services.list.map((s, i) => (
            <div key={i} className="ops-service-row">
              <div className="ops-service-row-num ops-mono">{s.num}</div>
              <div className="ops-service-row-title">{ttx(s.title, lang)}</div>
              <div className="ops-service-row-desc">{ttx(s.desc, lang)}</div>
              <div className="ops-service-row-arrow" aria-hidden>→</div>
            </div>
          ))}
        </div>
      </section>
      <ProcessBlock lang={lang} />
      <FinalCta lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Capabilities (products)
function PageProducts({ lang, setPage }) {
  const [active, setActive] = useState(0);
  const prod = A_.products.list[active];
  return (
    <React.Fragment>
      <section className="ops-section ops-section-top">
        <SectionHead idx="03" eyebrow={ttx(A_.products.eyebrow, lang)} title={ttx(A_.products.title, lang)} sub={ttx(A_.products.sub, lang)} />
        <div className="ops-prod-explorer">
          <div className="ops-prod-tabs">
            {A_.products.list.map((p, i) => (
              <button key={i} className={`ops-prod-tab ${active === i ? "is-on" : ""}`} onClick={() => setActive(i)}>
                <span className="ops-mono ops-dim">{p.code}</span>
                <span className="ops-prod-tab-title">{ttx(p.title, lang)}</span>
              </button>
            ))}
          </div>
          <div className="ops-prod-panel">
            <div className="ops-prod-panel-head">
              <span className="ops-mono">{prod.code}</span>
              <h3>{ttx(prod.title, lang)}</h3>
              <p className="ops-prod-short">{ttx(prod.short, lang)}</p>
            </div>
            <ul className="ops-prod-items">
              {prod.items[lang].map((it, i) => (
                <li key={i}><span className="ops-mono ops-dim">{String(i+1).padStart(2,"0")}</span><span>{it}</span></li>
              ))}
            </ul>
            <div className="ops-prod-foot">
              <span className="ops-mono ops-dim">{ttx(A_.certs.label, lang)}</span>
              <span>ISO 9001 · IMO · ABS · DNV</span>
            </div>
          </div>
        </div>
      </section>
      <FinalCta lang={lang} setPage={setPage} />
    </React.Fragment>
  );
}

// ── Page: Contact
function PageContact({ lang }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "P-01", message: "" });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(s => ({ ...s, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const F = A_.contact.form;

  return (
    <section className="ops-section ops-section-top">
      <SectionHead idx="04" eyebrow={ttx(A_.contact.eyebrow, lang)} title={ttx(A_.contact.title, lang)} sub={ttx(A_.contact.sub, lang)} />
      <div className="ops-contact-grid">
        <div className="ops-contact-channels">
          <div className="ops-channel-head ops-mono ops-dim">{ttx(A_.contact.directory, lang)}</div>
          {A_.contact.channels.map((c, i) => {
            const val = typeof c.value === "string" ? c.value : ttx(c.value, lang);
            const href = typeof c.value === "string" && c.value.includes("@") ? `mailto:${c.value}`
              : typeof c.value === "string" && c.value.startsWith("www") ? `https://${c.value}` : undefined;
            return (
              <a key={i} className={`ops-channel ${href ? "" : "ops-channel-static"}`} href={href} target={href && href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                <span className="ops-mono ops-dim">{String(i+1).padStart(2,"0")}</span>
                <span className="ops-channel-label">{ttx(c.label, lang)}</span>
                <span className="ops-channel-value">{val}</span>
              </a>
            );
          })}
          <div className="ops-team">
            <div className="ops-team-head ops-mono">{ttx(A_.contact.teamLabel, lang)}</div>
            {A_.contact.team.map((p, i) => (
              <div key={i} className="ops-person">
                <span className="ops-person-name">{p.name}</span>
                <div className="ops-person-links">
                  <a href={`tel:${p.phone.replace(/\s/g,"")}`}>{p.phone}</a>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="ops-form" onSubmit={submit}>
          <div className="ops-form-head">
            <span className="ops-mono">F/01 · {ttx(A_.contact.eyebrow, lang).toUpperCase()}</span>
            <span className="ops-mono ops-dim">{sent ? "● SENT" : "○ DRAFT"}</span>
          </div>
          <div className="ops-form-row">
            <Field label={ttx(F.name, lang)} value={form.name} onChange={v => update("name", v)} />
            <Field label={ttx(F.company, lang)} value={form.company} onChange={v => update("company", v)} />
          </div>
          <div className="ops-form-row">
            <Field label={ttx(F.email, lang)} type="email" value={form.email} onChange={v => update("email", v)} />
            <Field label={ttx(F.phone, lang)} value={form.phone} onChange={v => update("phone", v)} />
          </div>
          <label className="ops-field">
            <span className="ops-field-label ops-mono ops-dim">{ttx(F.interest, lang)}</span>
            <select value={form.interest} onChange={e => update("interest", e.target.value)}>
              {A_.products.list.map(p => <option key={p.code} value={p.code}>{p.code} · {ttx(p.title, lang)}</option>)}
              <option value="SERV">{ttx(F.advisory, lang)}</option>
            </select>
          </label>
          <label className="ops-field">
            <span className="ops-field-label ops-mono ops-dim">{ttx(F.message, lang)}</span>
            <textarea rows="5" value={form.message} onChange={e => update("message", e.target.value)} />
          </label>
          <button type="submit" className="ops-btn ops-btn-primary ops-btn-full">
            {sent ? "✓ " + ttx(F.sent, lang) : ttx(F.submit, lang)} <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <label className="ops-field">
      <span className="ops-field-label ops-mono ops-dim">{label}</span>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

// ── Footer
function Footer({ lang, setPage }) {
  return (
    <footer className="ops-footer">
      <div className="ops-footer-grid">
        <div className="ops-footer-brand">
          <LogoMark size={30} />
          <div>
            <div className="ops-brand-name" style={{ fontSize: 18 }}>A22<span className="ops-brand-thin">INVESTMENTS</span></div>
            <div className="ops-footer-note">{ttx(A_.footer.note, lang)}</div>
          </div>
        </div>
        <div className="ops-footer-cols">
          <div>
            <div className="ops-mono ops-dim">{ttx(A_.footer.nav, lang)}</div>
            {["home","about","services","products","contact"].map(k => (
              <button key={k} onClick={() => setPage(k)}>{ttx(A_.nav[k], lang)}</button>
            ))}
          </div>
          <div>
            <div className="ops-mono ops-dim">{ttx(A_.products.eyebrow, lang)}</div>
            {A_.products.list.map(p => <button key={p.code} onClick={() => setPage("products")}>{ttx(p.title, lang)}</button>)}
          </div>
          <div>
            <div className="ops-mono ops-dim">{ttx(A_.footer.contact, lang)}</div>
            <a href="mailto:info@a22investments.com">info@a22investments.com</a>
            <a href="tel:+584143431600">+58 414 343 1600</a>
            <span>{ttx(A_.brand.location, lang)}</span>
          </div>
        </div>
      </div>
      <div className="ops-footer-bottom">
        <span>© 2026 A22 Investments LLC. {ttx(A_.footer.rights, lang)}</span>
        <span className="ops-mono ops-dim">v2.0 · ops</span>
      </div>
    </footer>
  );
}

// ── App
function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("es");
  const containerRef = useRef(null);
  useEffect(() => { if (containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: "instant" }); }, [page]);

  let body;
  switch (page) {
    case "about":    body = <PageAbout    lang={lang} setPage={setPage} />; break;
    case "services": body = <PageServices lang={lang} setPage={setPage} />; break;
    case "products": body = <PageProducts lang={lang} setPage={setPage} />; break;
    case "contact":  body = <PageContact  lang={lang} setPage={setPage} />; break;
    default:         body = <PageHome     lang={lang} setPage={setPage} />;
  }

  return (
    <div className="ops-app" data-screen-label={`A22 / Operations / ${page}`}>
      <TopBar page={page} setPage={setPage} lang={lang} setLang={setLang} />
      <main className="ops-main" ref={containerRef} key={page}>
        {body}
        <Footer lang={lang} setPage={setPage} />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
