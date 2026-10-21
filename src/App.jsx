

import { useEffect, useRef, useState } from 'react'
import './App.css'

const IMG = {
  logo: `${import.meta.env.BASE_URL}images/logo.png`,
  hero: `${import.meta.env.BASE_URL}images/1stconsole.png`,
  console: `${import.meta.env.BASE_URL}images/console.png`,
  concert: `${import.meta.env.BASE_URL}images/concert.png`,
  corporate: `${import.meta.env.BASE_URL}images/corporate.png`,
  equipment: `${import.meta.env.BASE_URL}images/equipments.png`,
}

const NAV = ['Home', 'About', 'Projects', 'Contact']

const I = ({ children, size = 28 }) => (
  <svg
    className="ico"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)


const ICONS = {
  wave: <I><path d="M4 14v4M9 9v14M14 4v24M19 8v16M24 11v10M29 14v4" /></I>,
  mixer: <I><path d="M8 4v24M16 4v24M24 4v24" /><rect x="5" y="9" width="6" height="4" /><rect x="13" y="18" width="6" height="4" /><rect x="21" y="8" width="6" height="4" /></I>,
  tuning: <I><rect x="3" y="4" width="26" height="18" rx="2" /><path d="M7 14h4l3-6 4 10 3-4h4M12 28h8M16 22v6" /></I>,
  monitor: <I><rect x="3" y="4" width="26" height="24" rx="3" /><circle cx="16" cy="14" r="4" /><path d="M8 24c2-4 14-4 16 0" /></I>,
  mic: <I><rect x="15" y="3" width="10" height="16" rx="5" transform="rotate(40 20 11)" /><path d="M14 17 5 28M9 12a10 10 0 0 0 11 11" /></I>,
  gear: <I><circle cx="16" cy="16" r="4.5" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" /><circle cx="16" cy="16" r="9" /></I>,
  people: <I><circle cx="12" cy="11" r="4.5" /><path d="M3 27c0-6 4-9 9-9s9 3 9 9" /><circle cx="23" cy="12" r="3.5" /><path d="M24 19c4 0 6 3 6 7" /></I>,
  case: <I><rect x="3" y="9" width="26" height="18" rx="3" /><path d="M11 9V5h10v4M3 17h26M14 17v3h4v-3" /></I>,
  shield: <I><path d="M16 3 5 7v8c0 7 5 12 11 14 6-2 11-7 11-14V7z" /><path d="m11 16 4 4 7-8" /></I>,
}

const Arrow = () => (
  <svg className="arrow" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

const SERVICES = [
  { icon: 'wave', title: ['Live Sound', '& PA Systems'] },
  { icon: 'mixer', title: ['Live Audio Mixing'] },
  { icon: 'tuning', title: ['System Tuning', '& Calibration'] },
  { icon: 'monitor', title: ['Stage Monitors & IEMs'] },
  { icon: 'mic', title: ['Wireless Mics', '& Coordination'] },
  { icon: 'gear', title: ['Audio Equipment', 'Rental'] },
]

const PROJECTS = [
  { img: IMG.concert, title: 'Live Concert Sounds', alt: 'Concert stage with red and blue lighting', gallery: 'concert' },
  
  { img: IMG.equipment, title: 'Tools & Equipment', alt: 'Professional audio equipment', gallery: 'equipment' },
]

/* Change these filenames to match the files in your folders.
   Supported images: jpg, jpeg, png, webp
   Supported videos: mp4, webm */

const HIGHLIGHTS = {
  concert: [
    {
      type: 'video',
      src: `${import.meta.env.BASE_URL}highlights/concert/cn1.mp4`,
      title: 'Anjujoseph live',
    },
  ],
  corporate: [],
  equipment: [
    {
      type: 'video',
      src: `${import.meta.env.BASE_URL}highlights/equipment/e1.mp4`,
      title: 'Quantum-225-DigiCo',
    },
  ],
}




const SOCIAL = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/shijuraj_on_board?dlrf=YmFoNjBwOWlwY3Q5',
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </>
    ),
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: '#',
    path: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" />
      </>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    path: (
      <>
        <path d="M5 9v10M5 5v.1M9 19v-6a3 3 0 0 1 6 0v6M9 10v9M15 19v-6a3 3 0 0 1 6 0v6" />
      </>
    ),
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/919995166463',
    path: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.5 2.5 2 4 4.5 5l1.2-1.2 2 1c-.2 1.5-1.2 2.2-2.5 2.1-3.8-.6-6.5-3.3-7-7-.1-1.3.6-2.3 2.1-2.5l1 2z" />
      </>
    ),
  },
];

const Logo = ({ className = '' }) => (
  <img className={`logo ${className}`} src={IMG.logo} alt="SNEHA PRO" />
)

const Eyebrow = ({ children }) => (
  <p className="eyebrow"><span />{children}</p>
)

const Cta = ({ children, href = '#contact' }) => (
  <a className="cta" href={href}>{children}<Arrow /></a>
)

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a href="#home" aria-label="SNEHA PRO home"><Logo /></a>
      <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
        {NAV.map((n, i) => (
          <a key={n} href={`#${n.toLowerCase()}`}
            className={i === 0 ? 'active' : ''}
            onClick={() => setOpen(false)}>{n}</a>
        ))}
      </nav>
      <button className="menu-btn" aria-label="Toggle menu"
        aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <svg width="20" height="20" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero-img" src={IMG.hero} alt="" />
      <svg className="trail" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 300C250 240 520 370 1000 210" />
        <path d="M0 335C280 280 560 395 1000 255" />
        <path d="M0 370C300 320 600 410 1000 300" />
      </svg>
      <div className="hero-copy">
        <Eyebrow>Professional Live Audio Engineering Solutions</Eyebrow>
        <h1>Powering Every <em>Moment.</em></h1>
        <p>From intimate gatherings to large-scale productions, we bring your vision to life with crystal-clear sound, precision mixing, and professional acoustic engineering.</p>
        <Cta>Get in Touch</Cta>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <Eyebrow>Our Services</Eyebrow>
      <h2>Complete Live Audio<br />Engineering <em>Solutions</em></h2>
      <p className="lede">We provide end-to-end solutions for events, productions and installations.</p>
      <div className="grid-3">
        {SERVICES.map(s => (
          <a key={s.icon} href="#contact" className="glass card service">
            <span className="red">{ICONS[s.icon]}</span>
            <span className="svc-title">{s.title.map((t, i) => <span key={i}>{t}</span>)}</span>
            <Arrow />
          </a>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="glass about">
        <img src={IMG.console} alt="Audio mixing console lit in red and blue" />
        <div className="about-copy">
          <Eyebrow>About Us</Eyebrow>
          <h2>Professional. Reliable. <em>Passionate.</em></h2>
          <p>Since day one, we’ve been delivering top-tier sound, production support, and technical expertise for every event. With a dedicated team, advanced equipment, and industry experience, we make every moment unforgettable.</p>
          <Cta href="#projects">Learn More</Cta>
        </div>
      </div>
    </section>
  )
}

function Projects({ onOpenHighlights }) {
  const track = useRef(null)

  const scroll = direction => {
    track.current?.scrollBy({
      left: direction * track.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section" id="projects">
      <Eyebrow>Our Projects</Eyebrow>
      <h2>Events We’ve <em>Powered</em></h2>
      <p className="lede">From live concerts to corporate events, we deliver seamless audio experiences that make an impact.</p>
      <div className="carousel">
        <button className="round prev" aria-label="Previous projects" onClick={() => scroll(-1)}>‹</button>
        <div className="track" ref={track}>
          {PROJECTS.map(project => (
            <button key={project.title} type="button"
              className="glass project project-button"
              onClick={() => onOpenHighlights(project.gallery)}
              aria-label={`Open ${project.title} highlights`}>
              <img src={project.img} alt={project.alt} />
              <span className="proj-bar">{project.title}<Arrow /></span>
            </button>
          ))}
        </div>
        <button className="round next" aria-label="Next projects" onClick={() => scroll(1)}>›</button>
      </div>
    </section>
  )
}

function HighlightsViewer({ galleryKey, onClose }) {
  const items = HIGHLIGHTS[galleryKey] || []
  const [index, setIndex] = useState(0)
  const stageRef = useRef(null)
  const item = items[index]

  const move = direction => {
    setIndex(current => (current + direction + items.length) % items.length)
  }

  useEffect(() => {
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKey = event => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, items.length])

  if (!item) return null

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await stageRef.current?.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Fullscreen unavailable:', error)
    }
  }

  const titles = {
    concert: 'LIVE CONCERT SOUNDS',
    corporate: 'CORPORATE EVENTS',
    equipment: 'TOOLS & EQUIPMENT',
  }

  return (
    <div className="highlights-overlay">
      <header className="highlights-header">
        <span className="highlights-title">{titles[galleryKey]}</span>
        <div className="highlights-actions">
          
          <button className="highlights-close" onClick={onClose}
            aria-label="Close highlights">×</button>
        </div>
      </header>

      <div className="highlights-progress">
        {items.map((media, i) => (
          <span key={media.src} className={i === index ? 'current' : ''} />
        ))}
      </div>

      <main className="highlights-stage" ref={stageRef}>
        <div className="highlights-media" key={item.src}>
          {item.type === 'video' ? (
            <video src={item.src} controls autoPlay playsInline preload="metadata" />
          ) : (
            <img src={item.src} alt={item.title} />
          )}
        </div>

        {items.length > 1 && (
          <>
            <button className="highlights-arrow prev" onClick={() => move(-1)}
              aria-label="Previous highlight">‹</button>
            <button className="highlights-arrow next" onClick={() => move(1)}
              aria-label="Next highlight">›</button>
          </>
        )}
      </main>
    </div>
  )
}

const STATS = [
  { i: "01", icon: "audio", n: "Live Sound", l: "Professional Audio" },
  { i: "02", icon: "users", n: "Events", l: "Concerts & Productions" },
  { i: "03", icon: "speaker", n: "PA Systems", l: "Quality Sound Solutions" },
  { i: "04", icon: "headphones", n: "Audio", l: "Expert Engineering" },
];

const Stats = () => (
  <section className="section tight" aria-label="Statistics">
    <ul className="glass stats">
      {STATS.map(s => (
        <li key={s.l}>
          <span className="red">{ICONS[s.icon]}</span>
          <div><strong>{s.n}</strong><small>{s.l}</small></div>
        </li>
      ))}
    </ul>
  </section>
)

const Contact = () => (
  <section className="section tight" id="contact">
    <div className="glass contact">
      <Logo className="contact-logo" />
      <div className="contact-copy">
        <Eyebrow>Let’s Build Your Sound</Eyebrow>
        <h2>Get in <em>Touch</em></h2>
        <p>For bookings, enquiries, or a free consultation.</p>
      </div>
      <a className="round big" href="mailto:" aria-label="Get in touch"><Arrow /></a>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <Logo className="footer-logo" />
    <div className="socials">
      {SOCIAL.map(s => (
        <a key={s.key} className={`soc ${s.key}`} href={s.href}
          aria-label={s.label} target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {s.path}
          </svg>
        </a>
      ))}
    </div>
    <nav aria-label="Footer">{NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
    <p className="tag">Live Sound • Studio • Engineering</p>
    <p className="copy">© 2025 SNEHA PRO. All rights reserved.</p>
  </footer>
)

export default function App() {
  const [activeGallery, setActiveGallery] = useState(null)

  return (
    <div className="page">
      <div className="swooshes" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map(n => <i key={n} className={`sw sw${n}`} />)}
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects onOpenHighlights={setActiveGallery} />
        <Stats />
        <Contact />
      </main>
      <Footer />

      {activeGallery && (
        <HighlightsViewer
          key={activeGallery}
          galleryKey={activeGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </div>
  )
}
