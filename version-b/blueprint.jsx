// Ship blueprint — technical line drawing for A22 Naval & Port division.
// Pure SVG line art (schematic, not illustration). Colored via `currentColor`
// so it can be themed: teal-on-cream watermark, or cyan-on-navy classic print.
// Exported to window for use across version-b pages.

const BP = {};

// ── Profile / sheer plan: side view of a vessel with grid, waterlines,
//    station perpendiculars, superstructure, masts and dimension callouts.
function ShipProfile({ annotate = true, lang = "es", style }) {
  // Geometry constants (viewBox 1200 x 520)
  const KEEL = 380;          // baseline (keel) y
  const stations = [];
  const x0 = 150, x1 = 980, nST = 10;
  for (let i = 0; i <= nST; i++) stations.push(x0 + (x1 - x0) * (i / nST));

  const waterlines = [340, 300, 260, 220]; // y positions inside hull

  return (
    <svg viewBox="0 0 1200 520" style={style} role="img"
         aria-label={lang === "es" ? "Plano de perfil de buque" : "Vessel profile plan"}
         preserveAspectRatio="xMidYMid meet">
      {/* fine background grid */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.18">
        {Array.from({ length: 25 }).map((_, i) => (
          <line key={"v"+i} x1={48 + i*48} y1="40" x2={48 + i*48} y2="470" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={"h"+i} x1="40" y1={60 + i*44} x2="1160" y2={60 + i*44} />
        ))}
      </g>

      {/* baseline + waterlines (dashed) */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.55">
        <line x1="90" y1={KEEL} x2="1110" y2={KEEL} />
        {waterlines.map((y, i) => (
          <line key={i} x1="120" y1={y} x2="1050" y2={y} strokeDasharray="2 6" opacity="0.7" />
        ))}
      </g>
      {annotate && (
        <g fill="currentColor" opacity="0.7" fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="0.12em">
          <text x="96" y={KEEL - 6}>B.L.</text>
          <text x="1056" y={304}>D.W.L.</text>
        </g>
      )}

      {/* station perpendiculars */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.4">
        {stations.map((x, i) => (
          <line key={i} x1={x} y1="120" x2={x} y2={KEEL} />
        ))}
      </g>
      {annotate && (
        <g fill="currentColor" opacity="0.65" fontFamily="ui-monospace, monospace" fontSize="11">
          {stations.map((x, i) => (
            <text key={i} x={x} y={KEEL + 20} textAnchor="middle">{i}</text>
          ))}
        </g>
      )}

      {/* ── Hull outline (closed) ── bow to the right */}
      <path
        d="M 150 380
           L 945 380
           C 985 380, 1030 320, 1052 165
           C 980 178, 760 205, 560 208
           C 380 210, 215 196, 150 185
           C 108 270, 116 340, 150 380 Z"
        fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />

      {/* deck camber line / main deck */}
      <path d="M 150 185 C 360 196, 560 208, 760 205 C 880 203, 985 178, 1052 165"
            fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* bulwark / sheer secondary line */}
      <path d="M 165 178 C 360 189, 560 201, 760 198 C 880 196, 980 172, 1040 162"
            fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />

      {/* ── Superstructure (bridge house) ── */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M 300 188 L 300 96 L 470 96 L 470 200" />
        {/* bridge deck division */}
        <line x1="300" y1="128" x2="470" y2="128" strokeWidth="1" opacity="0.6" />
        <line x1="300" y1="160" x2="470" y2="160" strokeWidth="1" opacity="0.6" />
      </g>
      {/* bridge windows */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.55">
        {[316, 344, 372, 400, 428, 456].map((x, i) => (
          <line key={i} x1={x} y1="106" x2={x} y2="120" />
        ))}
      </g>

      {/* funnel (raked) */}
      <path d="M 350 96 L 364 56 L 410 56 L 420 96 Z"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="372" y1="64" x2="402" y2="64" stroke="currentColor" strokeWidth="3" opacity="0.7" />

      {/* masts + rigging */}
      <g stroke="currentColor" strokeWidth="1.5">
        <line x1="250" y1="192" x2="250" y2="70" />
        <line x1="250" y1="86" x2="300" y2="100" strokeWidth="0.75" opacity="0.5" />
        <line x1="250" y1="86" x2="205" y2="104" strokeWidth="0.75" opacity="0.5" />
        <line x1="800" y1="206" x2="800" y2="92" />
        <line x1="800" y1="104" x2="770" y2="120" strokeWidth="0.75" opacity="0.5" />
        <line x1="800" y1="104" x2="845" y2="120" strokeWidth="0.75" opacity="0.5" />
      </g>

      {/* deck cranes / lifting gear */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 620 205 L 620 150 L 700 178" />
        <path d="M 880 200 L 880 152 L 820 176" />
      </g>

      {/* portholes */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        {[520, 560, 600, 640, 680, 720, 760].map((x, i) => (
          <circle key={i} cx={x} cy="250" r="5" fill="none" />
        ))}
      </g>

      {/* bow anchor + hawse */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.55" fill="none">
        <circle cx="1010" cy="250" r="6" />
        <line x1="1010" y1="256" x2="1010" y2="300" />
      </g>

      {/* ── Dimension line (L.O.A.) ── */}
      {annotate && (
        <g stroke="currentColor" fill="currentColor" opacity="0.7"
           fontFamily="ui-monospace, monospace" fontSize="12" letterSpacing="0.1em">
          <line x1="150" y1="440" x2="1052" y2="440" strokeWidth="1" />
          <path d="M 150 440 l 10 -5 l 0 10 Z" stroke="none" />
          <path d="M 1052 440 l -10 -5 l 0 10 Z" stroke="none" />
          <line x1="150" y1="432" x2="150" y2="448" strokeWidth="1" />
          <line x1="1052" y1="432" x2="1052" y2="448" strokeWidth="1" />
          <rect x="540" y="430" width="120" height="20" fill="var(--bp-plate, transparent)" stroke="none" />
          <text x="600" y="444" textAnchor="middle" stroke="none">L.O.A.</text>
        </g>
      )}
    </svg>
  );
}

// ── Body plan: nested cross-section curves about a centerline (the classic
//    naval "lines plan" half-breadth view). Compact accent panel.
function BodyPlan({ annotate = true, style }) {
  const CL = 150;        // centerline x
  const BASE = 250;      // baseline y
  const sections = [
    { w: 120, h: 175, r: 60 },
    { w: 108, h: 178, r: 40 },
    { w: 92,  h: 182, r: 22 },
    { w: 72,  h: 186, r: 12 },
    { w: 48,  h: 190, r: 8  },
    { w: 26,  h: 196, r: 5  },
  ];
  const halfPath = (s, dir) => {
    const x = CL + dir * s.w;
    const topY = BASE - s.h;
    const bilgeY = BASE - s.r;
    return `M ${CL} ${topY} L ${x} ${topY + 6} L ${x} ${bilgeY} Q ${x} ${BASE} ${CL + dir*s.r*0.4} ${BASE} L ${CL} ${BASE}`;
  };
  return (
    <svg viewBox="0 0 300 290" style={style} role="img" aria-label="Body plan" preserveAspectRatio="xMidYMid meet">
      {/* grid */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.18">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={"h"+i} x1="20" y1={70 + i*30} x2="280" y2={70 + i*30} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={"v"+i} x1={30 + i*30} y1="50" x2={30 + i*30} y2="260" />
        ))}
      </g>
      {/* baseline + centerline */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        <line x1="20" y1={BASE} x2="280" y2={BASE} />
        <line x1={CL} y1="50" x2={CL} y2={BASE} strokeDasharray="3 4" />
      </g>
      {/* aft sections on left, fwd sections on right */}
      <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.85">
        {sections.map((s, i) => <path key={"L"+i} d={halfPath(s, -1)} />)}
        {sections.map((s, i) => <path key={"R"+i} d={halfPath(s, 1)} opacity="0.55" />)}
      </g>
      {annotate && (
        <g fill="currentColor" opacity="0.6" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="0.1em">
          <text x="26" y="44">AFT</text>
          <text x="252" y="44">FWD</text>
          <text x={CL} y="44" textAnchor="middle">℄</text>
        </g>
      )}
    </svg>
  );
}

BP.ShipProfile = ShipProfile;
BP.BodyPlan = BodyPlan;

// ── Top plan / deck view: bird's-eye outline with centerline, cargo holds,
//    crane positions and dimension callout. Bow to the right (matches profile).
function TopPlan({ annotate = true, lang = "es", style }) {
  const CL = 150;            // centerline y
  const x0 = 150, x1 = 1052; // stern → bow
  const stations = [];
  for (let i = 0; i <= 10; i++) stations.push(x0 + (x1 - x0) * (i / 10));
  const holds = [
    [330, 470], [490, 630], [650, 790], [810, 905],
  ];
  return (
    <svg viewBox="0 0 1200 300" style={style} role="img"
         aria-label={lang === "es" ? "Vista en planta de cubierta" : "Deck plan view"}
         preserveAspectRatio="xMidYMid meet">
      {/* grid */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.16">
        {Array.from({ length: 25 }).map((_, i) => (
          <line key={"v"+i} x1={48 + i*48} y1="30" x2={48 + i*48} y2="270" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={"h"+i} x1="40" y1={40 + i*44} x2="1160" y2={40 + i*44} />
        ))}
      </g>

      {/* hull outline (deck), symmetric about CL, bow rounded to the right */}
      <path
        d={`M 150 ${CL-92}
            L 880 ${CL-92}
            C 970 ${CL-92}, 1040 ${CL-46}, 1052 ${CL}
            C 1040 ${CL+46}, 970 ${CL+92}, 880 ${CL+92}
            L 150 ${CL+92}
            Z`}
        fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />

      {/* centerline */}
      <line x1="120" y1={CL} x2="1080" y2={CL} stroke="currentColor" strokeWidth="1" strokeDasharray="10 6" opacity="0.6" />

      {/* station perpendiculars */}
      <g stroke="currentColor" strokeWidth="0.75" opacity="0.32">
        {stations.map((x, i) => (
          <line key={i} x1={x} y1={CL-92} x2={x} y2={CL+92} />
        ))}
      </g>

      {/* cargo holds / hatches */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85">
        {holds.map(([a, b], i) => (
          <rect key={i} x={a} y={CL-58} width={b-a} height={116} rx="4" />
        ))}
      </g>

      {/* superstructure block (stern) */}
      <rect x="200" y={CL-70} width="110" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* crane king-posts (circles on centerline between holds) */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8">
        {[480, 640, 800].map((x, i) => <circle key={i} cx={x} cy={CL} r="14" />)}
      </g>
      {/* bollards along the sheer */}
      <g fill="currentColor" opacity="0.5">
        {[360, 520, 680, 840].map((x, i) => (
          <React.Fragment key={i}>
            <circle cx={x} cy={CL-86} r="3" />
            <circle cx={x} cy={CL+86} r="3" />
          </React.Fragment>
        ))}
      </g>

      {annotate && (
        <g stroke="currentColor" fill="currentColor" opacity="0.7"
           fontFamily="ui-monospace, monospace" fontSize="12" letterSpacing="0.1em">
          <line x1="150" y1="262" x2="1052" y2="262" strokeWidth="1" />
          <path d="M 150 262 l 10 -5 l 0 10 Z" stroke="none" />
          <path d="M 1052 262 l -10 -5 l 0 10 Z" stroke="none" />
          <rect x="588" y="252" width="26" height="20" fill="var(--bp-plate, transparent)" stroke="none" />
          <text x="601" y="266" textAnchor="middle" stroke="none">L</text>
          <text x="150" y="24" fontSize="11" opacity="0.7" stroke="none">AP</text>
          <text x="1040" y="24" fontSize="11" opacity="0.7" stroke="none">FP</text>
        </g>
      )}
    </svg>
  );
}

BP.TopPlan = TopPlan;
Object.assign(window, { ShipProfile, BodyPlan, TopPlan });
