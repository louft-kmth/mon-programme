'use client'
import { PHASES } from '@/lib/program-data'

const colors = {
  teal: 'bg-teal-light text-teal-dark border-teal',
  sky: 'bg-sky-light text-sky-dark border-sky',
  amber: 'bg-amber-light text-amber-dark border-amber',
  accent: 'bg-accent-light text-accent-dark border-accent',
}

export default function WeekSelector({ currentWeek, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {Array.from({ length: 8 }, (_, i) => {
        const phase = PHASES[i <= 1 ? 0 : i <= 3 ? 1 : i <= 5 ? 2 : 3]
        const active = i === currentWeek
        return (
          <button key={i} onClick={() => onSelect(i)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all
              ${active ? `${colors[phase.color]} border-2 shadow-sm` : 'bg-bg-2 text-ink-2 border border-transparent hover:bg-bg-3'}`}>
            S{i + 1}
          </button>
        )
      })}
    </div>
  )
}
