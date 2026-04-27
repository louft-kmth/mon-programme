'use client'
import { useState } from 'react'
import { ShoppingCart, Utensils, Train, Home, ChevronDown, ChevronUp, Apple, Scale } from 'lucide-react'
import { NUTRITION_RULES, MEALS_HOME, MEALS_CHARTRES, SHOPPING_LIST, SNACKS, NUTRITION_AVOID } from '@/lib/program-data'

function MealCard({ meal }) {
  const [openOption, setOpenOption] = useState(0)
  return (
    <div className="bg-white rounded-card border border-bg-3/60 overflow-hidden">
      <div className="px-5 pt-4 pb-3 flex items-center gap-2">
        <Utensils size={14} className="text-ink-3" />
        <h4 className="font-semibold text-sm">{meal.title}</h4>
      </div>
      {meal.note && (
        <div className="mx-5 mb-3 bg-amber-light rounded-lg p-3">
          <p className="text-sm text-amber-dark">{meal.note}</p>
        </div>
      )}
      <div className="px-5 pb-4">
        {meal.options.map((opt, i) => (
          <div key={i} className="mb-2 last:mb-0">
            <button onClick={() => setOpenOption(openOption === i ? -1 : i)}
              className="w-full flex items-center justify-between py-2 text-left">
              <span className="text-sm font-medium text-ink">{opt.name}</span>
              {openOption === i ? <ChevronUp size={14} className="text-ink-3" /> : <ChevronDown size={14} className="text-ink-3" />}
            </button>
            {openOption === i && (
              <div className="pl-4 pb-2">
                <ul className="space-y-1 mb-2">
                  {opt.items.map((item, j) => (
                    <li key={j} className="text-sm text-ink-2 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-3 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {opt.grammage && (
                  <div className="flex items-center gap-1.5 mt-2 bg-bg-2 rounded-lg px-3 py-1.5">
                    <Scale size={12} className="text-ink-3" />
                    <span className="text-xs text-ink-2">{opt.grammage}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NutritionTab() {
  const [dayType, setDayType] = useState('home')
  const [showList, setShowList] = useState(false)
  const meals = dayType === 'home' ? MEALS_HOME : MEALS_CHARTRES

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {NUTRITION_RULES.map((rule, i) => (
          <div key={i} className="bg-white rounded-card border border-bg-3/60 p-3 flex items-start gap-2.5">
            <span className="text-base">{rule.emoji}</span>
            <p className="text-sm text-ink-2">{rule.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-5">
        <button onClick={() => setDayType('home')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${dayType === 'home' ? 'bg-teal-light text-teal-dark border-2 border-teal/30' : 'bg-bg-2 text-ink-2 border border-transparent'}`}>
          <Home size={14} /> Jours maison
        </button>
        <button onClick={() => setDayType('chartres')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${dayType === 'chartres' ? 'bg-amber-light text-amber-dark border-2 border-amber/30' : 'bg-bg-2 text-ink-2 border border-transparent'}`}>
          <Train size={14} /> Jours Chartres
        </button>
      </div>

      <div className="space-y-3 mb-5">
        <MealCard meal={meals.matin} />
        <MealCard meal={meals.midi} />
        <MealCard meal={meals.soir} />
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-4 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Apple size={16} className="text-ink-3" />
          <h4 className="font-semibold text-sm">Collation (si faim)</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {SNACKS.map((s, i) => (
            <span key={i} className="text-sm bg-teal-light text-teal-dark px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-card border border-bg-3/60 p-4 mb-5">
        <h4 className="font-semibold text-sm mb-3">À limiter (pas interdit)</h4>
        <div className="space-y-1.5">
          {NUTRITION_AVOID.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-ink-2">
              <span className="text-coral text-xs">✕</span> {item}
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => setShowList(!showList)}
        className="w-full flex items-center justify-center gap-2 bg-accent-light text-accent-dark font-medium text-sm py-3 rounded-card border-2 border-accent/20 hover:border-accent/40 transition-all mb-3">
        <ShoppingCart size={16} />
        {showList ? 'Masquer la liste de courses' : 'Liste de courses (1 semaine)'}
      </button>

      {showList && (
        <div className="bg-white rounded-card border border-bg-3/60 p-5 space-y-4">
          <h4 className="font-display font-semibold text-lg">Liste de courses</h4>
          {SHOPPING_LIST.map((cat, i) => (
            <div key={i}>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-2">{cat.category}</h5>
              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-sm text-ink-2 flex items-start gap-2">
                    <span className="w-4 h-4 rounded border border-bg-3 mt-0.5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
