import { Activity, ArrowRight, Headphones, Mic, Settings, SlidersVertical, Speaker } from 'lucide-react'
import { services } from '../data'

const icons = {
  Speaker,
  SlidersVertical,
  Activity,
  Headphones,
  Mic,
  Settings,
}

export default function Services({ onContact }) {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="eyebrow with-rule">Our Services</p>
        <h2>
          Complete Live Audio
          <br />
          Engineering <span>Solutions</span>
        </h2>
        <p className="section-copy">
          We provide end-to-end solutions for events, productions and installations.
        </p>

        <ul className="service-grid">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <li key={service.id}>
                <button
                  type="button"
                  className="glass-card service-card"
                  onClick={() => onContact(service.title)}
                >
                  <span className="icon-wrap" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="service-text">
                    <strong>{service.title}</strong>
                    <small>{service.copy}</small>
                  </span>
                  <ArrowRight className="card-arrow" size={16} aria-hidden="true" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
