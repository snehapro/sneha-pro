import { ArrowRight } from 'lucide-react'
import Logo from './Logo'

export default function ContactBanner({ onContact }) {
  return (
    <section className="contact-banner" id="contact">
      <div className="container">
        <button type="button" className="glass-panel cta-panel" onClick={onContact}>
          <Logo />
          <div className="cta-copy">
            <p className="eyebrow">Let&apos;s build your sound</p>
            <h2>
              Get in <span>Touch</span>
            </h2>
            <p>For bookings, inquiries, or a free consultation.</p>
          </div>
          <span className="cta-orb" aria-hidden="true">
            <ArrowRight size={22} />
          </span>
        </button>
      </div>
    </section>
  )
}
