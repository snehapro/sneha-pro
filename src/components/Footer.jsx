import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="socials">
          <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>

        <nav aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer-tag">Live Sound • Studio • Engineering</p>
      </div>
    </footer>
  )
}
