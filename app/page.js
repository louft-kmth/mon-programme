'use client'
import { useState, useMemo } from 'react'
import { Dumbbell, UtensilsCrossed, Wind, RotateCcw } from 'lucide-react'
import { useLocalStorage } from '@/lib/use-local-storage'
import { getDays, WEEK_MODES } from '@/lib/program-data'
import DayCards from '@/components/DayCards'
import ExercisePanel from '@/components/ExercisePanel'
import NutritionTab from '@/components/NutritionTab'
import VacuumTab from '@/components/VacuumTab'

const TABS = [
  { id: 'sport', label: 'Sport', icon: Dumbbell },
  { id: 'nutrition', label: 'Alimentation', icon: UtensilsCrossed },
  { id: 'vacuum', label: 'Vacuum', icon: Wind },
]

const modeStyles = {
  amber: 'bg-amber-light text-amber-dark border-amber/30',
  teal: 'bg-teal-light text-teal-dark border-teal/30',
}

export default function HomePage() {
  const [tab, setTab] = useState('sport')
  const [mode, setMode] = useLocalStorage('prog-mode', 'transition')
  const [currentDay, setCurrentDay] = useState(0)
  const [checked, setChecked, loaded] = useLocalStorage('prog-v4-checked', {})

  const days = useMemo(() => getDays(mode), [mode])
  const day = days[currentDay]
  const modeInfo = WEEK_MODES.find(m => m.id === mode) || WEEK_MODES[0]

  const toggleExercise = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  const resetAll = () => { if (confirm('Décocher tous les exercices de la semaine ?')) setChecked({}) }

  const checkedCounts = useMemo(() => {
    const counts = {}
    days.forEach((d, di) => {
      let total = 0, done = 0, idx = 0
      d.groups.forEach(g => { g.exercises.forEach(() => { idx++; total++; if (checked[`${mode}d${di}e${idx}`]) done++ }) })
      counts[di] = { total, done }
    })
    return counts
  }, [days, mode, checked])

  const weekTotal = Object.values(checkedCounts).reduce((s, c) => s + c.total, 0)
  const weekDone = Object.values(checkedCounts).reduce((s, c) => s + c.done, 0)
  const pct = weekTotal ? Math.round(weekDone / weekTotal * 100) : 0

  if (!loaded) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-30 bg-bg/80 backdrop-blur-md border-b border-bg-3/40">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-display text-xl font-semibold">Mon programme</h1>
              <p className="text-xs text-ink-3">4 séances / semaine</p>
            </div>
            <button onClick={resetAll} className="p-2 rounded-lg hover:bg-bg-2 text-ink-3 hover:text-ink transition-colors" title="Décocher tout">
              <RotateCcw size={16} />
            </button>
          </div>
          <div className="flex gap-1">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${tab === t.id ? 'bg-white shadow-sm text-ink' : 'text-ink-3 hover:text-ink-2'}`}>
                <t.icon size={14} /> {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-5">
        {tab === 'sport' && (
          <>
            <div className="flex gap-2 mb-4">
              {WEEK_MODES.map(m => (
                <button key={m.id} onClick={() => { setMode(m.id); setCurrentDay(0) }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all
                    ${mode === m.id ? modeStyles[m.color] : 'bg-bg-2 text-ink-2 border-transparent'}`}>
                  {m.name}
                </button>
              ))}
            </div>

            <div className={`rounded-card border p-4 mb-5 ${modeStyles[modeInfo.color]}`}>
              <p className="text-sm opacity-90">{modeInfo.desc}</p>
            </div>

            <DayCards days={days} currentDay={currentDay} onSelect={setCurrentDay} checkedCounts={checkedCounts} />
            <ExercisePanel day={day} dayIndex={currentDay} mode={mode} checked={checked} onToggle={toggleExercise} />

            <div className="bg-white rounded-card border border-bg-3/60 p-4 mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progression de la semaine</span>
                <span className="text-sm font-semibold text-accent tabular-nums">{pct}%</span>
              </div>
              <div className="h-2 bg-bg-2 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full progress-animate" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs text-ink-3 mt-2">{weekDone}/{weekTotal} exercices — décoche tout en fin de semaine avec le bouton ↺</p>
            </div>
          </>
        )}
        {tab === 'nutrition' && <NutritionTab />}
        {tab === 'vacuum' && <VacuumTab />}
      </main>
      <div className="h-8" />
    </div>
  )
}
