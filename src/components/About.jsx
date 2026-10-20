import { ArrowRight } from 'lucide-react'

export default function About({ onLearnMore }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <article className="glass-panel about-panel">
          <figure className="about-media">
            <img
              src="/images/about-console.jpg"
              alt="Close-up of a live mixing console with red and blue channel lights"
              width="1400"
              height="700"
            />
          </figure>
          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>
              Professional. Reliable.
              <span> Passionate.</span>
            </h2>
            <p>
              SNEHA PRO Live Audio Engineering delivers top-tier sound, production support, and
              technical expertise for every event. With a dedicated team, advanced equipment, and
              industry experience, we make every moment unforgettable.
            </p>
            <button type="button" className="btn btn-primary" onClick={onLearnMore}>
              Learn More
              <ArrowRight size={16} />
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
