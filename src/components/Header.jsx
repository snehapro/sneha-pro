import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data'

export default function Header({ onContact }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  const close = () => setOpen(false)

  const handleNav = (href) => (event) => {
    if (href === '#contact') {
      event.preventDefault()
      close()
      onContact()
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    close()
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={close}>
        <Logo priority />
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'is-active' : ''}
            onClick={handleNav(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
        <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <div className={`mobile-nav ${open ? 'is-open' : ''}`} id="mobile-nav">
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNav(link.href)}>
              {link.label}
            </a>
          ))}
          <button type="button" className="btn btn-primary" onClick={() => { close(); onContact(); }}>
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  )
}
