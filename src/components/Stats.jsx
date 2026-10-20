import { AudioLines, Shield, Speaker, Users } from 'lucide-react'
import { stats } from '../data'

const icons = { AudioLines, Users, Speaker, Shield }

export default function Stats() {
  return (
    <section className="stats" aria-label="Company snapshot">
      <div className="container stats-grid">
        {stats.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div className="stat" key={item.label}>
              <span className="icon-wrap" aria-hidden="true">
                <Icon size={18} />
              </span>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
