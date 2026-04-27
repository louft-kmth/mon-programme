'use client'
import { useState, useMemo } from 'react'
import { Dumbbell, UtensilsCrossed, BarChart3, RotateCcw } from 'lucide-react'
import { useLocalStorage } from '@/lib/use-local-storage'
import { getAllWeeks } from '@/lib/program-data'
import WeekSelector from '@/components/WeekSelector'
import PhaseBanner from '@/components/PhaseBanner'
import DayCards from '@/components/DayCards'
import ExercisePanel from '@/components/ExercisePanel'
import ProgressBar from '@/components/ProgressBar'
import NutritionTab from '@/components/NutritionTab'
import StatsOverview from '@/components/StatsOverview'

const TABS = [
  { id: 'sport', label: 'Sport', icon: Dumbbell },
  { id: 'nutrition', label: 'Alimentation', icon: UtensilsCrossed },
  { id: 'stats', label: 'Stats', icon: BarChart3 },
]

export default function HomePage() {
  const [tab, setTab] = useState('sport')
  const [currentWeek, setCurrentWeek] = useState(0)
  const [currentDay, setCurrentDay] = useState(0)
  const [checked, setChecked, loaded] = useLocalStorage('prog-v2-checked', {})

  const weeks = useMemo(() => getAllWeeks(), [])
  const week = weeks[currentWeek]
  const day = week.days[currentDay]

  const toggleExercise = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  const resetAll = () => { if (confirm('Remettre toute la progression à zéro ?')) setChecked({}) }

  const checkedCounts = useMemo(() => {
    const counts = {}
    week.days.forEach((d, di) => {
      let total = 0, done = 0, idx = 0
      d.groups.forEach(g => { g.exercises.forEach(() => { idx++; total++; if (checked[`w${currentWeek}d${di}e${idx}`]) done++ }) })
      counts[di] = { total, done }
    })
    return counts
  }, [week, currentWeek, checked])

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
              <p className="text-xs text-ink-3">8 semaines · objectif 55-60kg</p>
            </div>
            <button onClick={resetAll} className="p-2 rounded-lg hover:bg-bg-2 text-ink-3 hover:text-ink transition-colors" title="Remettre à zéro">
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
            <WeekSelector currentWeek={currentWeek} onSelect={(i) => { setCurrentWeek(i); setCurrentDay(0) }} />
            <PhaseBanner weekIndex={currentWeek} />
            <DayCards days={week.days} currentDay={currentDay} onSelect={setCurrentDay} checkedCounts={checkedCounts} />
            <ExercisePanel day={day} weekIndex={currentWeek} dayIndex={currentDay} checked={checked} onToggle={toggleExercise} />
            <ProgressBar weekIndex={currentWeek} checkedCounts={checkedCounts} />
          </>
        )}
        {tab === 'nutrition' && <NutritionTab />}
        {tab === 'stats' && <StatsOverview checked={checked} />}
      </main>
      <div className="h-8" />
    </div>
  )
}
