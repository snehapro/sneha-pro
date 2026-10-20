import { ArrowRight } from 'lucide-react'
import NeonWaves from './NeonWaves'

export default function Hero({ onContact }) {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Professional Live Audio Engineering Solutions</p>
          <h1>
            Powering Every
            <span> Moment.</span>
          </h1>
          <p className="lede">
            From intimate gatherings to large-scale productions, we bring your vision to life with
            crystal-clear sound, precision mixing, and professional acoustic engineering.
          </p>
          <button type="button" className="btn btn-primary" onClick={onContact}>
            Get in Touch
            <ArrowRight size={16} />
          </button>
        </div>

        <figure className="hero-media">
          <img
            src="/images/hero-stage.jpg"
            alt="Live concert with hanging line-array speakers, red stage lighting, audience silhouettes, and a mixing console in the foreground"
            width="1400"
            height="1253"
          />
        </figure>
      </div>
      <NeonWaves variant="hero" />
    </section>
  )
}
