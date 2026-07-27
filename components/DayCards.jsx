'use client'
import { DAY_TYPES } from '@/lib/program-data'

export default function DayCards({ days, currentDay, onSelect, checkedCounts }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-5">
      {days.map((day, i) => {
        const style = DAY_TYPES[day.type]
        const active = i === currentDay
        const { done, total } = checkedCounts[i] || { done: 0, total: 0 }
        const allDone = total > 0 && done === total
        return (
          <button key={i} onClick={() => onSelect(i)}
            className={`card-hover text-left rounded-card p-3 border transition-all
              ${active ? 'border-accent/40 bg-white shadow-sm ring-1 ring-accent/10' : 'border-transparent bg-white/60 hover:bg-white'}`}>
            <div className="text-[11px] text-ink-3 mb-0.5">{day.name}</div>
            <div className="text-sm font-medium mb-1 leading-tight">{day.title}</div>
            <div className="text-[11px] text-ink-3 mb-2">{day.duration}</div>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                {style.label}
              </span>
              {total > 0 && (
                <span className={`text-[11px] font-medium ${allDone ? 'text-teal' : 'text-ink-3'}`}>{done}/{total}</span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
