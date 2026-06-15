'use client'
import { VACUUM_GUIDE } from '@/lib/program-data'
import { Shield, CheckCircle } from 'lucide-react'

export default function VacuumTab() {
  return (
    <div>
      <div className="bg-accent-light rounded-card border border-accent/20 p-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Shield size={16} className="text-accent" />
          <h4 className="font-display font-semibold text-accent-dark">{VACUUM_GUIDE.title}</h4>
        </div>
        <p className="text-sm text-accent-dark/70 mb-4">
          Le vacuum travaille le transverse, le muscle profond qui fait office de gaine naturelle.
          Après 4 grossesses c'est LE muscle à reconstruire pour un ventre plat. Les crunchs ne le ciblent pas, le vacuum oui.
        </p>

        <h5 className="text-xs font-semibold uppercase tracking-wider text-accent-dark/50 mb-3">Les 4 positions</h5>
        <div className="space-y-3 mb-5">
          {VACUUM_GUIDE.positions.map((pos, i) => (
            <div key={i} className="bg-white/60 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-accent-dark">{i + 1}. {pos.name}</span>
              </div>
              <p className="text-sm text-accent-dark/70">{pos.desc}</p>
            </div>
          ))}
        </div>

        <h5 className="text-xs font-semibold uppercase tracking-wider text-accent-dark/50 mb-3">Les règles</h5>
        <div className="space-y-2">
          {VACUUM_GUIDE.rules.map((rule, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-accent flex-shrink-0" />
              <span className="text-sm text-accent-dark">{rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-5">
        <h4 className="font-display font-semibold mb-3">Programme vacuum 2 semaines</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-bg-2 rounded-lg">
            <span className="text-sm font-medium">Semaine 1</span>
            <span className="text-sm text-ink-2">5 × 15 secondes, 2 fois/jour</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-bg-2 rounded-lg">
            <span className="text-sm font-medium">Semaine 2</span>
            <span className="text-sm text-ink-2">5 × 20 secondes, 2 fois/jour</span>
          </div>
        </div>
        <p className="text-xs text-ink-3 mt-3">
          Matin au réveil + soir avant de dormir. Peut aussi se faire dans le canapé, en voiture, n'importe où.
        </p>
      </div>
    </div>
  )
}
