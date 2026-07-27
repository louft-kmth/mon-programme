'use client'
import { VACUUM_GUIDE } from '@/lib/program-data'
import { Wind, CheckCircle } from 'lucide-react'

export default function VacuumTab() {
  return (
    <div>
      <div className="bg-accent-light rounded-card border border-accent/20 p-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Wind size={16} className="text-accent" />
          <h4 className="font-display font-semibold text-accent-dark">Le vacuum</h4>
        </div>
        <p className="text-sm text-accent-dark/70">{VACUUM_GUIDE.intro}</p>
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-5 mb-5">
        <h4 className="font-display font-semibold mb-4">Les 4 positions</h4>
        <div className="space-y-3">
          {VACUUM_GUIDE.positions.map((pos, i) => (
            <div key={i} className="bg-bg-2 rounded-lg p-4">
              <div className="text-sm font-semibold mb-1">{i + 1}. {pos.name}</div>
              <p className="text-sm text-ink-2">{pos.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-5">
        <h4 className="font-display font-semibold mb-3">Les règles</h4>
        <div className="space-y-2">
          {VACUUM_GUIDE.rules.map((rule, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-accent flex-shrink-0" />
              <span className="text-sm text-ink-2">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
