import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact.jsx";
import "./App.css";

const BASE = import.meta.env.BASE_URL;
const IMG = {
  logo: `${BASE}images/logo.png`,
  hero: `${BASE}images/1stconsole.png`,
  audio: `${BASE}images/s1.png`,
  led: `${BASE}images/s2.png`,
  lighting: `${BASE}images/s3.png`,
  music: `${BASE}images/s4.png`,
  rental: `${BASE}images/s5.png`,
  tools: `${BASE}images/s6.png`,
  about: `${BASE}images/a1.png`,
  
 
};
const M = (file) => `${BASE}media/${file}`;
const bg = (src) => ({ "--img": `url(${src})` });

const Svg = ({ children, size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {children}
  </svg>
);
const Arrow = (p) => <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
const Chevron = ({ dir = "right", ...p }) => <Svg {...p}><path d={dir === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} /></Svg>;
const IconPlay = (p) => <Svg {...p}><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></Svg>;
const IconExpand = (p) => <Svg {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></Svg>;
const Menu = (p) => <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>;
const Close = (p) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>;
const IconAudio = (p) => <Svg {...p}><path d="M3 12h1M7 8v8M11 4v16M15 7v10M19 10v4M22 12h-1" /></Svg>;
const IconLed = (p) => <Svg {...p}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 15l5-4 4 3 3-2 6 4M9 8.5h.01M8 21h8" /></Svg>;
const IconLight = (p) => <Svg {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /><path d="M12 0v0M3 9H1M23 9h-2M5 3 3.5 1.5M19 3l1.5-1.5" /></Svg>;

const Iconmusic = (p) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <path d="M18 3c-1 5-7 8-7 14a5 5 0 1 0 5-5c-2 0-4 2-4 5" />
    <path d="M18 3c3 7 1 13-5 18-2 2-1 5 2 6 5 1 9-4 9-10" />
    <path d="M8 24c4-2 10-3 15-1" />
  </svg>
);

const IconCase = (p) => <Svg {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18M11 13v2h2v-2" /></Svg>;
const IconTools = (p) => <Svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.4-.6-.6-2.4z" /></Svg>;
const IconCalendar = (p) => <Svg {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2M12 2v2M12 20v2" /></Svg>;
const IconUsers = (p) => <Svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.7a3.5 3.5 0 0 1 0 6.6M18 14.3c2.2.7 3.5 2.6 3.5 5.7" /></Svg>;
const IconShield = (p) => <Svg {...p}><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></Svg>;
const IconYoutube = (p) => <Svg {...p}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></Svg>;
const IconInstagram = (p) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></Svg>;
const IconLinkedin = (p) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.7 2.4-2.7S16.5 11.2 16.5 13v3" /></Svg>;
const IconWhatsapp = (p) => <Svg {...p}><path d="M3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" /></Svg>;

const Logo = ({ className = "" }) => (
  <a href={`${BASE}#home`} className={`logo ${className}`} aria-label="SNEHA PRO home">
    <img src={IMG.logo} alt="SNEHA PRO - Audio Visual Lighting" className="logo-img" />
  </a>
);

const NAV = ["Home", "About", "Services", "Projects", "Contact"];
const SERVICES = [
  { icon: IconAudio, title: ["Live Audio, PA Systems", "& Audio Mixing"], img: IMG.audio },
  { icon: IconLed, title: ["LED Wall &", "Visual Displays"], img: IMG.led },
  { icon: IconLight, title: ["Stage Lighting", "& Effects"], img: IMG.lighting },
  { icon: Iconmusic, title: ["Stage Decor", "Band program"], img: IMG.music },
  { icon: IconCase, title: ["Audio Equipment", "Rental"], img: IMG.rental },
  { icon: IconTools, title: ["Tools & Equipment"], img: IMG.tools },
];
const PROJECTS = [
  { title: "Live Concerts & Festivals", img: IMG.concerts, media: [
    { type: "video", src: M("concerts/lc1.mp4"), poster: IMG.concerts },
    { type: "video", src: M("concerts/video-2.mp4") },
    { type: "image", src: M("concerts/photo-1.jpg") },
    { type: "image", src: M("concerts/photo-2.jpg") },
  ]},
  { title: "Corporate Events & Conferences", img: IMG.corporate, media: [
    { type: "video", src: M("corporate/ce1.mp4"), poster: IMG.corporate },
    { type: "video", src: M("corporate/video-2.mp4") },
    { type: "image", src: M("corporate/photo-1.jpg") },
    { type: "image", src: M("corporate/photo-2.jpg") },
  ]},
  { title: "Tools & Equipment", img: IMG.projTools, media: [
    { type: "video", src: M("tools/tool1.mp4"), poster: IMG.projTools },
    { type: "video", src: M("tools/video-2.mp4") },
    { type: "image", src: M("tools/photo-1.jpg") },
    { type: "image", src: M("tools/photo-2.jpg") },
  ]},
];
const STATS = [
  { icon: IconCalendar, value: "100+", label: "Events Completed", short: "Events" },
  { icon: IconUsers, value: "50+", label: "Happy Clients", short: "Clients" },
  { icon: IconCase, value: "200+", label: "Production Projects", short: "Projects" },
  { icon: IconShield, value: "5+", label: "Years of Experience", short: "Years" },
];
const Eyebrow = ({ children, reveal = true }) => (
  <p className="eyebrow" {...(reveal ? { "data-reveal": "" } : {})}><span className="eyebrow-bar" />{children}</p>
);
const prefersReduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function PreviewVideo({ src, poster }) {
  const ref = useRef(null);
  const [off, setOff] = useState(!src);
  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReduced()) return;
    v.muted = true;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  if (off) return null;
  return <video ref={ref} className="card-preview" src={src} poster={poster} muted loop autoPlay playsInline preload="auto" aria-hidden="true" tabIndex={-1} onEnded={(e) => { const video = e.currentTarget; video.currentTime = 0; video.play().catch(() => {}); }} onError={() => setOff(true)} />;
}

function Lightbox({ project, index, onIndex, onClose }) {
  const items = project.media;
  const item = items[index];
  const boxRef = useRef(null);
  const touchX = useRef(null);
  const [failed, setFailed] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const canFs = typeof document !== "undefined" && document.fullscreenEnabled;
  const go = (d) => onIndex((index + d + items.length) % items.length);
  useEffect(() => setFailed(false), [index]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onFs = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("fullscreenchange", onFs);
      if (document.fullscreenElement) document.exitFullscreen?.();
    };
  }, []);
  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else boxRef.current?.requestFullscreen?.();
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null || e.target.tagName === "VIDEO") return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
  };
  const thumbOf = (it) => it.poster || (it.type === "image" ? it.src : null);
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} highlights`} ref={boxRef}>
      <div className="lb-top">
        <div className="lb-title"><p>Highlights</p><h3>{project.title}</h3></div>
        <span className="lb-count">{index + 1} / {items.length}</span>
        {canFs && <button className="lb-btn" onClick={toggleFs} aria-label={isFs ? "Exit full screen" : "Full screen"}><IconExpand size={18} /></button>}
        <button className="lb-btn" onClick={onClose} aria-label="Close highlights" autoFocus><Close size={20} /></button>
      </div>
      <div className="lb-stage" onClick={(e) => e.target === e.currentTarget && onClose()} onTouchStart={(e) => (touchX.current = e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        {failed ? <div className="lb-missing"><p>This file could not be loaded.</p><small>{item.src}</small></div> :
          item.type === "video" ? <video key={item.src} className="lb-media" src={item.src} poster={item.poster} controls autoPlay playsInline onError={() => setFailed(true)} onEnded={() => index < items.length - 1 && go(1)} /> :
          <img key={item.src} className="lb-media" src={item.src} alt={`${project.title} ${index + 1}`} onError={() => setFailed(true)} />}
        {items.length > 1 && <>
          <button className="lb-nav prev" onClick={() => go(-1)} aria-label="Previous"><Chevron dir="left" size={22} /></button>
          <button className="lb-nav next" onClick={() => go(1)} aria-label="Next"><Chevron size={22} /></button>
        </>}
      </div>
      <div className="lb-thumbs">{items.map((it, i) => <button key={it.src} className={`lb-thumb ${i === index ? "active" : ""}`} style={thumbOf(it) ? { "--t": `url(${thumbOf(it)})` } : undefined} onClick={() => onIndex(i)} aria-label={`Show ${it.type} ${i + 1}`}>{it.type === "video" && <IconPlay size={20} />}</button>)}</div>
    </div>,
    document.body
  );
}

function CountUp({ value, duration = 1600 }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";
  const [n, setN] = useState(prefersReduced() ? target : 0);
  const ref = useRef(null);
  useEffect(() => {
    if (prefersReduced()) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Home() {
  const [open, setOpen] = useState(false);
  const track = useRef(null);
  const appRef = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = appRef.current;
    if (!root || prefersReduced()) return;
    root.classList.add("reveal-on");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => { io.disconnect(); root.classList.remove("reveal-on"); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const slide = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth / 2), behavior: "smooth" });
  };
  const navHref = (name) => name === "Home" ? "#home" : `#${name.toLowerCase()}`;

  return (
    <div className="app" id="home" ref={appRef}>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <Logo />
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {NAV.map((n, i) => <a key={n} href={navHref(n)} className={i === 0 ? "active" : ""} onClick={() => setOpen(false)}>{n}</a>)}
        </nav>
        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <Close size={22} /> : <Menu size={22} />}</button>
      </header>

      <section className="hero" style={bg(IMG.hero)}>
        <div className="beams" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="hero-inner">
          <Eyebrow reveal={false}>PROFESSIONAL AVL SOLUTIONS</Eyebrow>
          <h1>Bringing Your<br /><span className="red">Vision to Life.</span></h1>
          <p className="lead">From powerful sound, stunning visuals, and dynamic lighting — we create unforgettable experiences for every event.</p>
          <a href="#services" className="btn">Explore Our Services <Arrow size={18} /></a>
        </div>
      </section>

      <section className="section services" id="services">
        <Eyebrow>OUR SERVICES</Eyebrow>
        <h2 data-reveal>Complete Event<br />Production <span className="red">Solutions</span></h2>
        <p className="sub" data-reveal style={{ "--d": "80ms" }}>From sound reinforcement to immersive visuals and dynamic lighting, we deliver integrated production solutions for events of every scale.</p>
        <div className="service-grid">
          {SERVICES.map(({ icon: Icon, title, img }, i) => <a href="#contact" className="service-card" data-reveal style={{ ...bg(img), "--d": `${i * 90}ms` }} key={title.join()}>
            <span className="service-icon"><Icon size={30} /></span>
            <span className="service-title">{title.map((t) => <span key={t}>{t}</span>)}</span>
            <Arrow size={18} className="service-arrow" />
          </a>)}
        </div>
      </section>

      <section className="section about-wrap" id="about">
        <div className="about">
          <div className="about-img" data-reveal="left" style={bg(IMG.about)} role="img" aria-label="Mixing console at a live event" />
          <div className="about-text" data-reveal="right">
            <Eyebrow>ABOUT US</Eyebrow>
            <h2>Creative. Technical.<br /><span className="red">Unforgettable.</span></h2>
            <p>We bring audio, visual and lighting together to create powerful live experiences. From concerts and festivals to corporate events and large-scale productions, our team delivers professional production, reliable equipment, and seamless execution.</p>
            <a href="#about" className="btn btn-sm">Learn More <Arrow size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <Eyebrow>OUR PROJECTS</Eyebrow>
        <h2 data-reveal>Experiences We’ve <span className="red">Created</span></h2>
        <p className="sub" data-reveal style={{ "--d": "80ms" }}>A showcase of our work — from live concerts to corporate events, showcasing the power of sound, visuals and lighting.</p>
        <div className="carousel">
          <button className="car-btn prev" onClick={() => slide(-1)} aria-label="Previous projects"><Chevron dir="left" size={18} /></button>
          <div className="car-track" ref={track}>
            {PROJECTS.map((p, i) => <button type="button" className="project-card" data-reveal style={{ ...bg(p.img), "--d": `${i * 90}ms` }} key={p.title} onClick={() => setViewer({ p: i, i: 0 })} aria-label={`Open ${p.title} highlights`}>
              <PreviewVideo src={p.media.find((m) => m.type === "video")?.src} poster={p.img} />
              <span>{p.title}</span><Arrow size={18} className="service-arrow" />
            </button>)}
          </div>
          <button className="car-btn next" onClick={() => slide(1)} aria-label="Next projects"><Chevron size={18} /></button>
        </div>
        <ul className="stats">
          {STATS.map(({ icon: Icon, value, label, short }, i) => <li key={label} data-reveal style={{ "--d": `${i * 100}ms` }}>
            <Icon size={34} className="stat-icon" />
            <span className="stat-text"><strong><CountUp value={value} /></strong><small className="lbl-long">{label}</small><small className="lbl-short">{short}</small></span>
          </li>)}
        </ul>
      </section>

      <section className="section contact-wrap" id="contact">
        <div className="contact" data-reveal>
          <Logo className="logo-lg" />
          <div className="contact-text">
            <p className="eyebrow small">LET’S BRING YOUR EVENT TO LIFE</p>
            <h2>Get In <span className="red">Touch</span></h2>
            <p>Tell us about your event. We’ll help you create an unforgettable experience with the right sound, visuals, lighting and production team.</p>
            <Link to="/contact" className="btn btn-sm contact-mobile-btn">Contact Us <Arrow size={16} /></Link>
          </div>
          <Link to="/contact" className="circle-btn" aria-label="Contact us"><Arrow size={22} /></Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row" data-reveal>
          <div className="socials">
            <a href="#" aria-label="YouTube"><IconYoutube size={24} /></a>
            <a href="https://www.instagram.com/shijuraj_on_board/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram size={24} /></a>
            <a href="#" aria-label="LinkedIn"><IconLinkedin size={24} /></a>
            <a href="https://wa.me/919995166463" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsapp size={24} /></a>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {NAV.map((n, i) => <a key={n} href={navHref(n)} className={i === 0 ? "active" : ""}>{n}</a>)}
          </nav>
          <p className="footer-tag">Audio · Visual · Lighting · AVL</p>
        </div>
        <p className="copy">© 2025 SNEHA PRO. All rights reserved.</p>
      </footer>

      {viewer && <Lightbox project={PROJECTS[viewer.p]} index={viewer.i} onIndex={(i) => setViewer((v) => ({ ...v, i }))} onClose={() => setViewer(null)} />}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
