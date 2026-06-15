'use client'
import { useState } from 'react'
import { ShoppingCart, Utensils, ChevronDown, ChevronUp, Apple, Scale } from 'lucide-react'
import { NUTRITION_RULES, MEALS, SHOPPING_LIST, SNACKS } from '@/lib/program-data'

function MealCard({ meal }) {
  const [openOption, setOpenOption] = useState(0)
  return (
    <div className="bg-white rounded-card border border-bg-3/60 overflow-hidden">
      <div className="px-5 pt-4 pb-3 flex items-center gap-2">
        <Utensils size={14} className="text-ink-3" />
        <h4 className="font-semibold text-sm">{meal.title}</h4>
      </div>
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
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-3 mt-1.5 flex-shrink-0" /> {item}
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
  const [showList, setShowList] = useState(false)

  return (
    <div>
      <div className="bg-coral-light rounded-card border border-coral/20 p-4 mb-5">
        <p className="text-sm text-coral-dark font-medium">
          🔥 En congé tu contrôles tout : pas de cantine, pas de restos forcés. C'est LE moment pour être irréprochable sur l'alimentation.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {NUTRITION_RULES.map((rule, i) => (
          <div key={i} className="bg-white rounded-card border border-bg-3/60 p-3 flex items-start gap-2.5">
            <span className="text-base">{rule.emoji}</span>
            <p className="text-sm text-ink-2">{rule.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-5">
        <MealCard meal={MEALS.matin} />
        <MealCard meal={MEALS.midi} />
        <MealCard meal={MEALS.soir} />
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

      <button onClick={() => setShowList(!showList)}
        className="w-full flex items-center justify-center gap-2 bg-accent-light text-accent-dark font-medium text-sm py-3 rounded-card border-2 border-accent/20 hover:border-accent/40 transition-all mb-3">
        <ShoppingCart size={16} />
        {showList ? 'Masquer la liste' : 'Liste de courses (1 semaine)'}
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
