'use client'
import { getAllWeeks, PERINEE_ROUTINE } from '@/lib/program-data'
import { Trophy, Flame, Target, TrendingUp, Shield } from 'lucide-react'

export default function StatsOverview({ checked }) {
  const weeks = getAllWeeks()
  const weekStats = weeks.map((week, wi) => {
    let total = 0, done = 0
    week.days.forEach((day, di) => {
      let idx = 0
      day.groups.forEach(g => {
        g.exercises.forEach(() => { idx++; total++; if (checked[`w${wi}d${di}e${idx}`]) done++ })
      })
    })
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  })

  const totalDone = weekStats.reduce((s, w) => s + w.done, 0)
  const totalAll = weekStats.reduce((s, w) => s + w.total, 0)
  const globalPct = totalAll > 0 ? Math.round((totalDone / totalAll) * 100) : 0

  let streak = 0
  for (const ws of weekStats) { if (ws.pct >= 50) streak++; else streak = 0 }

  const bestWeek = weekStats.reduce((best, w, i) => w.pct > best.pct ? { pct: w.pct, idx: i } : best, { pct: 0, idx: 0 })

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {[
          { icon: Target, color: 'text-accent', label: 'Progression globale', value: `${globalPct}%`, sub: `${totalDone}/${totalAll} exercices` },
          { icon: Flame, color: 'text-coral', label: 'Série en cours', value: `${streak}`, sub: `semaine${streak > 1 ? 's' : ''} d'affilée` },
          { icon: Trophy, color: 'text-amber', label: 'Meilleure semaine', value: `S${bestWeek.idx + 1}`, sub: `${bestWeek.pct}% complété` },
          { icon: TrendingUp, color: 'text-teal', label: 'Objectif', value: '55-60kg', sub: 'depuis 90kg' },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-card border border-bg-3/60 p-4">
            <div className="flex items-center gap-2 mb-2">
              <card.icon size={16} className={card.color} />
              <span className="text-xs text-ink-3 font-medium">{card.label}</span>
            </div>
            <p className={`text-2xl font-bold font-display ${card.color}`}>{card.value}</p>
            <p className="text-xs text-ink-3 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-5 mb-5">
        <h4 className="font-display font-semibold mb-4">Progression par semaine</h4>
        <div className="space-y-3">
          {weekStats.map((ws, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-sm font-medium text-ink-3 w-6">S{i + 1}</span>
              <div className="flex-1 h-3 bg-bg-2 rounded-full overflow-hidden">
                <div className="h-full rounded-full progress-animate"
                  style={{ width: `${ws.pct}%`, background: ws.pct >= 80 ? '#1D9E75' : ws.pct >= 50 ? '#6C63AC' : ws.pct > 0 ? '#BA7517' : '#E6E3DA' }} />
              </div>
              <span className="text-xs font-medium text-ink-3 w-8 text-right tabular-nums">{ws.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Périnée routine reminder */}
      <div className="bg-accent-light rounded-card border border-accent/20 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Shield size={16} className="text-accent" />
          <h4 className="font-display font-semibold text-accent-dark">{PERINEE_ROUTINE.title}</h4>
        </div>
        <p className="text-sm text-accent-dark/70 mb-3">{PERINEE_ROUTINE.note}</p>
        <div className="space-y-2.5">
          {PERINEE_ROUTINE.exercises.map((ex, i) => (
            <div key={i} className="bg-white/60 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-accent-dark">{ex.name}</span>
                <span className="text-xs text-accent-dark/60">{ex.detail}</span>
              </div>
              <p className="text-xs text-accent-dark/50">{ex.tip}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-accent-dark mt-3">{PERINEE_ROUTINE.important}</p>
      </div>
    </div>
  )
}
