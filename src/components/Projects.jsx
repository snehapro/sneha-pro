import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  const scroller = useRef(null)

  const move = (direction) => {
    const node = scroller.current
    if (!node) return
    const amount = Math.min(node.clientWidth * 0.86, 340)
    const max = node.scrollWidth - node.clientWidth
    const next = node.scrollLeft + direction * amount
    if (next > max + 8) node.scrollTo({ left: 0, behavior: 'smooth' })
    else if (next < -8) node.scrollTo({ left: max, behavior: 'smooth' })
    else node.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="eyebrow with-rule">Our Projects</p>
        <h2>
          Events We&apos;ve <span>Powered</span>
        </h2>
        <p className="section-copy">
          From live concerts to corporate events, we deliver seamless audio experiences that make an
          impact.
        </p>
      </div>

      <div className="projects-row">
        <button type="button" className="nav-orb" onClick={() => move(-1)} aria-label="Previous project">
          <ChevronLeft size={18} />
        </button>

        <ul className="project-scroller" ref={scroller}>
          {projects.map((project) => (
            <li key={project.id}>
              <article className="project-card">
                <img src={project.image} alt={project.alt} width="1200" height="657" />
                <div className="project-meta">
                  <h3>{project.title}</h3>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <button type="button" className="nav-orb" onClick={() => move(1)} aria-label="Next project">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
