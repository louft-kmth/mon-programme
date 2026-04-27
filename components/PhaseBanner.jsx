'use client'
import { PHASES } from '@/lib/program-data'

const bg = { teal: 'bg-teal-light border-teal/20', sky: 'bg-sky-light border-sky/20', amber: 'bg-amber-light border-amber/20', accent: 'bg-accent-light border-accent/20' }
const txt = { teal: 'text-teal-dark', sky: 'text-sky-dark', amber: 'text-amber-dark', accent: 'text-accent-dark' }

export default function PhaseBanner({ weekIndex }) {
  const phase = PHASES[weekIndex <= 1 ? 0 : weekIndex <= 3 ? 1 : weekIndex <= 5 ? 2 : 3]
  return (
    <div className={`rounded-card border p-4 mb-5 ${bg[phase.color]}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-xs font-semibold uppercase tracking-wider ${txt[phase.color]}`}>
          Phase {phase.id + 1} — {phase.name}
        </span>
        <span className={`text-xs ${txt[phase.color]} opacity-60`}>Sem. {phase.weeks[0]}–{phase.weeks[1]}</span>
      </div>
      <p className={`text-sm ${txt[phase.color]} opacity-80`}>{phase.desc}</p>
    </div>
  )
}
