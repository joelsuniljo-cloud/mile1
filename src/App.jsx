import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, Plus, Minus, Instagram, Linkedin, Twitter } from 'lucide-react';

// =============================================================
// MILE 1 — Brand Website
// Brand: mile1.in · Voice: witty, confident, self-aware
// Palette: Charcoal #0F0F10 · White #F7F7F7 · Blue #3355FF · Gray #B8B8BB · Sand #EDE8E0
// Font: Satoshi (Fontshare)
// =============================================================

const C = {
  charcoal: '#0F0F10',
  white: '#F7F7F7',
  blue: '#3355FF',
  gray: '#B8B8BB',
  sand: '#EDE8E0',
};

// -------- Data --------------------------------------------------

const NAV = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'services', label: 'Services', num: '03' },
  { id: 'portfolio', label: 'Portfolio', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

const SERVICES = [
  {
    num: '01',
    slug: 'abm',
    name: 'Account Based Marketing',
    short: 'ABM',
    tagline: 'One account, one obsession, one very happy sales team.',
    desc: "ABM done right isn't a campaign — it's a coordinated ambush. We identify the 50 accounts that will move your number, then build bespoke everything for them: creative, outreach, landing pages, plays.",
    deliverables: ['Ideal Customer Profile', 'Account tiering', 'Multi-touch play design', 'Account-specific creative', '1:1 landing pages', 'Sales + marketing handoff playbook'],
  },
  {
    num: '02',
    slug: 'gtm',
    name: 'GTM Strategy',
    short: 'GTM',
    tagline: "Shipping isn't a strategy. (We checked.)",
    desc: 'New product? New market? Pivot? We build the go-to-market that actually survives contact with the customer — positioning, pricing, channels, launch motion, the lot.',
    deliverables: ['Market sizing', 'Positioning framework', 'Pricing model', 'Channel strategy', 'Launch plan', '90-day KPI roadmap'],
  },
  {
    num: '03',
    slug: 'paid',
    name: 'Paid Ads',
    short: 'PAID',
    tagline: 'We light money on fire. Strategically.',
    desc: "Meta, Google, LinkedIn, X, YouTube — we run the channels where your customer actually is. No vanity metrics, no 'reach' theatre. Just pipeline, revenue, and a weekly report you'll actually read.",
    deliverables: ['Channel audit', 'Creative testing framework', 'Media plan', 'Daily optimisation', 'Weekly + monthly reports', 'CAC / LTV dashboards'],
  },
  {
    num: '04',
    slug: 'web',
    name: 'Website Development',
    short: 'WEB',
    tagline: "Sites that load fast, convert faster, and don't embarrass you on mobile.",
    desc: 'We design and build sites that are beautiful in the Figma file and ruthless in production. Next.js, Webflow, or Shopify — whichever wins for your stack. Core Web Vitals green on day one.',
    deliverables: ['UX strategy', 'Design system', 'Full build (Next.js / Webflow / Shopify)', 'CMS integration', 'Analytics wiring', 'Launch + iteration plan'],
  },
  {
    num: '05',
    slug: 'seo',
    name: 'SEO / GEO / AIEO',
    short: 'SEO',
    tagline: 'Rank on Google. Rank on ChatGPT. Rank wherever your customer is looking.',
    desc: 'Search is no longer one search engine. We get you found on traditional SERPs, on generative answer engines (ChatGPT, Perplexity, Gemini), and on the AI overviews that are eating organic traffic for breakfast.',
    deliverables: ['Technical SEO audit', 'Topic + entity mapping', 'Content strategy', 'AIEO content optimisation', 'Schema + LLM-readable markup', 'Monthly visibility reports'],
  },
  {
    num: '06',
    slug: 'cgi',
    name: 'CGI Studio',
    short: 'CGI',
    tagline: 'Photoshoots without the flights, catering, or weather complaints.',
    desc: 'Product and brand CGI that looks better than the real thing and costs half as much. Hyper-real product renders, motion films, AR-ready assets — built once, reused forever.',
    deliverables: ['3D product modelling', 'Photorealistic rendering', 'CGI motion films', 'Shot variants for all channels', 'AR assets', 'Brand-consistent lighting + material library'],
  },
  {
    num: '07',
    slug: 'smm',
    name: 'Social Media Management',
    short: 'SMM',
    tagline: 'Content that earns the scroll. Not the algorithm.',
    desc: "Daily posts nobody reads don't build brands. We run your social end-to-end — strategy, in-house content creation (photo, video, reels), community, and analytics that actually tell you what's moving. The good stuff, on a schedule.",
    deliverables: ['Channel + content strategy', 'Monthly content calendar', 'In-house content creation (photo, video, reels)', 'Community management', 'Creator + UGC partnerships', 'Monthly performance reports'],
  },
];

const CASES = [
  {
    slug: 'duroflex',
    client: 'Duroflex',
    sector: 'D2C MATTRESS',
    project: 'The Virat Effect — CGI Times Square Tribute',
    tags: ['CGI'],
    result: '867K likes. Press across India. A nation watching.',
    metric: '867K',
    metricLabel: 'likes',
    video: '/cases/duroflex.mp4',
    logo: '/clients/duroflex.png',
    accent: '#1a1a2e',
    accent2: '#3355FF',
    metrics: [
      { num: '867K', label: 'Likes on Instagram' },
      { num: '219K', label: 'Shares' },
      { num: '3,427', label: 'Comments' },
      { num: '4+', label: 'National news features' },
    ],
    press: ['India Today', 'The Indian Express', 'Republic News', 'The Daily Guardian'],
    brief: "When Virat Kohli announced his Test retirement, India felt it. Duroflex wanted to do something more than a brand post. Something that captured the weight of the moment — and reached millions without a single dollar of media spend.",
    thinking: "We knew a static post wouldn't carry the emotion. A real shoot in New York would cost a fortune and take weeks. So we asked a sharper question: what if we built the tribute itself? A statue of Virat in Times Square — every detail rendered, lit, composed in CGI. Plausible enough to feel real. Surreal enough to make people stop scrolling.",
    process: "Reference modelling started with Virat's iconic stance. Lighting was matched to the actual late-evening gradient of Times Square. The Duroflex brand sign was integrated into the surrounding billboards subtly enough that the brand felt earned, not pasted on. Final composite ran 21 seconds — long enough to feel cinematic, short enough for a reel.",
    outcome: "The film didn't just go viral. It got reframed. News outlets picked it up as a story in itself — calling it 'The Virat Effect.' The comment section turned into a tribute thread. Duroflex's reach for the week eclipsed campaigns ten times the budget. And the only flight booked was the one Virat actually took.",
  },
  {
    slug: 'jio-cinemas',
    client: 'Jio Cinemas',
    sector: 'OTT / ENTERTAINMENT',
    project: 'CGI Reveal Film',
    tags: ['CGI'],
    result: '1.3M likes. The most-shared post of the launch window.',
    metric: '1.3M',
    metricLabel: 'likes',
    video: '/cases/jio-cinemas.mp4',
    logo: '/clients/jio-cinemas.png',
    accent: '#0F0F10',
    accent2: '#3355FF',
    metrics: [
      { num: '1.3M', label: 'Likes on Instagram' },
      { num: '2,956', label: 'Comments' },
      { num: '#1', label: 'Post of the launch week' },
      { num: '<24h', label: 'To peak engagement' },
    ],
    press: [],
    brief: "Jio Cinemas needed a launch reel that felt like a Hollywood trailer — but built in days, not weeks. The asset had to live as a hero post on Jio Hotstar's Instagram and pull immediate attention against the busiest entertainment feed in India.",
    thinking: "OTT audiences are the most ad-fatigued audience on the internet. They will scroll past anything that looks like marketing. The film had to feel like content first, brand second — premium production value, cinematic camera language, zero corporate signage in the first three seconds.",
    process: "Storyboarded as a single continuous reveal. Built the environment in 3D so the camera could move freely. Lighting passes were tuned for vibrancy across small phone screens — that's where 96% of the audience watches. Final delivery was 19 seconds, optimised separately for the Reel grid and the 9:16 feed crop.",
    outcome: "1.3 million likes. Highest organic engagement of any post in the launch window. Comments full of audiences asking which film it was advertising — proof the reel earned attention before it asked for any.",
  },
  {
    slug: 'sony',
    client: 'Sony',
    sector: 'CONSUMER ELECTRONICS',
    project: 'CGI Product Film',
    tags: ['CGI'],
    result: '246K likes. Premium product, premium production.',
    metric: '246K',
    metricLabel: 'likes',
    video: '/cases/sony.mp4',
    logo: '/clients/sony.svg',
    accent: '#1a1a20',
    accent2: '#3355FF',
    metrics: [
      { num: '246K', label: 'Likes on Instagram' },
      { num: '298', label: 'Shares' },
      { num: '125', label: 'Comments' },
      { num: '0', label: 'Physical photoshoots' },
    ],
    press: [],
    brief: "Sony wanted product hero content that matched the premium positioning of their flagship — no compromises on texture, light, or finish. Traditional photography would have cost six figures and locked them into one set of shots. We pitched something better.",
    thinking: "Premium electronics sell on detail. Reflections, micro-textures on surfaces, the way light catches an edge — these are the things that signal quality. CGI lets us control every one of those variables. The brief became: 'Make every frame feel like a Sony press shot, but in motion.'",
    process: "Photo-accurate 3D model built from product specs. Material library matched to Sony's actual finish. Studio-lit scene with HDRIs calibrated for product realism. Camera movement designed to hero specific surfaces in sequence — same logic as a high-end product shoot, executed in 3D space.",
    outcome: "246K engagements without a physical shoot. Asset library is reusable — every angle, lighting variant, and colourway can be re-rendered without a re-shoot. Future campaigns build on this base instead of starting from zero.",
  },
];

const TEAM = [
  { name: 'Joel Sunil', role: 'Co-Founder & Creative Director', split: ['Jo', 'el'], photo: '/team/joel-sunil.png' },
  { name: 'Vinayak Choodan', role: 'Co-Founder & Strategy', split: ['Vi', 'nayak'], photo: '/team/vinayak-choodan.png' },
  { name: 'Aparna AS', role: 'Content Writer', split: ['Ap', 'arna'], photo: '/team/aparna-as.png' },
  { name: 'Milan Sebastian', role: 'SEO & Paid Ads Specialist', split: ['Mi', 'lan'], photo: '/team/milan-sebastian.png' },
  { name: 'Sidhadh Binu', role: 'CGI Specialist', split: ['Si', 'dhadh'], photo: '/team/sidhadh-binu.png' },
  { name: 'Don P Sunny', role: 'Video Editor', split: ['Do', 'n'], photo: '/team/don-p-sunny.png' },
];

const FAQS = [
  { q: 'How small is too small for Mile 1?', a: 'If you have a product and a heartbeat, we can talk.' },
  { q: 'Do you work with agencies?', a: "If they're not allergic to adults, yes." },
  { q: 'How fast can we start?', a: 'Two weeks after contract. One week if you bring samosas.' },
  { q: 'Retainer or project?', a: 'Both. Most clients start project, move to retainer once they stop panicking.' },
  { q: 'Do you guarantee results?', a: 'We guarantee the method. Results depend on whether you listen to us.' },
];

const ROTATING_LINES = [
  'Currently obsessing over: first-mile drop-off rates.',
  'Currently ignoring: vanity metrics.',
  'Currently drinking: filter coffee. Always filter coffee.',
  "Currently shipping: a thing we can't tell you about yet.",
  "Currently rethinking: the word 'synergy'.",
];

// -------- SVG Logo ---------------------------------------------
const Logo = ({ color = C.white, size = 28 }) => (
  <svg width={size * (56 / 48)} height={size} viewBox="0 0 56 48" fill={color} aria-label="Mile 1" style={{ flexShrink: 0 }}>
    {/* Short left bar */}
    <rect x="0" y="24" width="13" height="24" rx="1.5" />
    {/* Tall middle bar */}
    <rect x="18" y="10" width="13" height="38" rx="1.5" />
    {/* Corner bracket — horizontal top */}
    <rect x="32" y="0" width="24" height="11" rx="1.5" />
    {/* Corner bracket — vertical right drop */}
    <rect x="45" y="0" width="11" height="30" rx="1.5" />
  </svg>
);

const LogoWord = ({ color = C.white, size = 24 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color }}>
    <Logo color={color} size={size * 1.15} />
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontSize: size, fontWeight: 700, letterSpacing: '-0.02em' }}>Mile 1</div>
      <div style={{ fontSize: size * 0.26, letterSpacing: '0.32em', fontWeight: 500, opacity: 0.7, marginTop: 3 }}>START RIGHT</div>
    </div>
  </div>
);

// -------- Tiny primitives --------------------------------------

const DashedDivider = ({ color = C.gray, opacity = 0.4, vertical = false, className = '' }) => (
  <div
    className={className}
    style={{
      [vertical ? 'borderLeft' : 'borderTop']: `1px dashed ${color}`,
      opacity,
      width: vertical ? 0 : '100%',
      height: vertical ? '100%' : 0,
    }}
  />
);

const MilestoneDot = ({ active = false, size = 10, color = C.blue }) => (
  <span
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: active ? color : 'transparent',
      border: `1.5px solid ${color}`,
      boxShadow: active ? `0 0 0 3px ${color}22` : 'none',
      transition: 'all 300ms cubic-bezier(0.7,0,0.2,1)',
      flexShrink: 0,
    }}
  />
);

const Eyebrow = ({ num, children, color = C.gray }) => (
  <div className="flex items-center gap-3" style={{ color, fontSize: 11, letterSpacing: '0.18em', fontWeight: 700 }}>
    {num && <span style={{ color: C.blue }}>{num}</span>}
    <span style={{ width: 24, height: 1, background: color, opacity: 0.6 }} />
    <span style={{ textTransform: 'uppercase' }}>{children}</span>
  </div>
);

// -------- Scroll reveal wrapper --------------------------------

const Reveal = ({ children, delay = 0, y = 24, className = '', as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
        transition: `transform 900ms cubic-bezier(0.7,0,0.2,1) ${delay}ms, opacity 900ms cubic-bezier(0.7,0,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

// -------- Count-up ---------------------------------------------

const CountUp = ({ end, suffix = '', duration = 1600, decimals = 0 }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [end, duration]);
  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {val.toFixed(decimals)}{suffix}
    </span>
  );
};

// -------- Magnetic button --------------------------------------

const MagneticButton = ({ children, onClick, primary = false, light = false, className = '' }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  const bg = primary ? C.blue : 'transparent';
  const fg = primary ? C.white : light ? C.white : C.charcoal;
  const border = primary ? C.blue : light ? `${C.white}66` : `${C.charcoal}33`;

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      <button
        ref={ref}
        style={{
          padding: '16px 28px',
          background: bg,
          color: fg,
          border: `1px solid ${border}`,
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: '0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          transition: 'transform 320ms cubic-bezier(0.7,0,0.2,1), background 240ms, color 240ms',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => {
          if (!primary) {
            e.currentTarget.style.background = light ? C.white : C.charcoal;
            e.currentTarget.style.color = light ? C.charcoal : C.white;
          }
        }}
        onMouseLeave={(e) => {
          if (!primary) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = fg;
          }
        }}
      >
        {children}
      </button>
    </div>
  );
};

// -------- Custom cursor ----------------------------------------

const CustomCursor = ({ theme }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState('');
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    const lerp = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(lerp);
    };
    window.addEventListener('mousemove', onMove);
    requestAnimationFrame(lerp);

    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) {
        setHovering(true);
        setLabel(t.getAttribute('data-cursor') || '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  const fg = theme === 'light' ? C.charcoal : C.white;
  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', left: 0, top: 0, width: 6, height: 6,
          borderRadius: '50%', background: fg, pointerEvents: 'none',
          zIndex: 9999, mixBlendMode: 'difference',
          opacity: hovering ? 0 : 1,
          transition: 'opacity 180ms',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', left: 0, top: 0,
          width: hovering ? 72 : 24, height: hovering ? 72 : 24,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? C.blue : fg}`,
          background: hovering ? C.blue : 'transparent',
          color: C.white, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 9998,
          transition: 'width 260ms cubic-bezier(0.7,0,0.2,1), height 260ms cubic-bezier(0.7,0,0.2,1), background 200ms, border-color 200ms',
        }}
      >
        {hovering && label}
      </div>
    </>
  );
};

// -------- Preloader --------------------------------------------

const Preloader = ({ onDone }) => {
  const [pct, setPct] = useState(0);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.round(eased * 100));
      if (p < 1) requestAnimationFrame(tick);
      else {
        setTimeout(() => setExiting(true), 280);
        setTimeout(onDone, 1080);
      }
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: C.charcoal, zIndex: 10000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 800ms cubic-bezier(0.7,0,0.2,1)',
      }}
    >
      <div style={{ marginBottom: 44, opacity: exiting ? 0 : 1, transition: 'opacity 400ms' }}>
        <Logo color={C.white} size={40} />
      </div>

      <div style={{ position: 'relative', width: 'min(480px, 70vw)', height: 2 }}>
        <div style={{ position: 'absolute', inset: 0, borderTop: `1px dashed ${C.gray}`, opacity: 0.35 }} />
        <div
          style={{
            position: 'absolute', top: '50%', left: 0,
            width: `${pct}%`, height: 2, background: C.blue,
            transform: 'translateY(-50%)', transition: 'width 80ms linear',
          }}
        />
        <div
          style={{
            position: 'absolute', top: '50%', left: `${pct}%`,
            width: 14, height: 14, borderRadius: '50%', background: C.blue,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 0 4px ${C.blue}33`,
            transition: 'left 80ms linear',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute', bottom: 40, left: 0, right: 0,
          display: 'flex', justifyContent: 'space-between',
          padding: '0 40px', color: C.gray, fontSize: 11,
          letterSpacing: '0.2em', fontWeight: 700,
        }}
      >
        <span>LOADING</span>
        <span style={{ color: C.white, fontVariantNumeric: 'tabular-nums' }}>{String(pct).padStart(3, '0')}%</span>
      </div>

      <div
        style={{
          position: 'absolute', bottom: 80, right: 40,
          color: C.blue, fontSize: 11, letterSpacing: '0.2em', fontWeight: 700,
          opacity: pct > 85 ? 1 : 0, transition: 'opacity 400ms',
        }}
      >
        MILE 01 →
      </div>
    </div>
  );
};

// -------- Navigation + Menu overlay ----------------------------

const Navigation = ({ page, setPage, theme }) => {
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState('');
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`);
    };
    tick();
    const i = setInterval(tick, 1000 * 20);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setLineIdx((x) => (x + 1) % ROTATING_LINES.length), 4200);
    return () => clearInterval(i);
  }, []);

  const navColor = theme === 'light' ? C.charcoal : C.white;

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(20px, 4vw, 56px)',
          background: open ? 'transparent' : theme === 'light' ? `${C.sand}d9` : `${C.charcoal}d9`,
          backdropFilter: open ? 'none' : 'blur(14px)',
          WebkitBackdropFilter: open ? 'none' : 'blur(14px)',
          borderBottom: open ? 'none' : `1px solid ${navColor}15`,
          transition: 'background 300ms, border-color 300ms',
        }}
      >
        <div
          onClick={() => setPage('home')}
          style={{ cursor: 'pointer' }}
          data-cursor="HOME"
        >
          <LogoWord color={open ? C.white : navColor} size={22} />
        </div>

        <div className="flex items-center" style={{ gap: 14 }}>
          <div style={{ color: open ? C.white : navColor, fontSize: 11, letterSpacing: '0.2em', fontWeight: 700, opacity: 0.7 }} className="hidden md:block">
            BENGALURU · {clock}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor={open ? 'CLOSE' : 'MENU'}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 18px', borderRadius: 999,
              border: `1px solid ${open ? C.white : navColor}33`,
              background: 'transparent',
              color: open ? C.white : navColor,
              cursor: 'pointer', fontFamily: 'inherit',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
            }}
          >
            <span>{open ? 'CLOSE' : 'MENU'}</span>
            <MilestoneDot active={!open} size={8} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 400,
          background: C.charcoal, color: C.white,
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 700ms cubic-bezier(0.7,0,0.2,1)',
          overflowY: 'auto', overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Motif: floating road in background */}
        <div style={{ position: 'absolute', top: '30%', left: -40, right: -40, height: 1, borderTop: `1px dashed ${C.gray}`, opacity: 0.2, transform: 'rotate(-4deg)' }} />
        <div style={{ position: 'absolute', top: '62%', left: -40, right: -40, height: 1, borderTop: `1px dashed ${C.gray}`, opacity: 0.15, transform: 'rotate(2deg)' }} />

        <div style={{ padding: '120px clamp(20px, 4vw, 56px) 64px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 0.6fr)', gap: 40, minHeight: '100%' }}>
          <div style={{ alignSelf: 'center' }}>
            {NAV.map((n, i) => (
              <div
                key={n.id}
                onClick={() => {
                  setPage(n.id);
                  setOpen(false);
                  window.scrollTo({ top: 0 });
                }}
                data-cursor="GO"
                style={{
                  cursor: 'pointer', display: 'flex', alignItems: 'baseline',
                  gap: 24, padding: '10px 0',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateX(0)' : 'translateX(-40px)',
                  transition: `opacity 600ms cubic-bezier(0.7,0,0.2,1) ${260 + i * 60}ms, transform 600ms cubic-bezier(0.7,0,0.2,1) ${260 + i * 60}ms`,
                }}
                onMouseEnter={(e) => {
                  const line = e.currentTarget.querySelector('.menu-underline');
                  if (line) line.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  const line = e.currentTarget.querySelector('.menu-underline');
                  if (line) line.style.width = '0%';
                }}
              >
                <span style={{ fontSize: 13, color: C.blue, fontWeight: 700, letterSpacing: '0.12em' }}>{n.num}</span>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ fontSize: 'clamp(44px, 8vw, 104px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                    {n.label}
                  </span>
                  <div
                    className="menu-underline"
                    style={{
                      position: 'absolute', left: 0, bottom: 6,
                      height: 3, width: page === n.id ? '100%' : '0%',
                      background: C.blue,
                      transition: 'width 420ms cubic-bezier(0.7,0,0.2,1)',
                    }}
                  />
                </div>
                {page === n.id && (
                  <span style={{ color: C.blue, fontSize: 11, letterSpacing: '0.2em', fontWeight: 700 }}>NOW</span>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              alignSelf: 'end', paddingBottom: 24,
              display: 'flex', flexDirection: 'column', gap: 32,
              opacity: open ? 1 : 0, transition: 'opacity 700ms cubic-bezier(0.7,0,0.2,1) 600ms',
            }}
            className="hidden md:flex"
          >
            <DashedDivider color={C.gray} opacity={0.2} />
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.gray, marginBottom: 8, fontWeight: 700 }}>SAY HI</div>
              <a href="mailto:hello@mile1.co.in" style={{ color: C.white, fontSize: 18, fontWeight: 500 }}>hello@mile1.co.in</a>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.gray, marginBottom: 8, fontWeight: 700 }}>FOLLOW</div>
              <div className="flex gap-4" style={{ color: C.white }}>
                <a href="https://www.instagram.com/mile1creations/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85, display: 'inline-flex' }} data-cursor="OPEN"><Instagram size={18} /></a>
                <a href="https://www.linkedin.com/company/mile1creations" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85, display: 'inline-flex' }} data-cursor="OPEN"><Linkedin size={18} /></a>
                <a href="https://x.com/mile1creations" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.85, display: 'inline-flex' }} data-cursor="OPEN"><Twitter size={18} /></a>
              </div>
            </div>
            <div style={{ minHeight: 56 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.gray, marginBottom: 8, fontWeight: 700 }}>STATUS</div>
              <div key={lineIdx} style={{ color: C.white, fontSize: 14, opacity: 0.95, animation: 'm1FadeIn 600ms cubic-bezier(0.7,0,0.2,1)' }}>
                {ROTATING_LINES[lineIdx]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// -------- Progress Rail ----------------------------------------

const ProgressRail = ({ milestones, theme }) => {
  const [active, setActive] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, h)));
      setScrollPct(p);
      const idx = Math.min(milestones.length - 1, Math.floor(p * milestones.length));
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [milestones.length]);

  const color = theme === 'light' ? C.charcoal : C.white;
  return (
    <div
      style={{
        position: 'fixed', left: 20, top: 0, bottom: 0, zIndex: 200,
        pointerEvents: 'none',
        display: 'flex', alignItems: 'center',
      }}
      className="hidden xl:flex"
    >
      <div style={{ position: 'relative', height: '44vh', width: 18 }}>
        <div style={{ position: 'absolute', left: 6, top: 0, bottom: 0, width: 1, borderLeft: `1px dashed ${color}`, opacity: 0.2 }} />
        <div style={{ position: 'absolute', left: 6, top: 0, width: 1, background: C.blue, height: `${scrollPct * 100}%`, transition: 'height 120ms linear' }} />
        {milestones.map((m, i) => {
          const top = `${(i / Math.max(1, milestones.length - 1)) * 100}%`;
          const isPassed = i <= active;
          const isActive = i === active;
          return (
            <div key={i} style={{ position: 'absolute', left: isActive ? -1 : 1, top, transform: 'translateY(-50%)' }}>
              <MilestoneDot active={isPassed} size={isActive ? 12 : 8} color={isPassed ? C.blue : color} />
            </div>
          );
        })}
        {milestones[active] && (
          <div
            style={{
              position: 'absolute', left: 26,
              top: `${(active / Math.max(1, milestones.length - 1)) * 100}%`,
              transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'left center',
              fontSize: 9, color: C.blue, letterSpacing: '0.28em', fontWeight: 700, whiteSpace: 'nowrap',
              opacity: 0.8,
            }}
          >
            {String(active + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}
          </div>
        )}
      </div>
    </div>
  );
};

// -------- Marquee ----------------------------------------------

const Marquee = ({ items, bg = C.charcoal, fg = C.white, speed = 32, type = 'text' }) => (
  <div style={{ background: bg, color: fg, borderTop: `1px solid ${fg}15`, borderBottom: `1px solid ${fg}15`, overflow: 'hidden', padding: type === 'logo' ? '32px 0' : '22px 0' }}>
    <div
      style={{
        display: 'flex', gap: type === 'logo' ? 80 : 36, whiteSpace: 'nowrap', alignItems: 'center',
        animation: `m1Marquee ${speed}s linear infinite`,
        width: 'max-content',
      }}
    >
      {[...items, ...items, ...items].map((x, i) => (
        type === 'logo' ? (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 80, flexShrink: 0 }}>
            <img
              src={x.src}
              alt={x.alt}
              style={{
                height: x.height || 38,
                width: 'auto',
                display: 'block',
                filter: 'brightness(0) invert(1)',
                opacity: 0.85,
                flexShrink: 0,
              }}
            />
          </span>
        ) : (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36, fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>
            {x}
            <MilestoneDot active size={10} />
          </span>
        )
      ))}
    </div>
  </div>
);

// -------- Footer -----------------------------------------------

const Footer = ({ setPage }) => (
  <footer style={{ background: C.charcoal, color: C.white, padding: '0 clamp(20px, 4vw, 56px) 40px' }}>
    <div
      onClick={() => setPage('contact')}
      data-cursor="GO"
      style={{
        padding: '96px 0 80px', cursor: 'pointer', position: 'relative',
        borderBottom: `1px dashed ${C.gray}44`,
      }}
      onMouseEnter={(e) => {
        const arrow = e.currentTarget.querySelector('.footer-arrow');
        const line = e.currentTarget.querySelector('.footer-line');
        if (arrow) arrow.style.transform = 'translateX(24px)';
        if (line) line.style.width = '80px';
      }}
      onMouseLeave={(e) => {
        const arrow = e.currentTarget.querySelector('.footer-arrow');
        const line = e.currentTarget.querySelector('.footer-line');
        if (arrow) arrow.style.transform = 'translateX(0)';
        if (line) line.style.width = '0px';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 'clamp(48px, 10vw, 160px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.95 }}>
          Start Right
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="footer-line" style={{ width: 0, height: 2, background: C.blue, transition: 'width 500ms cubic-bezier(0.7,0,0.2,1)' }} />
          <div className="footer-arrow" style={{ transition: 'transform 500ms cubic-bezier(0.7,0,0.2,1)' }}>
            <ArrowRight size={56} color={C.blue} strokeWidth={1.6} />
          </div>
        </div>
      </div>
      <div style={{ color: C.gray, fontSize: 14, marginTop: 20, maxWidth: 520 }}>
        Your first mile starts with a conversation. Usually over filter coffee.
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, padding: '56px 0 40px' }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.blue, fontWeight: 700, marginBottom: 14 }}>SAY HELLO</div>
        <a href="mailto:hello@mile1.co.in" style={{ color: C.white, fontSize: 17 }}>hello@mile1.co.in</a>
        <div style={{ color: C.gray, fontSize: 13, marginTop: 8 }}>Bengaluru, IN</div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.blue, fontWeight: 700, marginBottom: 14 }}>FOLLOW</div>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/mile1creations/" target="_blank" rel="noopener noreferrer" style={{ padding: 10, border: `1px solid ${C.gray}33`, borderRadius: 999, cursor: 'pointer', display: 'inline-flex' }} data-cursor="OPEN">
            <Instagram size={16} color={C.white} />
          </a>
          <a href="https://www.linkedin.com/company/mile1creations" target="_blank" rel="noopener noreferrer" style={{ padding: 10, border: `1px solid ${C.gray}33`, borderRadius: 999, cursor: 'pointer', display: 'inline-flex' }} data-cursor="OPEN">
            <Linkedin size={16} color={C.white} />
          </a>
          <a href="https://x.com/mile1creations" target="_blank" rel="noopener noreferrer" style={{ padding: 10, border: `1px solid ${C.gray}33`, borderRadius: 999, cursor: 'pointer', display: 'inline-flex' }} data-cursor="OPEN">
            <Twitter size={16} color={C.white} />
          </a>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.blue, fontWeight: 700, marginBottom: 14 }}>SITEMAP</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {NAV.map((n) => (
            <a key={n.id} onClick={() => { setPage(n.id); window.scrollTo({ top: 0 }); }} style={{ color: C.white, fontSize: 14, cursor: 'pointer', opacity: 0.85 }} data-cursor="GO">
              {n.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', color: C.blue, fontWeight: 700, marginBottom: 14 }}>PROMISE</div>
        <div style={{ color: C.gray, fontSize: 13, lineHeight: 1.6 }}>
          We start right, so you go further, faster. Strategy. Creativity. Growth.
        </div>
      </div>
    </div>

    <div style={{ borderTop: `1px dashed ${C.gray}33`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: C.gray, fontSize: 11, letterSpacing: '0.15em', fontWeight: 700, flexWrap: 'wrap', gap: 12 }}>
      <div>© 2026 MILE 1 · MILE1.CO.IN</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <MilestoneDot active size={8} />
        <span>THE FIRST MILE MATTERS MOST.</span>
      </div>
    </div>
  </footer>
);

// ====================================================================
// PAGE: HOME
// ====================================================================

const HomePage = ({ setPage }) => {
  const clientLogos = [
    { src: '/clients/sony.svg',          alt: 'Sony',          height: 52 },
    { src: '/clients/duroflex.svg',      alt: 'Duroflex',      height: 70 },
    { src: '/clients/jio-cinemas.png',   alt: 'JioHotstar',    height: 64 },
    { src: '/clients/amazon.webp',       alt: 'Amazon',        height: 60 },
    { src: '/clients/titan.svg',         alt: 'Titan',         height: 70 },
    { src: '/clients/paris-corner.svg',  alt: 'Paris Corner',  height: 56 },
  ];

  return (
    <main style={{ background: C.charcoal, color: C.white }}>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(20px, 4vw, 56px) 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background big M1 */}
        <div
          style={{
            position: 'absolute', right: -60, bottom: -40,
            fontSize: 'clamp(340px, 46vw, 680px)',
            fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 0.8,
            color: C.white, opacity: 0.025,
            pointerEvents: 'none', userSelect: 'none',
          }}
        >
          M1
        </div>

        <Reveal delay={100}>
          <Eyebrow num="01 / MILE ONE">THE START LINE</Eyebrow>
        </Reveal>

        <Reveal delay={200}>
          <h1 style={{ fontSize: 'clamp(56px, 10vw, 168px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.95, margin: '32px 0 28px', maxWidth: 1200 }}>
            Most brands <br />run the <span style={{ color: C.blue, fontStyle: 'italic' }}>wrong</span> race.
          </h1>
        </Reveal>

        <Reveal delay={360}>
          <p style={{ color: C.gray, fontSize: 'clamp(18px, 2vw, 22px)', maxWidth: 560, lineHeight: 1.5 }}>
            We help you find the right start line — and then sprint. Strategy, creativity, and growth for brands that refuse to guess.
          </p>
        </Reveal>

        {/* animated road */}
        <Reveal delay={520}>
          <div style={{ margin: '48px 0 40px', display: 'flex', alignItems: 'center', gap: 16, maxWidth: 720 }}>
            <MilestoneDot active size={14} />
            <div style={{ flex: 1, position: 'relative', height: 1 }}>
              <div style={{ position: 'absolute', inset: 0, borderTop: `1px dashed ${C.gray}`, opacity: 0.5 }} />
              <div style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(-50%,-50%)', width: 8, height: 8, borderRadius: '50%', background: C.blue, animation: 'm1Pulse 2s cubic-bezier(0.7,0,0.2,1) infinite' }} />
            </div>
            <span style={{ fontSize: 11, color: C.blue, fontWeight: 700, letterSpacing: '0.2em' }}>MILE 01</span>
          </div>
        </Reveal>

        <Reveal delay={640}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <MagneticButton primary onClick={() => setPage('contact')}>
              Start Right <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton light onClick={() => setPage('portfolio')}>
              See our work
            </MagneticButton>
          </div>
        </Reveal>

        {/* scroll indicator */}
        <div style={{ position: 'absolute', right: 'clamp(20px, 4vw, 56px)', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.3em', color: C.gray, fontWeight: 700 }}>SCROLL</div>
          <div style={{ position: 'relative', width: 1, height: 50, borderLeft: `1px dashed ${C.gray}`, opacity: 0.5 }}>
            <div style={{ position: 'absolute', left: -3, top: 0, width: 7, height: 7, borderRadius: '50%', background: C.blue, animation: 'm1ScrollDot 2s cubic-bezier(0.7,0,0.2,1) infinite' }} />
          </div>
        </div>
      </section>

      {/* MARQUEE — CLIENT LOGOS */}
      <Marquee items={clientLogos} type="logo" speed={40} />

      {/* SECTION 02 — understanding */}
      <section style={{ padding: '160px clamp(20px, 4vw, 56px)', background: C.sand, color: C.charcoal, position: 'relative' }}>
        <Reveal>
          <Eyebrow num="02" color={`${C.charcoal}88`}>THE THESIS</Eyebrow>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 60, marginTop: 40 }}>
          <Reveal delay={120}>
            <h2 style={{ fontSize: 'clamp(42px, 5vw, 76px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02 }}>
              We understand what your customer <em style={{ color: C.blue, fontStyle: 'italic' }}>actually</em> wants.
            </h2>
          </Reveal>
          <Reveal delay={280}>
            <div style={{ maxWidth: 500, paddingTop: 12 }}>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: `${C.charcoal}cc`, marginBottom: 16 }}>
                Not what your deck says they want. Not what you hope they want. What they&apos;ll actually pay for, on a Tuesday, after their coffee, with a cursor already hovering somewhere else.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: `${C.charcoal}cc`, marginBottom: 28 }}>
                That&apos;s the first mile. Most brands skip it. They pay for it at mile ten.
              </p>
              <div onClick={() => setPage('about')} data-cursor="READ" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', color: C.charcoal, fontWeight: 700, borderBottom: `2px dashed ${C.charcoal}`, paddingBottom: 4 }}>
                Read our philosophy <ArrowUpRight size={16} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03 — services strip */}
      <section style={{ padding: '160px 0 140px', background: C.charcoal, position: 'relative' }}>
        <div style={{ padding: '0 clamp(20px, 4vw, 56px)', marginBottom: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <Reveal>
              <Eyebrow num="03">THE TOOLKIT</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginTop: 20, maxWidth: 780 }}>
                Seven services. <br /><span style={{ color: C.gray }}>One finish line.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div onClick={() => setPage('services')} data-cursor="EXPLORE" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', color: C.blue, fontWeight: 700, fontSize: 14, letterSpacing: '0.1em' }}>
              EXPLORE ALL <ArrowUpRight size={18} />
            </div>
          </Reveal>
        </div>

        <div
          data-cursor="DRAG"
          style={{
            overflowX: 'auto', overflowY: 'hidden',
            scrollbarWidth: 'none',
            padding: '0 clamp(20px, 4vw, 56px)',
          }}
          className="m1-hscroll"
        >
          <div style={{ display: 'flex', gap: 20, paddingBottom: 30, width: 'max-content' }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                onClick={() => setPage('services')}
                data-cursor="OPEN"
                style={{
                  minWidth: 360, height: 460,
                  background: i % 2 === 0 ? `${C.white}08` : C.blue,
                  border: `1px solid ${C.white}15`,
                  borderRadius: 4,
                  padding: 32, cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  transition: 'transform 400ms cubic-bezier(0.7,0,0.2,1), background 300ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div>
                  <div style={{ fontSize: 11, color: i % 2 === 0 ? C.blue : C.white, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 24 }}>SERVICE · {s.num}</div>
                  <h3 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16, color: C.white }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 15, color: i % 2 === 0 ? C.gray : `${C.white}dd`, lineHeight: 1.5 }}>
                    {s.tagline}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ flex: 1, height: 1, borderTop: `1px dashed ${i % 2 === 0 ? C.gray : C.white}`, opacity: 0.4 }} />
                  <MilestoneDot active size={10} color={i % 2 === 0 ? C.blue : C.white} />
                  <ArrowUpRight size={18} color={C.white} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — featured work */}
      <section style={{ padding: '140px clamp(20px, 4vw, 56px)', background: C.white, color: C.charcoal }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 24, marginBottom: 60 }}>
          <div>
            <Reveal><Eyebrow num="04" color={`${C.charcoal}88`}>RECENT MILES</Eyebrow></Reveal>
            <Reveal delay={120}><h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginTop: 20 }}>Work we&apos;re <em style={{ color: C.blue, fontStyle: 'italic' }}>proud</em> of.</h2></Reveal>
          </div>
          <Reveal delay={240}>
            <div onClick={() => setPage('portfolio')} data-cursor="OPEN" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: C.charcoal, fontWeight: 700, fontSize: 14, letterSpacing: '0.1em' }}>
              ALL CASES <ArrowUpRight size={16} />
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {CASES.slice(0, 3).map((c, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                onClick={() => setPage('case', c.slug)}
                data-cursor="OPEN"
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('.case-img');
                  const u = e.currentTarget.querySelector('.case-u');
                  if (img) img.style.transform = 'scale(1.03)';
                  if (u) u.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('.case-img');
                  const u = e.currentTarget.querySelector('.case-u');
                  if (img) img.style.transform = 'scale(1)';
                  if (u) u.style.width = '0%';
                }}
              >
                <div style={{ position: 'relative', height: 340, overflow: 'hidden', background: C.sand, marginBottom: 16 }}>
                  <div
                    className="case-img"
                    style={{
                      position: 'absolute', inset: 0, transition: 'transform 700ms cubic-bezier(0.7,0,0.2,1)',
                      background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accent2} 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <img
                      src={c.logo}
                      alt={c.client}
                      style={{
                        maxWidth: '60%', maxHeight: 100,
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.95,
                      }}
                    />
                  </div>
                  <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
                    {c.tags.map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', background: `${C.charcoal}cc`, color: C.white, padding: '4px 8px', borderRadius: 2 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, right: 16, color: C.white, textAlign: 'right' }}>
                    <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>{c.metric}</div>
                    <div style={{ fontSize: 10, letterSpacing: '0.15em', opacity: 0.85, fontWeight: 700 }}>{c.metricLabel.toUpperCase()}</div>
                  </div>
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', color: `${C.charcoal}88`, fontWeight: 700, marginBottom: 8 }}>CASE 0{i + 1}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{c.client}</h3>
                <div style={{ position: 'relative', paddingBottom: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 15, color: `${C.charcoal}aa` }}>{c.result}</span>
                  <div className="case-u" style={{ position: 'absolute', left: 0, bottom: 0, height: 2, width: '0%', background: C.blue, transition: 'width 500ms cubic-bezier(0.7,0,0.2,1)' }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ padding: '140px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white, position: 'relative', overflow: 'hidden' }}>
        <Reveal>
          <Eyebrow num="05" color={`${C.gray}cc`}>OUR PARTNERS</Eyebrow>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 80, alignItems: 'center', marginTop: 40 }}>
          <Reveal delay={120}>
            <div>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 76px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02, marginBottom: 28 }}>
                We don&apos;t do this <em style={{ color: C.blue, fontStyle: 'italic' }}>alone.</em>
              </h2>
              <p style={{ fontSize: 'clamp(17px, 1.6vw, 20px)', color: `${C.gray}`, lineHeight: 1.6, maxWidth: 520, marginBottom: 18 }}>
                For our CGI work, we partner with <strong style={{ color: C.white }}>WeSualize Studios</strong> — one of India&apos;s sharpest 3D and CGI shops. Together, we&apos;ve made films that earned millions of organic views for Sony, Duroflex, and Jio Cinemas.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, letterSpacing: '0.2em', fontWeight: 700, color: C.blue, marginTop: 12 }}>
                <MilestoneDot active size={8} /> @WESUALIZESTUDIOS
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', background: '#000', borderRadius: 16, border: `1px solid ${C.white}11`, boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}>
              <img
                src="/clients/wesualize.png"
                alt="WeSualize Studios"
                style={{ maxWidth: '80%', maxHeight: 200, height: 'auto', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 10, letterSpacing: '0.25em', fontWeight: 700, color: `${C.gray}99` }}>
                CGI · 3D · MOTION
              </div>
              <div style={{ position: 'absolute', bottom: 16, right: 16, fontSize: 10, letterSpacing: '0.2em', fontWeight: 700, color: C.blue }}>
                PARTNER STUDIO
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '140px clamp(20px, 4vw, 56px)', background: C.sand, color: C.charcoal }}>
        <Reveal><div style={{ fontSize: 16, color: `${C.charcoal}77`, fontStyle: 'italic', marginBottom: 60 }}>&quot;Numbers we brag about (the ones we can share).&quot;</div></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, borderTop: `1px dashed ${C.charcoal}33`, paddingTop: 60 }}>
          {[
            { num: 340, suffix: '%', label: 'avg. paid ROAS lift' },
            { num: 27, suffix: '', label: 'brands we&apos;ve started right' },
            { num: 100, suffix: '%', label: 'of clients beat Q1 target' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div>
                <div style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: C.blue }}>
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div style={{ borderTop: `1px dashed ${C.charcoal}44`, marginTop: 20, paddingTop: 14, fontSize: 13, color: `${C.charcoal}cc`, fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: s.label }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '140px clamp(20px, 4vw, 56px)', background: C.charcoal }}>
        <Reveal>
          <Eyebrow num="06">IN THEIR WORDS</Eyebrow>
        </Reveal>
        <Reveal delay={160}>
          <blockquote style={{ fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '40px 0', maxWidth: 1200, color: C.white }}>
            &ldquo;Mile 1 found the bottleneck our previous <em style={{ color: C.blue, fontStyle: 'italic' }}>three</em> agencies missed. Then they unblocked it.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={320}>
          <div style={{ borderTop: `1px dashed ${C.gray}44`, paddingTop: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
            <MilestoneDot active size={10} />
            <div style={{ fontSize: 13, color: C.gray, fontStyle: 'italic' }}>VP Growth, Series-B SaaS · anonymised for NDA reasons we find very amusing</div>
          </div>
        </Reveal>
      </section>

      {/* CTA BIG */}
      <section style={{ padding: '160px clamp(20px, 4vw, 56px)', background: C.blue, color: C.white, position: 'relative', overflow: 'hidden' }}>
        <Reveal>
          <div style={{ fontSize: 11, color: C.white, opacity: 0.85, letterSpacing: '0.2em', fontWeight: 700, marginBottom: 24 }}>
            07 · THE START GUN
          </div>
        </Reveal>
        <Reveal delay={180}>
          <h2 style={{ fontSize: 'clamp(52px, 7vw, 120px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.98, maxWidth: 1200 }}>
            Your first mile starts with a conversation.
          </h2>
        </Reveal>
        <Reveal delay={340}>
          <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div onClick={() => setPage('contact')} data-cursor="START" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 12, background: C.white, color: C.blue, padding: '18px 30px', borderRadius: 999, fontWeight: 700, fontSize: 15 }}>
              Start Right <ArrowRight size={18} />
            </div>
            <div style={{ flex: 1, minWidth: 120, height: 1, borderTop: `1px dashed ${C.white}`, opacity: 0.5 }} />
            <div style={{ fontSize: 11, color: C.white, letterSpacing: '0.2em', fontWeight: 700, opacity: 0.85 }}>START LINE →</div>
          </div>
        </Reveal>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// PAGE: ABOUT
// ====================================================================

const AboutPage = ({ setPage }) => {
  const [hoverTeam, setHoverTeam] = useState(null);

  return (
    <main style={{ background: C.sand, color: C.charcoal }}>
      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(20px, 4vw, 56px) 80px', position: 'relative' }}>
        <Reveal><Eyebrow num="02" color={`${C.charcoal}99`}>THE ORIGIN</Eyebrow></Reveal>
        <Reveal delay={160}>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 128px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.96, margin: '28px 0', maxWidth: 1280 }}>
            We started Mile 1 because most brands start <em style={{ color: C.blue, fontStyle: 'italic' }}>everything else</em>.
          </h1>
        </Reveal>
        <Reveal delay={320}>
          <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: `${C.charcoal}aa`, maxWidth: 680, lineHeight: 1.5 }}>
            They skip the first mile. They pay for it at mile ten. We&apos;re the consultancy they wish they&apos;d called in Q1.
          </p>
        </Reveal>
        {/* huge M1 outline */}
        <div style={{ position: 'absolute', right: -60, top: 140, fontSize: 'clamp(300px, 50vw, 720px)', fontWeight: 700, color: C.charcoal, opacity: 0.03, lineHeight: 0.8, pointerEvents: 'none' }}>02</div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)', background: C.white }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 80 }}>
          <Reveal>
            <div>
              <Eyebrow color={`${C.charcoal}88`}>THE PHILOSOPHY</Eyebrow>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02, marginTop: 24 }}>
                The first mile decides the <em style={{ color: C.blue, fontStyle: 'italic' }}>marathon</em>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: `${C.charcoal}dd` }}>
                Most failing brands don&apos;t fail at the finish. They fail at the start line — wrong positioning, wrong customer, wrong channel, wrong price. By mile ten they&apos;re still running. It&apos;s just the wrong race.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: `${C.charcoal}dd` }}>
                We show up at mile zero with data, taste, and uncomfortable questions. We leave when the numbers are boring-good and you&apos;ve stopped waking up at 4am.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: `${C.charcoal}dd` }}>
                That&apos;s the whole thesis. Everything else is execution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white }}>
        <Reveal><Eyebrow num="03">WHAT WE DO</Eyebrow></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginTop: 60 }}>
          {[
            { num: '01', title: 'Strategy', desc: "We find what your customer actually wants. Not what your deck says they want. There's usually a gap." },
            { num: '02', title: 'Creativity', desc: 'Work people remember, not ads they scroll past. We optimise for memory, not impressions.' },
            { num: '03', title: 'Growth', desc: 'Measurement, iteration, then more measurement. The numbers tell us when we\'re right. The numbers also tell us when we\'re wrong.' },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 140}>
              <div style={{ borderTop: `1px dashed ${C.gray}66`, paddingTop: 28, paddingRight: 16, paddingBottom: 40, position: 'relative' }}>
                <div style={{ position: 'absolute', top: -7, left: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <MilestoneDot active size={12} />
                </div>
                <div style={{ fontSize: 11, color: C.blue, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 16 }}>PILLAR · {p.num}</div>
                <h3 style={{ fontSize: 42, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: C.gray, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '140px 0 100px', background: C.sand }}>
        <div style={{ padding: '0 clamp(20px, 4vw, 56px)', marginBottom: 48 }}>
          <Reveal><Eyebrow num="04" color={`${C.charcoal}88`}>THE PACE-SETTERS</Eyebrow></Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 20, marginTop: 24 }}>
              <h2 style={{ fontSize: 'clamp(42px, 6vw, 88px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                Meet the team.
              </h2>
              <div style={{ fontSize: 11, color: `${C.charcoal}77`, letterSpacing: '0.2em', fontWeight: 700 }}>
                DRAG →
              </div>
            </div>
          </Reveal>
        </div>

        <div
          data-cursor="DRAG"
          className="m1-hscroll"
          style={{ overflowX: 'auto', overflowY: 'hidden', padding: '0 clamp(20px, 4vw, 56px)' }}
        >
          <div style={{ display: 'flex', gap: 24, paddingBottom: 30, width: 'max-content' }}>
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div
                  data-cursor="HI"
                  onMouseEnter={() => setHoverTeam(i)}
                  onMouseLeave={() => setHoverTeam(null)}
                  style={{ cursor: 'pointer', width: 'clamp(240px, 28vw, 320px)' }}
                >
                  <div
                    style={{
                      width: '100%', aspectRatio: '4/5',
                      marginBottom: 16, position: 'relative', overflow: 'hidden',
                      background: C.charcoal,
                    }}
                  >
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'center 20%',
                        filter: hoverTeam === i ? 'grayscale(0%) saturate(1.05)' : 'grayscale(100%) contrast(1.05)',
                        transform: hoverTeam === i ? 'scale(1.04)' : 'scale(1)',
                        transition: 'filter 600ms cubic-bezier(0.7,0,0.2,1), transform 900ms cubic-bezier(0.7,0,0.2,1)',
                      }}
                    />
                    {/* Hover blue tint when not hovered → charcoal tint */}
                    <div
                      style={{
                        position: 'absolute', inset: 0,
                        background: hoverTeam === i ? 'transparent' : `linear-gradient(180deg, ${C.charcoal}22 0%, ${C.charcoal}77 100%)`,
                        transition: 'background 500ms cubic-bezier(0.7,0,0.2,1)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', color: C.white, fontSize: 10, letterSpacing: '0.2em', fontWeight: 700, zIndex: 2 }}>
                      <span>0{i + 1}</span>
                      <span style={{ opacity: hoverTeam === i ? 1 : 0.5, color: hoverTeam === i ? C.blue : C.white, transition: 'opacity 300ms, color 300ms' }}>SAY HI →</span>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 'clamp(22px, 1.8vw, 28px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.1, overflow: 'hidden' }}>
                      <span style={{ display: 'inline-block', transform: hoverTeam === i ? 'translateY(-3px)' : 'translateY(0)', transition: 'transform 400ms cubic-bezier(0.7,0,0.2,1)' }}>
                        {t.split[0]}
                      </span>
                      <span style={{ display: 'inline-block', transform: hoverTeam === i ? 'translateY(3px)' : 'translateY(0)', transition: 'transform 400ms cubic-bezier(0.7,0,0.2,1) 50ms' }}>
                        {t.split[1]}
                      </span>
                      <span style={{ opacity: 0.35, fontWeight: 500, marginLeft: 8 }}>{t.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <div style={{ fontSize: 11, letterSpacing: '0.15em', color: `${C.charcoal}88`, marginTop: 6, fontWeight: 700 }}>
                      {t.role.toUpperCase()}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITIONS */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)', background: C.white }}>
        <Reveal><Eyebrow num="05" color={`${C.charcoal}88`}>IN THE PRESS</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 24, maxWidth: 980 }}>
            People say nice things. <span style={{ color: `${C.charcoal}55` }}>We&apos;re not above quoting them.</span>
          </h2>
        </Reveal>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
          {[
            { year: '2025', pub: 'YourStory', text: '"The agency Indian startups keep quietly referring to each other."' },
            { year: '2024', pub: 'Inc42', text: '"Mile 1 turned our ABM into our best revenue channel."' },
            { year: '2024', pub: 'AdWeek India', text: '"Work that earns attention, not just impressions."' },
          ].map((r, i) => (
            <Reveal key={i} delay={i * 120}>
              <div style={{ padding: '32px 28px 32px 0', borderTop: `1px dashed ${C.charcoal}44`, borderRight: i < 2 ? `1px dashed ${C.charcoal}44` : 'none', paddingLeft: i > 0 ? 28 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <MilestoneDot active size={8} />
                  <span style={{ fontSize: 11, color: `${C.charcoal}88`, fontWeight: 700, letterSpacing: '0.2em' }}>{r.year} · {r.pub.toUpperCase()}</span>
                </div>
                <p style={{ fontSize: 18, lineHeight: 1.4, fontWeight: 500, color: C.charcoal }}>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '140px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white }}>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 88px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1, maxWidth: 1200 }}>
            Want us on your team?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <MagneticButton primary onClick={() => setPage('contact')}>Start the conversation <ArrowRight size={16} /></MagneticButton>
            <MagneticButton light onClick={() => setPage('services')}>See what we do</MagneticButton>
          </div>
        </Reveal>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// PAGE: SERVICES
// ====================================================================

const ServicesPage = ({ setPage }) => {
  return (
    <main style={{ background: C.charcoal, color: C.white }}>
      {/* HERO with 6 milestone dots */}
      <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(20px, 4vw, 56px) 80px', position: 'relative', overflow: 'hidden' }}>
        <Reveal><Eyebrow num="03">THE TOOLKIT</Eyebrow></Reveal>
        <Reveal delay={180}>
          <h1 style={{ fontSize: 'clamp(56px, 10vw, 176px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: '32px 0' }}>
            Seven services. <br /><em style={{ color: C.blue, fontStyle: 'italic' }}>Zero</em> shortcuts.
          </h1>
        </Reveal>
        <Reveal delay={360}>
          <p style={{ fontSize: 'clamp(17px, 1.8vw, 21px)', color: C.gray, maxWidth: 640, lineHeight: 1.5, marginBottom: 60 }}>
            Every service below is a mile marker on the road from &ldquo;we have an idea&rdquo; to &ldquo;we have a business.&rdquo; Run the miles in order. Or don&apos;t. We&apos;re flexible.
          </p>
        </Reveal>

        {/* Six milestone indicators */}
        <Reveal delay={520}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, marginTop: 20, maxWidth: 1100 }}>
            <div style={{ position: 'absolute', left: 14, right: 14, top: '50%', height: 1, borderTop: `1px dashed ${C.gray}`, opacity: 0.5 }} />
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#svc-${s.slug}`}
                data-cursor="JUMP"
                style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'pointer', zIndex: 1 }}
                onMouseEnter={(e) => { const d = e.currentTarget.querySelector('.svc-dot'); if (d) d.style.transform = 'scale(1.4)'; }}
                onMouseLeave={(e) => { const d = e.currentTarget.querySelector('.svc-dot'); if (d) d.style.transform = 'scale(1)'; }}
              >
                <div className="svc-dot" style={{ width: 16, height: 16, borderRadius: '50%', border: `2px solid ${C.blue}`, background: C.charcoal, transition: 'transform 400ms cubic-bezier(0.7,0,0.2,1)' }} />
                <div style={{ fontSize: 11, letterSpacing: '0.15em', color: C.white, fontWeight: 700, textAlign: 'center' }}>{s.short}</div>
                <div style={{ fontSize: 10, color: `${C.gray}aa`, letterSpacing: '0.15em', fontWeight: 700 }}>3.{s.num}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICE SECTIONS */}
      {SERVICES.map((s, i) => {
        const dark = i % 2 === 0;
        return (
          <section
            key={s.slug}
            id={`svc-${s.slug}`}
            style={{
              padding: '140px clamp(20px, 4vw, 56px)',
              background: dark ? C.charcoal : C.sand,
              color: dark ? C.white : C.charcoal,
              position: 'relative',
              borderTop: `1px dashed ${dark ? C.gray : C.charcoal}33`,
            }}
          >
            <div style={{ position: 'absolute', top: -7, left: 'clamp(20px, 4vw, 56px)', display: 'flex', alignItems: 'center', gap: 14 }}>
              <MilestoneDot active size={14} />
              <span style={{ fontSize: 11, letterSpacing: '0.2em', color: C.blue, fontWeight: 700 }}>SERVICE · {s.num}</span>
            </div>

            {/* Giant number watermark */}
            <div
              style={{
                position: 'absolute', right: -20, top: 80,
                fontSize: 'clamp(220px, 30vw, 420px)', fontWeight: 700,
                letterSpacing: '-0.05em', lineHeight: 0.8,
                color: dark ? C.white : C.charcoal, opacity: 0.04,
                pointerEvents: 'none', userSelect: 'none',
              }}
            >
              {s.num}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'start', position: 'relative', marginTop: 40 }}>
              <div>
                <Reveal>
                  <h2 style={{ fontSize: 'clamp(44px, 6vw, 92px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.98, marginBottom: 20 }}>
                    {s.name}
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: C.blue, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.3, marginBottom: 36, maxWidth: 560 }}>
                    &ldquo;{s.tagline}&rdquo;
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: dark ? C.gray : `${C.charcoal}cc`, maxWidth: 520 }}>
                    {s.desc}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={400}>
                <div>
                  <div style={{ fontSize: 11, color: dark ? C.gray : `${C.charcoal}88`, letterSpacing: '0.2em', fontWeight: 700, marginBottom: 20 }}>
                    WHAT YOU GET
                  </div>
                  <div>
                    {s.deliverables.map((d, j) => (
                      <div
                        key={j}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 16,
                          padding: '16px 0',
                          borderTop: `1px dashed ${dark ? C.gray : C.charcoal}44`,
                          borderBottom: j === s.deliverables.length - 1 ? `1px dashed ${dark ? C.gray : C.charcoal}44` : 'none',
                        }}
                      >
                        <span style={{ fontSize: 11, color: C.blue, fontWeight: 700, letterSpacing: '0.15em', minWidth: 32 }}>
                          0{j + 1}
                        </span>
                        <span style={{ fontSize: 17, fontWeight: 500 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={600}>
              <div style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.2em', color: dark ? C.gray : `${C.charcoal}88`, fontWeight: 700 }}>
                  NEXT SERVICE · {i === SERVICES.length - 1 ? 'END OF ROAD' : String(Number(s.num) + 1).padStart(2, '0')}
                </span>
                <div style={{ flex: 1, height: 1, borderTop: `1px dashed ${dark ? C.gray : C.charcoal}`, opacity: 0.4 }} />
                <MilestoneDot active size={10} />
              </div>
            </Reveal>
          </section>
        );
      })}

      {/* END OF ROAD */}
      <section style={{ padding: '160px clamp(20px, 4vw, 56px)', background: C.blue, color: C.white, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', right: 'clamp(20px, 4vw, 56px)', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 140, height: 1, borderTop: `1px dashed ${C.white}`, opacity: 0.6 }} />
          <MilestoneDot active size={16} color={C.white} />
        </div>
        <Reveal><Eyebrow color={`${C.white}aa`}>END OF ROAD</Eyebrow></Reveal>
        <Reveal delay={140}>
          <h2 style={{ fontSize: 'clamp(44px, 7vw, 112px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.98, marginTop: 28, marginBottom: 40, maxWidth: 1100 }}>
            You&apos;ve reached the end <br />of the toolkit. <br /><span style={{ opacity: 0.7 }}>Now what?</span>
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <div onClick={() => setPage('contact')} data-cursor="BOOK" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: C.white, color: C.blue, padding: '18px 28px', borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontSize: 15 }}>
            Book a 30-minute start-right call <ArrowRight size={18} />
          </div>
        </Reveal>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// PAGE: PORTFOLIO
// ====================================================================

const PortfolioPage = ({ setPage }) => {
  const [filter, setFilter] = useState('ALL');
  const filters = ['ALL', 'CGI'];
  const filtered = filter === 'ALL' ? CASES : CASES.filter((c) => c.tags.includes(filter));

  return (
    <main style={{ background: C.sand, color: C.charcoal }}>
      {/* HERO */}
      <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(20px, 4vw, 56px) 80px' }}>
        <Reveal><Eyebrow num="04" color={`${C.charcoal}99`}>THE TRACK RECORD</Eyebrow></Reveal>
        <Reveal delay={180}>
          <h1 style={{ fontSize: 'clamp(56px, 11vw, 184px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: '32px 0' }}>
            Proof, <br /><em style={{ color: C.blue, fontStyle: 'italic' }}>not</em> promises.
          </h1>
        </Reveal>
        <Reveal delay={360}>
          <p style={{ fontSize: 'clamp(17px, 1.8vw, 21px)', color: `${C.charcoal}aa`, maxWidth: 640, lineHeight: 1.5 }}>
            Every brand below started at a different mile. They all finished ahead of schedule. Tap a filter, pick a case, steal what works.
          </p>
        </Reveal>
      </section>

      {/* FILTERS */}
      <section style={{ padding: '0 clamp(20px, 4vw, 56px) 40px', position: 'sticky', top: 72, background: C.sand, zIndex: 50 }}>
        <div style={{ borderTop: `1px dashed ${C.charcoal}44`, borderBottom: `1px dashed ${C.charcoal}44`, padding: '20px 0', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: `${C.charcoal}88`, letterSpacing: '0.2em', fontWeight: 700, marginRight: 10 }}>FILTER BY</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor="FILTER"
              style={{
                padding: '8px 16px', borderRadius: 999,
                border: `1px solid ${filter === f ? C.blue : C.charcoal}33`,
                background: filter === f ? C.blue : 'transparent',
                color: filter === f ? C.white : C.charcoal,
                fontWeight: 700, fontSize: 12, letterSpacing: '0.1em',
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 300ms',
              }}
            >
              {f}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: 11, color: `${C.charcoal}88`, letterSpacing: '0.2em', fontWeight: 700 }}>
            {filtered.length} CASE{filtered.length !== 1 ? 'S' : ''}
          </div>
        </div>
      </section>

      {/* CASE GRID */}
      <section style={{ padding: '60px clamp(20px, 4vw, 56px) 140px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
          {filtered.map((c, i) => {
            const big = i % 5 === 0 || i % 5 === 3;
            return (
              <Reveal key={c.client} delay={i * 80}>
                <div
                  onClick={() => setPage('case', c.slug)}
                  data-cursor="OPEN"
                  style={{ cursor: 'pointer', gridColumn: big ? 'span 2' : 'span 1' }}
                  className={big ? 'm1-span-2' : ''}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('.pimg');
                    const num = e.currentTarget.querySelector('.pnum');
                    if (img) img.style.transform = 'scale(1.04)';
                    if (num) num.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('.pimg');
                    const num = e.currentTarget.querySelector('.pnum');
                    if (img) img.style.transform = 'scale(1)';
                    if (num) num.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: big ? '16/8' : '4/5', overflow: 'hidden', marginBottom: 18 }}>
                    <div
                      className="pimg"
                      style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(135deg, ${c.accent} 0%, ${c.accent2} 100%)`,
                        transition: 'transform 900ms cubic-bezier(0.7,0,0.2,1)',
                      }}
                    />
                    {/* Centered client logo */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                      <img
                        src={c.logo}
                        alt={c.client}
                        style={{
                          maxWidth: big ? '32%' : '52%',
                          maxHeight: big ? 90 : 120,
                          filter: 'brightness(0) invert(1)',
                          opacity: 0.95,
                        }}
                      />
                    </div>
                    <div className="pnum" style={{ position: 'absolute', left: 24, bottom: 24, fontSize: 64, fontWeight: 700, color: `${C.white}18`, letterSpacing: '-0.04em', lineHeight: 0.8, transition: 'transform 500ms cubic-bezier(0.7,0,0.2,1)' }}>
                      0{i + 1}
                    </div>
                    <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 6 }}>
                      {c.tags.map((t) => (
                        <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', background: `${C.charcoal}cc`, color: C.white, padding: '5px 10px', borderRadius: 2 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div style={{ position: 'absolute', top: 20, right: 20, color: C.white, textAlign: 'right' }}>
                      <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>{c.metric}</div>
                      <div style={{ fontSize: 10, letterSpacing: '0.15em', opacity: 0.85, fontWeight: 700, marginTop: 4 }}>{c.metricLabel.toUpperCase()}</div>
                    </div>
                    <div style={{ position: 'absolute', bottom: 20, right: 20, background: C.blue, color: C.white, padding: '8px 14px', borderRadius: 999, fontSize: 11, letterSpacing: '0.15em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                      READ CASE <ArrowUpRight size={12} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ fontSize: big ? 32 : 24, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>{c.client}</h3>
                      <p style={{ fontSize: 14, color: `${C.charcoal}99` }}>{c.result}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <MilestoneDot active size={8} />
                      <span style={{ fontSize: 11, letterSpacing: '0.2em', color: `${C.charcoal}88`, fontWeight: 700 }}>CASE 0{i + 1}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '160px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white }}>
        <Reveal><Eyebrow color={`${C.gray}cc`}>NEXT UP</Eyebrow></Reveal>
        <Reveal delay={140}>
          <h2 style={{ fontSize: 'clamp(48px, 7vw, 112px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.98, marginTop: 28, marginBottom: 40 }}>
            Want your mile on this page?
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <MagneticButton primary onClick={() => setPage('contact')}>Start a case study <ArrowRight size={16} /></MagneticButton>
            <div style={{ fontSize: 13, color: C.gray }}>We usually get back inside 24 hours. Weekends are for stretching.</div>
          </div>
        </Reveal>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// PAGE: CASE STUDY (single case)
// ====================================================================

const CaseStudyPage = ({ setPage, caseSlug }) => {
  const c = CASES.find((x) => x.slug === caseSlug) || CASES[0];
  const otherCases = CASES.filter((x) => x.slug !== c.slug);

  return (
    <main style={{ background: C.sand, color: C.charcoal }}>
      {/* HERO */}
      <section style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '120px clamp(20px, 4vw, 56px) 60px' }}>
        <Reveal>
          <div onClick={() => setPage('portfolio')} data-cursor="BACK" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: `${C.charcoal}aa`, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', marginBottom: 32 }}>
            <ArrowLeft size={14} /> ALL CASES
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', background: C.charcoal, color: C.white, padding: '6px 12px', borderRadius: 2 }}>
              {c.sector}
            </span>
            {c.tags.map((t) => (
              <span key={t} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', background: C.blue, color: C.white, padding: '6px 12px', borderRadius: 2 }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={220}>
          <h1 style={{ fontSize: 'clamp(48px, 9vw, 144px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, margin: '12px 0 24px' }}>
            {c.client}
          </h1>
        </Reveal>
        <Reveal delay={340}>
          <p style={{ fontSize: 'clamp(20px, 2.4vw, 32px)', color: C.blue, fontStyle: 'italic', maxWidth: 900, lineHeight: 1.3, fontWeight: 500 }}>
            {c.project}
          </p>
        </Reveal>
      </section>

      {/* VIDEO */}
      <section style={{ padding: '0 clamp(20px, 4vw, 56px) 100px' }}>
        {/* Video NOT inside Reveal — browsers may not buffer/play video inside opacity:0 containers */}
        <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto', background: '#000', borderRadius: 12, overflow: 'hidden', boxShadow: '0 30px 80px rgba(15,15,16,0.25)' }}>
          <video
            key={c.slug}
            controls
            playsInline
            preload="auto"
            style={{ width: '100%', display: 'block', background: '#000' }}
          >
            <source src={c.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Reveal delay={140}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 22, fontSize: 12, color: `${C.charcoal}88`, letterSpacing: '0.2em', fontWeight: 700 }}>
            <span>CGI FILM  ·  PRODUCED WITH</span>
            <img
              src="/clients/wesualize.png"
              alt="WeSualize Studios"
              style={{ height: 28, width: 'auto', display: 'block', borderRadius: 4 }}
            />
          </div>
        </Reveal>
      </section>

      {/* METRICS STRIP */}
      <section style={{ padding: '100px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white }}>
        <Reveal><Eyebrow color={`${C.gray}cc`}>THE NUMBERS</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginTop: 24, marginBottom: 60 }}>
            {c.result}
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, borderTop: `1px solid ${C.white}22` }}>
          {c.metrics.map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ padding: '40px 28px', borderRight: `1px solid ${C.white}11` }}>
                <div style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 700, color: C.blue, letterSpacing: '-0.04em', lineHeight: 1 }}>{m.num}</div>
                <div style={{ marginTop: 14, fontSize: 13, color: C.gray, fontWeight: 500 }}>{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        {c.press.length > 0 && (
          <Reveal delay={400}>
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: `1px dashed ${C.white}22` }}>
              <div style={{ fontSize: 11, color: `${C.gray}aa`, letterSpacing: '0.25em', fontWeight: 700, marginBottom: 24 }}>FEATURED IN</div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {c.press.map((p) => (
                  <div key={p} style={{ fontSize: 'clamp(18px, 2vw, 28px)', fontWeight: 600, color: C.white, fontStyle: 'italic' }}>
                    <em>{p}</em>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* THE STORY — Brief / Thinking / Process / Outcome */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)', background: C.sand }}>
        {[
          { num: '01', label: 'THE BRIEF', text: c.brief },
          { num: '02', label: 'THE THINKING', text: c.thinking },
          { num: '03', label: 'THE PROCESS', text: c.process },
          { num: '04', label: 'THE OUTCOME', text: c.outcome },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 240px) 1fr', gap: 60, padding: '50px 0', borderTop: `1px dashed ${C.charcoal}33` }}>
              <div>
                <div style={{ fontSize: 14, color: C.blue, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{s.label}</div>
              </div>
              <div style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', lineHeight: 1.6, color: `${C.charcoal}dd`, maxWidth: 800 }}>
                {s.text}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* OTHER CASES */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)', background: C.white }}>
        <Reveal><Eyebrow color={`${C.charcoal}88`}>NEXT CASE</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: 20, marginBottom: 60 }}>
            More <em style={{ color: C.blue, fontStyle: 'italic' }}>miles</em> we&apos;ve made.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {otherCases.map((oc, i) => (
            <Reveal key={oc.slug} delay={i * 120}>
              <div
                onClick={() => { setPage('case', oc.slug); window.scrollTo({ top: 0 }); }}
                data-cursor="OPEN"
                style={{ cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', height: 320, overflow: 'hidden', marginBottom: 16, background: `linear-gradient(135deg, ${oc.accent} 0%, ${oc.accent2} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={oc.logo}
                    alt={oc.client}
                    style={{
                      maxWidth: '55%', maxHeight: 100,
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.95,
                    }}
                  />
                  <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
                    {oc.tags.map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', background: `${C.charcoal}cc`, color: C.white, padding: '4px 8px', borderRadius: 2 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, right: 16, color: C.white, textAlign: 'right' }}>
                    <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>{oc.metric}</div>
                    <div style={{ fontSize: 10, letterSpacing: '0.15em', opacity: 0.85, fontWeight: 700 }}>{oc.metricLabel.toUpperCase()}</div>
                  </div>
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>{oc.client}</h3>
                <p style={{ fontSize: 15, color: `${C.charcoal}aa` }}>{oc.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '160px clamp(20px, 4vw, 56px)', background: C.charcoal, color: C.white }}>
        <Reveal><Eyebrow color={`${C.gray}cc`}>YOUR TURN</Eyebrow></Reveal>
        <Reveal delay={140}>
          <h2 style={{ fontSize: 'clamp(48px, 7vw, 112px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.98, marginTop: 28, marginBottom: 40 }}>
            Want a film like this?
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <MagneticButton primary onClick={() => setPage('contact')}>Start a project <ArrowRight size={16} /></MagneticButton>
            <div style={{ fontSize: 13, color: C.gray }}>CGI films from ₹1.5L. Delivered in 2–4 weeks.</div>
          </div>
        </Reveal>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// PAGE: CONTACT
// ====================================================================

const ContactPage = ({ setPage }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', need: '', budget: '', message: '', hear: '' });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldBase = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px dashed ${C.white}66`,
    padding: '16px 2px 10px',
    color: C.white, fontSize: 17, fontFamily: 'inherit',
    outline: 'none',
  };

  return (
    <main style={{ background: C.charcoal, color: C.white }}>
      {/* HERO + ROAD */}
      <section style={{ position: 'relative', padding: '140px clamp(20px, 4vw, 56px) 80px', overflow: 'hidden' }}>
        {/* Central dashed road that stretches */}
        <div style={{ position: 'absolute', top: 100, bottom: 0, left: '50%', width: 1, borderLeft: `1px dashed ${C.gray}`, opacity: 0.25 }} className="hidden md:block" />

        <Reveal><Eyebrow num="05">THE START GUN</Eyebrow></Reveal>
        <Reveal delay={180}>
          <h1 style={{ fontSize: 'clamp(52px, 10vw, 168px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 0.96, margin: '32px 0', maxWidth: 1400 }}>
            So. Where are you in your <em style={{ color: C.blue, fontStyle: 'italic' }}>race</em>?
          </h1>
        </Reveal>
        <Reveal delay={340}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            {['HELLO', 'BRIEF', 'KICK-OFF'].map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <MilestoneDot active size={12} color={i === 0 ? C.blue : C.white} />
                <span style={{ fontSize: 11, letterSpacing: '0.2em', color: i === 0 ? C.blue : C.gray, fontWeight: 700 }}>{label}</span>
                {i < 2 && <div style={{ width: 60, height: 1, borderTop: `1px dashed ${C.gray}`, opacity: 0.5 }} />}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FORM */}
      <section style={{ padding: '40px clamp(20px, 4vw, 56px) 120px', position: 'relative' }}>
        {!submitted ? (
          <form onSubmit={submit} style={{ maxWidth: 820, margin: '0 auto' }}>
            <Reveal>
              <div style={{ fontSize: 11, color: C.blue, letterSpacing: '0.2em', fontWeight: 700, marginBottom: 40 }}>
                THE BRIEF · FIELDS MARKED · ARE WHERE WE LISTEN
              </div>
            </Reveal>

            {[
              { k: 'name', label: '01 / YOUR NAME', type: 'text', ph: 'e.g. Aditi Rao' },
              { k: 'email', label: '02 / WORK EMAIL', type: 'email', ph: 'you@company.com' },
              { k: 'company', label: '03 / COMPANY', type: 'text', ph: 'e.g. Acme Corp.' },
            ].map((f, i) => (
              <Reveal key={f.k} delay={i * 100}>
                <div style={{ marginBottom: 32, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <MilestoneDot active={focused === f.k || !!form[f.k]} size={8} />
                    <label style={{ fontSize: 10, letterSpacing: '0.2em', color: C.gray, fontWeight: 700 }}>{f.label}</label>
                  </div>
                  <input
                    type={f.type}
                    value={form[f.k]}
                    onChange={onChange(f.k)}
                    onFocus={() => setFocused(f.k)}
                    onBlur={() => setFocused(null)}
                    placeholder={f.ph}
                    required
                    style={{ ...fieldBase, borderBottomColor: focused === f.k ? C.blue : `${C.white}44`, borderBottomStyle: focused === f.k ? 'solid' : 'dashed' }}
                  />
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <MilestoneDot active={focused === 'need' || !!form.need} size={8} />
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', color: C.gray, fontWeight: 700 }}>04 / WHAT BRINGS YOU TO MILE 1?</label>
                </div>
                <select
                  value={form.need}
                  onChange={onChange('need')}
                  onFocus={() => setFocused('need')}
                  onBlur={() => setFocused(null)}
                  required
                  style={{ ...fieldBase, appearance: 'none', cursor: 'pointer', borderBottomColor: focused === 'need' ? C.blue : `${C.white}44`, borderBottomStyle: focused === 'need' ? 'solid' : 'dashed' }}
                >
                  <option value="" style={{ background: C.charcoal }}>Pick the closest match…</option>
                  {['ABM', 'GTM Strategy', 'Paid Ads', 'Website Development', 'SEO / GEO / AIEO', 'CGI Studio', "Not sure yet — we'll figure it out together"].map((o) => (
                    <option key={o} value={o} style={{ background: C.charcoal }}>{o}</option>
                  ))}
                </select>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <MilestoneDot active={focused === 'budget' || !!form.budget} size={8} />
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', color: C.gray, fontWeight: 700 }}>05 / APPROXIMATE BUDGET</label>
                </div>
                <select
                  value={form.budget}
                  onChange={onChange('budget')}
                  onFocus={() => setFocused('budget')}
                  onBlur={() => setFocused(null)}
                  required
                  style={{ ...fieldBase, appearance: 'none', cursor: 'pointer', borderBottomColor: focused === 'budget' ? C.blue : `${C.white}44`, borderBottomStyle: focused === 'budget' ? 'solid' : 'dashed' }}
                >
                  <option value="" style={{ background: C.charcoal }}>Pick a range…</option>
                  {['Under ₹5L', '₹5L – ₹15L', '₹15L – ₹50L', '₹50L+', "Let's talk"].map((o) => (
                    <option key={o} value={o} style={{ background: C.charcoal }}>{o}</option>
                  ))}
                </select>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <MilestoneDot active={focused === 'message' || !!form.message} size={8} />
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', color: C.gray, fontWeight: 700 }}>06 / TELL US ABOUT YOUR FIRST MILE</label>
                </div>
                <textarea
                  value={form.message}
                  onChange={onChange('message')}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="We're six months in, shipped to 3 cities, stuck on CAC…"
                  rows={5}
                  required
                  style={{ ...fieldBase, resize: 'vertical', borderBottomColor: focused === 'message' ? C.blue : `${C.white}44`, borderBottomStyle: focused === 'message' ? 'solid' : 'dashed' }}
                />
              </div>
            </Reveal>

            <Reveal delay={540}>
              <div style={{ marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <MilestoneDot active={focused === 'hear' || !!form.hear} size={8} />
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', color: C.gray, fontWeight: 700 }}>07 / HOW DID YOU HEAR ABOUT US (OPTIONAL)</label>
                </div>
                <input
                  type="text"
                  value={form.hear}
                  onChange={onChange('hear')}
                  onFocus={() => setFocused('hear')}
                  onBlur={() => setFocused(null)}
                  placeholder="A friend / LinkedIn / a billboard we don't know we have…"
                  style={{ ...fieldBase, borderBottomColor: focused === 'hear' ? C.blue : `${C.white}44`, borderBottomStyle: focused === 'hear' ? 'solid' : 'dashed' }}
                />
              </div>
            </Reveal>

            <Reveal delay={620}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  data-cursor="SEND"
                  style={{
                    padding: '20px 36px', background: C.blue, color: C.white,
                    border: 'none', borderRadius: 999, fontWeight: 700, fontSize: 15,
                    letterSpacing: '0.02em', cursor: 'pointer', fontFamily: 'inherit',
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    transition: 'transform 300ms cubic-bezier(0.7,0,0.2,1)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(6px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  Start Right <ArrowRight size={18} />
                </button>
                <div style={{ flex: 1, minWidth: 80, height: 1, borderTop: `1px dashed ${C.gray}`, opacity: 0.5 }} />
                <span style={{ fontSize: 11, color: C.gray, letterSpacing: '0.2em', fontWeight: 700 }}>KICK-OFF</span>
              </div>
            </Reveal>
          </form>
        ) : (
          <div style={{ maxWidth: 820, margin: '60px auto', textAlign: 'center', padding: 40 }}>
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <MilestoneDot active size={16} />
                <span style={{ fontSize: 11, color: C.blue, letterSpacing: '0.2em', fontWeight: 700 }}>MESSAGE SENT · YOU&apos;RE OFF</span>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 24 }}>
                We&apos;ll reply within <span style={{ color: C.blue }}>24 hours</span>. <br />Meanwhile, stretch.
              </h2>
            </Reveal>
            <Reveal delay={320}>
              <p style={{ fontSize: 17, color: C.gray, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
                Your first mile just went from idea to inbox. Someone from our team is already reading it.
              </p>
            </Reveal>
            <Reveal delay={440}>
              <MagneticButton light onClick={() => { setSubmitted(false); setPage('home'); window.scrollTo({ top: 0 }); }}>
                Back to Mile 01
              </MagneticButton>
            </Reveal>
          </div>
        )}
      </section>

      {/* ALT CONTACT */}
      <section style={{ padding: '100px clamp(20px, 4vw, 56px)', borderTop: `1px dashed ${C.gray}33`, borderBottom: `1px dashed ${C.gray}33` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
          {[
            { label: 'EMAIL', value: 'hello@mile1.in', sub: 'Inbox open, humans reply.' },
            { label: 'OFFICE', value: 'Bengaluru, IN', sub: 'Samosas appreciated.' },
            { label: 'SOCIAL', value: '@mile1.in', sub: 'We post occasionally. Well.' },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 120}>
              <div style={{ borderTop: `1px dashed ${C.gray}55`, paddingTop: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <MilestoneDot active size={8} />
                  <span style={{ fontSize: 11, color: C.blue, letterSpacing: '0.2em', fontWeight: 700 }}>{b.label}</span>
                </div>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.015em', marginBottom: 6 }}>{b.value}</div>
                <div style={{ fontSize: 13, color: C.gray }}>{b.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '120px clamp(20px, 4vw, 56px)' }}>
        <Reveal><Eyebrow num="07">THE USUAL QUESTIONS</Eyebrow></Reveal>
        <Reveal delay={140}>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.02, marginTop: 24, marginBottom: 60, maxWidth: 900 }}>
            Things people ask before saying &ldquo;yes.&rdquo;
          </h2>
        </Reveal>
        <div style={{ maxWidth: 1000 }}>
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                style={{ borderTop: `1px dashed ${C.gray}55`, borderBottom: i === FAQS.length - 1 ? `1px dashed ${C.gray}55` : 'none' }}
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  data-cursor={faqOpen === i ? 'CLOSE' : 'OPEN'}
                  style={{
                    width: '100%', background: 'transparent', border: 'none',
                    padding: '28px 0', color: C.white, fontFamily: 'inherit',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', gap: 20, textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{ fontSize: 11, color: C.blue, letterSpacing: '0.2em', fontWeight: 700 }}>0{i + 1}</span>
                    <span style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 500, letterSpacing: '-0.01em' }}>{f.q}</span>
                  </div>
                  <div style={{ transform: faqOpen === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 400ms cubic-bezier(0.7,0,0.2,1)' }}>
                    <Plus size={22} color={C.blue} strokeWidth={1.8} />
                  </div>
                </button>
                <div
                  style={{
                    maxHeight: faqOpen === i ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 500ms cubic-bezier(0.7,0,0.2,1)',
                  }}
                >
                  <div style={{ padding: '0 0 28px 44px', fontSize: 16, color: C.gray, lineHeight: 1.6, maxWidth: 720 }}>
                    {f.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer setPage={setPage} />
    </main>
  );
};

// ====================================================================
// MAIN APP
// ====================================================================

export default function App() {
  const [page, setPage] = useState('home');
  const [caseSlug, setCaseSlug] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);

  // Page theme for cursor + progress rail
  const theme = page === 'about' || page === 'portfolio' || page === 'case' ? 'light' : 'dark';

  // Railway milestones per page
  const railMilestones = {
    home: ['START', 'THESIS', 'TOOLKIT', 'WORK', 'PARTNERS', 'STATS', 'VOICE', 'GO'],
    about: ['START', 'PHILOSOPHY', 'WHAT', 'TEAM', 'PRESS', 'GO'],
    services: ['START', 'ABM', 'GTM', 'PAID', 'WEB', 'SEO', 'CGI', 'GO'],
    portfolio: ['START', 'FILTER', 'WORK', 'GO'],
    case: ['START', 'FILM', 'NUMBERS', 'STORY', 'NEXT', 'GO'],
    contact: ['HELLO', 'BRIEF', 'OTHER', 'FAQ', 'GO'],
  };

  // Inject Satoshi font + global styles
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
    document.head.appendChild(fontLink);

    const style = document.createElement('style');
    style.textContent = `
      html, body { margin: 0; padding: 0; font-family: 'Satoshi', system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; background: ${C.charcoal}; }
      * { box-sizing: border-box; }
      button, select, input, textarea { font-family: 'Satoshi', system-ui, sans-serif; }
      a { text-decoration: none; color: inherit; }
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: ${C.charcoal}; }
      ::-webkit-scrollbar-thumb { background: ${C.gray}44; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: ${C.blue}; }
      .m1-hscroll { scrollbar-width: thin; scrollbar-color: ${C.blue} transparent; }
      .m1-hscroll::-webkit-scrollbar { height: 6px; }
      .m1-hscroll::-webkit-scrollbar-track { background: ${C.white}10; }
      .m1-hscroll::-webkit-scrollbar-thumb { background: ${C.blue}; border-radius: 3px; }

      @media (min-width: 900px) {
        .m1-span-2 { grid-column: span 2; }
      }

      @keyframes m1Marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
      @keyframes m1Pulse {
        0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.8); opacity: 0.4; }
      }
      @keyframes m1ScrollDot {
        0% { top: 0; opacity: 1; }
        80% { top: calc(100% - 7px); opacity: 1; }
        100% { top: calc(100% - 7px); opacity: 0; }
      }
      @keyframes m1FadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }

      body * { cursor: none; }
      @media (hover: none) {
        body * { cursor: auto; }
      }

      em { font-style: italic; }

      /* Hide progress rail on smaller screens */
      @media (min-width: 1280px) {
        main > section {
          padding-left: 72px !important;
        }
      }
      @media (max-width: 1279px) {
        .xl\\:flex { display: none !important; }
      }
      @media (max-width: 767px) {
        .md\\:block { display: none !important; }
        .md\\:flex { display: none !important; }
      }
      @media (min-width: 768px) {
        .hidden.md\\:block { display: block !important; }
        .hidden.md\\:flex { display: flex !important; }
      }
      @media (min-width: 1280px) {
        .hidden.xl\\:flex { display: flex !important; }
      }

      /* Select styling */
      select option {
        background: ${C.charcoal} !important;
        color: ${C.white};
      }

      input::placeholder, textarea::placeholder {
        color: ${C.gray}77;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(style);
    };
  }, []);

  // Page change transition. Optional slug for case-study pages.
  const changePage = useCallback((p, slug = null) => {
    setPageTransition(true);
    setTimeout(() => {
      setPage(p);
      setCaseSlug(slug);
      window.scrollTo({ top: 0 });
      setTimeout(() => setPageTransition(false), 80);
    }, 320);
  }, []);

  return (
    <div style={{ fontFamily: 'Satoshi, sans-serif', color: C.white, minHeight: '100vh', background: C.charcoal, position: 'relative' }}>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <CustomCursor theme={theme} />
          <Navigation page={page} setPage={changePage} theme={theme} />
          <ProgressRail milestones={railMilestones[page] || []} theme={theme} />

          {/* Page transition overlay */}
          <div
            style={{
              position: 'fixed', inset: 0, background: C.blue, zIndex: 300,
              transform: pageTransition ? 'translateY(0)' : 'translateY(-100%)',
              transition: 'transform 600ms cubic-bezier(0.7,0,0.2,1)',
              pointerEvents: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <div style={{ color: C.white, fontSize: 14, letterSpacing: '0.3em', fontWeight: 700 }}>
              MOVING TO {NAV.find((n) => n.id === page)?.label?.toUpperCase()}
            </div>
          </div>

          <div style={{ opacity: pageTransition ? 0.2 : 1, transition: 'opacity 320ms' }}>
            {page === 'home' && <HomePage setPage={changePage} />}
            {page === 'about' && <AboutPage setPage={changePage} />}
            {page === 'services' && <ServicesPage setPage={changePage} />}
            {page === 'portfolio' && <PortfolioPage setPage={changePage} />}
            {page === 'case' && <CaseStudyPage setPage={changePage} caseSlug={caseSlug} />}
            {page === 'contact' && <ContactPage setPage={changePage} />}
          </div>
        </>
      )}
    </div>
  );
}
