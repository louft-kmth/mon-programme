'use client'
import { Check, Shield, Train } from 'lucide-react'

export default function ExercisePanel({ day, dayIndex, mode, checked, onToggle }) {
  let globalIdx = 0
  const isSport = day.type !== 'repos' && day.type !== 'trajet'

  return (
    <div className="bg-white rounded-card border border-bg-3/60 overflow-hidden">
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-lg font-semibold font-display">{day.name} — {day.title}</h3>
        <p className="text-sm text-ink-3 mt-0.5">{day.duration}</p>
      </div>

      {day.type === 'trajet' && (
        <div className="mx-5 mb-3 flex items-start gap-2.5 bg-amber-light rounded-lg p-3">
          <Train size={16} className="text-amber mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-dark">
            Jour Chartres — 6h de trajet. Tes pas comptent comme activité. Juste le vacuum le soir, rien d'autre.
          </p>
        </div>
      )}

      {isSport && (
        <div className="mx-5 mb-3 flex items-start gap-2.5 bg-accent-light rounded-lg p-3">
          <Shield size={16} className="text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-accent-dark">
            <span className="font-medium">Règle périnée :</span> expire sur chaque effort, rentre le ventre. Pas d'apnée sous charge.
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
                const key = `${mode}d${dayIndex}e${globalIdx}`
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
