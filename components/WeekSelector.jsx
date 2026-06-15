'use client'

export default function WeekSelector({ currentWeek, onSelect }) {
  return (
    <div className="flex gap-2 mb-6">
      {[0, 1].map(i => (
        <button key={i} onClick={() => onSelect(i)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all
            ${i === currentWeek
              ? 'bg-coral-light text-coral-dark border-2 border-coral/30 shadow-sm'
              : 'bg-bg-2 text-ink-2 border border-transparent hover:bg-bg-3'}`}>
          Semaine {i + 1}
        </button>
      ))}
    </div>
  )
}
