'use client'
import { Check, Shield, Flame } from 'lucide-react'

export default function ExercisePanel({ day, weekIndex, dayIndex, checked, onToggle }) {
  let globalIdx = 0
  const isSport = day.type !== 'repos'

  return (
    <div className="bg-white rounded-card border border-bg-3/60 overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-lg font-semibold font-display">{day.name} — {day.title}</h3>
        <p className="text-sm text-ink-3 mt-0.5">Semaine {weekIndex + 1} — Programme congé</p>
      </div>

      {isSport && (
        <div className="mx-5 mb-3 flex items-start gap-2.5 bg-coral-light rounded-lg p-3">
          <Flame size={16} className="text-coral mt-0.5 flex-shrink-0" />
          <p className="text-sm text-coral-dark">
            <span className="font-medium">Focus ventre :</span> rentre le ventre + expire sur chaque effort. Périnée serré.
          </p>
        </div>
      )}

      <div className="px-5 pb-5">
        {day.groups.map((group, gi) => (
          <div key={gi} className="mb-4 last:mb-0">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-2">{group.title}</h4>
            <div className="space-y-0">
              {group.exercises.map((ex, ei) => {
                globalIdx++
                const key = `w${weekIndex}d${dayIndex}e${globalIdx}`
                const isDone = !!checked[key]
                return (
                  <button key={ei} onClick={() => onToggle(key)}
                    className="w-full flex items-center gap-3 py-2.5 border-b border-bg-2 last:border-0 text-left group">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all
                      ${isDone ? 'bg-teal check-pop' : 'border-2 border-bg-3 group-hover:border-ink-3'}`}>
                      {isDone && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-sm flex-1 ${isDone ? 'line-through text-ink-3' : 'text-ink'}`}>{ex.name}</span>
                    <span className="text-sm text-ink-3 font-medium tabular-nums">{ex.detail}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
