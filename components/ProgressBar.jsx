'use client'

export default function ProgressBar({ weekIndex, checkedCounts }) {
  let total = 0, done = 0
  Object.values(checkedCounts).forEach(c => { total += c.total; done += c.done })
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className="bg-white rounded-card border border-bg-3/60 p-4 mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Semaine {weekIndex + 1}</span>
        <span className="text-sm font-semibold text-coral tabular-nums">{pct}%</span>
      </div>
      <div className="h-2 bg-bg-2 rounded-full overflow-hidden">
        <div className="h-full bg-coral rounded-full progress-animate" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-ink-3 mt-2">{done}/{total} exercices complétés</p>
    </div>
  )
}
