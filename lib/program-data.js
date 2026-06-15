// ============================================================
// PROGRAMME CONGÉ — 2 SEMAINES INTENSIVES FOCUS VENTRE
// 5 séances/semaine — Matériel : Marcy HG3000, tapis 3%, step, Ring Fit
// Pas de Chartres = plus de temps pour s'entraîner
// ============================================================

export const PHASES = [
  { id: 0, name: 'Offensive ventre', weeks: [1, 2], color: 'coral', desc: 'Programme intensif 2 semaines : cardio brûle-graisse + abdos profonds + vacuum quotidien. On attaque le ventre par tous les angles.' },
]

export function generateWeek(weekNum) {
  const w2 = weekNum === 2 // semaine 2 un cran au-dessus

  const plankSec = w2 ? 45 : 35
  const repsAb = w2 ? 20 : 15
  const setsAb = w2 ? 4 : 3
  const setsGym = w2 ? 4 : 3
  const reps = w2 ? 15 : 12
  const stepMin = w2 ? 35 : 30
  const hiitRounds = w2 ? 6 : 5
  const ringMin = w2 ? 40 : 35
  const vacuumSec = w2 ? 20 : 15

  return {
    num: weekNum,
    phase: 0,
    days: [
      // LUNDI — Cardio HIIT + Abdos profonds
      {
        name: 'Lundi', title: 'Cardio HIIT + abdos profonds', type: 'cardio',
        groups: [
          { title: 'Échauffement', exercises: [
            { name: 'Marche rapide tapis 3%', detail: '5 min' },
          ]},
          { title: 'Step HIIT', exercises: [
            { name: 'Step HIIT : 30s intense / 30s repos', detail: `${hiitRounds} rounds` },
            { name: 'Step modéré récupération', detail: '5 min' },
          ]},
          { title: 'Cardio tapis', exercises: [
            { name: 'Marche rapide 6-6,5 km/h, 3%', detail: '15 min' },
          ]},
          { title: 'Abdos profonds (focus ventre)', exercises: [
            { name: 'Vacuum au sol', detail: `${setsAb}×${vacuumSec}s` },
            { name: 'Gainage frontal', detail: `${setsAb}×${plankSec}s` },
            { name: 'Gainage latéral', detail: `${setsAb}×${Math.round(plankSec * 0.7)}s/côté` },
            { name: 'Dead bug (lent et contrôlé)', detail: `${setsAb}×${repsAb}` },
            { name: 'Crunch inversé (jambes levées)', detail: `${setsAb}×${repsAb}` },
            { name: 'Mountain climbers lents', detail: `${setsAb}×${repsAb}` },
          ]},
        ],
      },

      // MARDI — Haut du corps + gainage
      {
        name: 'Mardi', title: 'Haut du corps + gainage', type: 'renfo',
        groups: [
          { title: 'Poitrine & dos (Marcy)', exercises: [
            { name: 'Chest press', detail: `${setsGym}×${reps}` },
            { name: 'Tirage dos poulie haute', detail: `${setsGym}×${reps}` },
            { name: 'Butterfly', detail: `${setsGym}×${reps}` },
            { name: 'Tirage poulie haute prise serrée', detail: `${setsGym}×${reps}` },
          ]},
          { title: 'Bras & épaules', exercises: [
            { name: 'Curl biceps', detail: `${setsGym}×${reps}` },
            { name: 'Extension triceps', detail: `${setsGym}×${reps}` },
            { name: 'Élévations latérales', detail: `${setsGym}×${reps}` },
          ]},
          { title: 'Finisher ventre', exercises: [
            { name: 'Gainage frontal', detail: `${plankSec}s` },
            { name: 'Gainage latéral', detail: `${Math.round(plankSec * 0.7)}s/côté` },
            { name: 'Vacuum debout', detail: `${setsAb}×${vacuumSec}s` },
          ]},
        ],
      },

      // MERCREDI — Cardio long + ventre
      {
        name: 'Mercredi', title: 'Cardio brûle-graisse + ventre', type: 'cardio',
        groups: [
          { title: 'Step dynamique', exercises: [
            { name: 'Step dynamique continu', detail: `${stepMin} min` },
          ]},
          { title: 'Tapis', exercises: [
            { name: 'Marche rapide 6-6,5 km/h, 3%', detail: '15 min' },
          ]},
          { title: 'Circuit abdos ×2', exercises: [
            { name: 'Vacuum à quatre pattes', detail: `${vacuumSec}s` },
            { name: 'Dead bug', detail: `${repsAb}` },
            { name: 'Crunch inversé', detail: `${repsAb}` },
            { name: 'Gainage frontal', detail: `${plankSec}s` },
            { name: 'Bicycle crunch (lent)', detail: `${repsAb}/côté` },
          ]},
        ],
      },

      // JEUDI — Bas du corps + fessiers
      {
        name: 'Jeudi', title: 'Bas du corps + fessiers', type: 'renfo',
        groups: [
          { title: 'Jambes', exercises: [
            { name: 'Squat classique', detail: `${setsGym}×${reps}` },
            { name: 'Squat sumo (large, pointes dehors)', detail: `${setsGym}×${reps}` },
            { name: 'Fentes marchées', detail: `${setsGym}×${Math.round(reps * 0.8)}/jambe` },
            { name: 'Leg extension (Marcy)', detail: `${setsGym}×${reps}` },
          ]},
          { title: 'Fessiers', exercises: [
            { name: 'Hip thrust (dos sur canapé/banc)', detail: `${setsGym}×${reps}` },
            { name: 'Élévations latérales jambe (au sol)', detail: `${setsGym}×15/côté` },
            { name: 'Clamshell', detail: `${setsGym}×15/côté` },
          ]},
          { title: 'Finisher ventre', exercises: [
            { name: 'Vacuum debout', detail: `${setsAb}×${vacuumSec}s` },
            { name: 'Gainage frontal', detail: `${plankSec}s` },
          ]},
        ],
      },

      // VENDREDI — Ring Fit + abdos
      {
        name: 'Vendredi', title: 'Ring Fit + abdos', type: 'ringfit',
        groups: [
          { title: 'Ring Fit Adventure', exercises: [
            { name: 'Session Ring Fit (sans sauts)', detail: `${ringMin} min` },
            { name: 'Privilégie les exos abdos dans le jeu', detail: 'consigne' },
          ]},
          { title: 'Abdos après Ring Fit', exercises: [
            { name: 'Vacuum au sol', detail: `${setsAb}×${vacuumSec}s` },
            { name: 'Gainage frontal', detail: `${plankSec}s` },
            { name: 'Dead bug', detail: `${repsAb}` },
            { name: 'Crunch inversé', detail: `${repsAb}` },
          ]},
        ],
      },

      // SAMEDI — Repos actif
      {
        name: 'Samedi', title: 'Repos actif', type: 'repos',
        groups: [
          { title: 'Récupération active', exercises: [
            { name: 'Marche dehors ou balade', detail: '30-45 min' },
            { name: 'Étirements complets', detail: '10 min' },
            { name: 'Vacuum', detail: `5×${vacuumSec}s` },
            { name: 'Exercices périnée', detail: '5 min' },
          ]},
        ],
      },

      // DIMANCHE — Repos total
      {
        name: 'Dimanche', title: 'Repos complet', type: 'repos',
        groups: [
          { title: 'Récupération', exercises: [
            { name: 'Repos total', detail: 'tu l\'as mérité' },
            { name: 'Vacuum (seul exo obligatoire)', detail: `5×${vacuumSec}s` },
          ]},
        ],
      },
    ],
  }
}

export function getAllWeeks() {
  return [generateWeek(1), generateWeek(2)]
}


// ============================================================
// VACUUM GUIDE
// ============================================================

export const VACUUM_GUIDE = {
  title: 'Vacuum — ton arme anti-ventre',
  positions: [
    { name: 'Au sol (débutant)', desc: 'Allongée, genoux pliés. Expire à fond, rentre le nombril vers la colonne. Tiens 15-20s.' },
    { name: 'À quatre pattes (intermédiaire)', desc: 'Position table. Expire, aspire le nombril vers le haut. La gravité aide à sentir le mouvement.' },
    { name: 'Debout (avancé)', desc: 'Debout, mains sur les cuisses, légèrement penchée. Expire et rentre tout.' },
    { name: 'Assis (partout)', desc: 'Assis dans le train, en voiture, au bureau. Discret et efficace.' },
  ],
  rules: [
    'Tous les jours sans exception',
    'Matin au réveil + soir avant de dormir',
    'Ne bloque pas la respiration — respire doucement en tenant',
    'Serre le périnée en même temps',
  ],
}


// ============================================================
// NUTRITION — même base, adaptée congé (pas de Chartres)
// ============================================================

export const NUTRITION_RULES = [
  { emoji: '🥩', text: 'Protéines à chaque repas' },
  { emoji: '🚫', text: 'Limiter combos gras + sucre' },
  { emoji: '🌙', text: 'Dîner léger (mais manger)' },
  { emoji: '💧', text: '2L d\'eau/jour minimum' },
  { emoji: '🔥', text: 'Congé = pas de cantine, tu contrôles tout' },
]

export const MEALS = {
  matin: {
    title: 'Petit-déjeuner',
    options: [
      {
        name: 'Overnight oat (préparé la veille)',
        items: ['40g flocons avoine + 10g chia', 'Lait d\'avoine + 100g skyr', 'Demi banane + pépites chocolat le matin'],
        grammage: '~420 kcal • 15g protéines',
      },
      {
        name: 'Café + tartine classique',
        items: ['Café au lait d\'avoine', 'Demi-baguette + jambon ou fromage'],
        grammage: '~350 kcal',
      },
      {
        name: 'Wrap maison',
        items: ['1 wrap + fromage fouetté + œuf + jambon + salade'],
        grammage: '~400 kcal • 25g protéines',
      },
    ],
  },
  midi: {
    title: 'Déjeuner',
    options: [
      {
        name: 'Assiette équilibrée',
        items: ['Poulet/thon/œufs (120-150g)', 'Riz/pâtes/semoule (100-120g cuit)', 'Légumes à volonté', '1 fruit'],
        grammage: 'Protéine 120-150g • Féculent 100-120g cuit',
      },
      {
        name: 'Salade complète',
        items: ['Thon + maïs + tomates + riz froid', '1 fruit'],
        grammage: 'Thon 1 boîte ~130g • Riz ~100g',
      },
    ],
  },
  soir: {
    title: 'Dîner léger (crucial pour le ventre)',
    options: [
      { name: 'Express', items: ['2 œufs', 'Compote sans sucre ou banane'], grammage: '~210 kcal' },
      { name: 'Protéiné', items: ['Poulet 100-120g', 'Légumes vapeur'], grammage: '~250 kcal' },
      { name: 'Fatigue', items: ['Thun en boîte', 'Compote'], grammage: '~200 kcal' },
    ],
  },
}

export const SNACKS = [
  'Compote sans sucre',
  'Un fruit (pomme, banane)',
  'Yaourt végétal',
  'Barre protéinée Joyfuel (si creux)',
  'Œuf dur (le meilleur coupe-faim)',
]

export const SHOPPING_LIST = [
  { category: 'Protéines', items: ['Poulet ×2 barquettes', 'Œufs ×18', 'Thon en boîte ×4', 'Jambon ×1 paquet', 'Skyr ×4'] },
  { category: 'Féculents', items: ['Riz ou pâtes ×1', 'Pain/baguettes', 'Flocons d\'avoine ×1', 'Wraps ×1 paquet'] },
  { category: 'Légumes', items: ['Tomates', 'Courgettes', 'Haricots verts surgelés', 'Salade', 'Maïs en boîte'] },
  { category: 'Fruits', items: ['Pommes ×6', 'Bananes ×6', 'Compotes sans sucre ×8'] },
  { category: 'Petit-déj', items: ['Lait d\'avoine ×2', 'Café', 'Graines de chia', 'Pépites chocolat', 'Fromage fouetté'] },
]

export const DAY_TYPES = {
  cardio:  { label: 'Cardio', bg: 'bg-teal-light', text: 'text-teal-dark' },
  renfo:   { label: 'Renfo', bg: 'bg-sky-light', text: 'text-sky-dark' },
  ringfit: { label: 'Ring Fit', bg: 'bg-rose-light', text: 'text-rose-dark' },
  repos:   { label: 'Repos', bg: 'bg-bg-3', text: 'text-ink-3' },
}
