// ============================================================
// PROGRAMME SPORT 8 SEMAINES
// Niveau intermédiaire — renforcement périnée (fuites)
// 90kg → objectif 55-60kg, 1m60, 35 ans, 4 enfants
// ============================================================

export const PHASES = [
  { id: 0, name: 'Reprise', weeks: [1, 2], color: 'teal', desc: 'On remet le corps en route. Intensité modérée, on installe les bonnes habitudes et on réveille le périnée.' },
  { id: 1, name: 'Montée en charge', weeks: [3, 4], color: 'sky', desc: 'On augmente durées et charges. Le cardio s\'allonge, les exercices se corsent. Tu sens les premiers résultats.' },
  { id: 2, name: 'Intensification', weeks: [5, 6], color: 'amber', desc: 'Séances complètes, charges sérieuses, cardio HIIT léger. Ton corps brûle du gras en continu.' },
  { id: 3, name: 'Plein régime', weeks: [7, 8], color: 'accent', desc: 'Tu es à fond. Circuits intenses, charges lourdes, endurance longue. Les habitudes sont ancrées.' },
]

function getPhaseIndex(w) {
  if (w <= 2) return 0
  if (w <= 4) return 1
  if (w <= 6) return 2
  return 3
}

export function generateWeek(weekNum) {
  const p = getPhaseIndex(weekNum)

  // Paramètres progressifs
  const cardioFast = [18, 22, 28, 32][p]
  const stepTime = [10, 12, 15, 15][p]
  const plankSec = [20, 30, 40, 45][p]
  const repsAb = [12, 15, 15, 20][p]
  const setsAb = [3, 3, 4, 4][p]
  const reps = [12, 12, 15, 15][p]
  const setsGym = [3, 3, 4, 4][p]
  const ringMin = [25, 30, 35, 40][p]
  const circuitRounds = [3, 3, 4, 5][p]
  const hiitRounds = [0, 0, 4, 6][p] // HIIT à partir semaine 5

  return {
    num: weekNum,
    phase: p,
    days: [
      // LUNDI — Cardio + abdos
      {
        name: 'Lundi', title: 'Cardio + abdos', type: 'cardio',
        groups: [
          { title: 'Échauffement', exercises: [
            { name: 'Marche rapide (tapis)', detail: '5 min' },
          ]},
          { title: 'Cardio', exercises: [
            { name: 'Marche inclinée ou course légère', detail: `${cardioFast} min` },
            { name: 'Step dynamique', detail: `${stepTime} min` },
            ...(hiitRounds > 0 ? [{ name: 'HIIT : 30s intense / 30s repos', detail: `${hiitRounds} rounds` }] : []),
          ]},
          { title: 'Abdos (avec contrôle périnée)', exercises: [
            { name: 'Gainage frontal', detail: `${setsAb}×${plankSec}s` },
            { name: 'Gainage latéral', detail: `${setsAb}×${Math.round(plankSec * 0.7)}s/côté` },
            { name: 'Dead bug', detail: `${setsAb}×${repsAb}` },
            { name: 'Crunch inversé (jambes levées)', detail: `${setsAb}×${repsAb}` },
            ...(p >= 2 ? [{ name: 'Mountain climbers lents', detail: `${setsAb}×${repsAb}` }] : []),
          ]},
        ],
      },

      // MARDI — Chartres
      {
        name: 'Mardi', title: 'Chartres (6000+ pas)', type: 'trajet',
        groups: [
          { title: 'Objectif pas', exercises: [
            { name: 'Marche active (trajet + gare)', detail: '6000-8000 pas' },
          ]},
          { title: 'Option soir (10 min)', exercises: [
            { name: 'Exercices périnée', detail: '5 min' },
            { name: 'Étirements', detail: '5 min' },
          ]},
        ],
      },

      // MERCREDI — Chartres
      {
        name: 'Mercredi', title: 'Chartres (6000+ pas)', type: 'trajet',
        groups: [
          { title: 'Objectif pas', exercises: [
            { name: 'Marche active (trajet + gare)', detail: '6000-8000 pas' },
          ]},
          { title: 'Option soir (10 min)', exercises: [
            { name: 'Exercices périnée', detail: '5 min' },
            { name: 'Gainage rapide', detail: '5 min' },
          ]},
        ],
      },

      // JEUDI — Haut du corps
      {
        name: 'Jeudi', title: 'Haut du corps', type: 'renfo',
        groups: [
          { title: 'Poitrine & dos (machines)', exercises: [
            { name: 'Chest press', detail: `${setsGym}×${reps}` },
            { name: 'Tirage dos (poulie haute)', detail: `${setsGym}×${reps}` },
            { name: 'Butterfly', detail: `${setsGym}×${reps}` },
            ...(p >= 1 ? [{ name: 'Rowing machine', detail: `${setsGym}×${reps}` }] : []),
          ]},
          { title: 'Bras & épaules (haltères)', exercises: [
            { name: 'Curl biceps', detail: `${setsGym}×${reps}` },
            { name: 'Extension triceps', detail: `${setsGym}×${reps}` },
            { name: 'Élévations latérales', detail: `${setsGym}×${reps}` },
            ...(p >= 2 ? [{ name: 'Développé épaules', detail: `${setsGym}×${reps}` }] : []),
          ]},
        ],
      },

      // VENDREDI — Cardio + circuit
      {
        name: 'Vendredi', title: 'Cardio circuit', type: 'cardio',
        groups: [
          { title: `Circuit brûle-graisse ×${circuitRounds}`, exercises: [
            { name: 'Step rapide', detail: '2 min' },
            { name: 'Marche inclinée', detail: '3 min' },
            { name: 'Montées de genoux', detail: '45 sec' },
            ...(p >= 1 ? [{ name: 'Squat jump léger', detail: '30 sec' }] : []),
            ...(p >= 2 ? [{ name: 'Burpees modifiés (sans saut)', detail: '30 sec' }] : []),
          ]},
          ...(p >= 1 ? [{ title: 'Abdos finisher', exercises: [
            { name: 'Planche', detail: `${plankSec}s` },
            { name: 'Bicycle crunch', detail: `${repsAb}/côté` },
          ]}] : []),
        ],
      },

      // SAMEDI — alternance bas du corps / Ring Fit
      {
        name: 'Samedi',
        title: weekNum % 2 === 0 ? 'Ring Fit' : 'Bas du corps',
        type: weekNum % 2 === 0 ? 'ringfit' : 'renfo',
        groups: weekNum % 2 === 0
          ? [{ title: 'Ring Fit Adventure', exercises: [
              { name: 'Session Ring Fit (intensité moyenne-haute)', detail: `${ringMin} min` },
            ]}]
          : [
            { title: 'Jambes (machines + poids)', exercises: [
              { name: 'Squat (barre ou haltères)', detail: `${setsGym}×${reps}` },
              { name: 'Fentes marchées', detail: `${setsGym}×${Math.round(reps * 0.8)}/jambe` },
              { name: 'Leg press', detail: `${setsGym}×${reps}` },
              { name: 'Leg extension', detail: `${setsGym}×${reps}` },
              ...(p >= 2 ? [{ name: 'Leg curl', detail: `${setsGym}×${reps}` }] : []),
            ]},
            { title: 'Fessiers', exercises: [
              { name: 'Hip thrust (banc + haltère)', detail: `${setsGym}×${reps}` },
              { name: 'Abducteur machine', detail: `${setsGym}×${reps}` },
            ]},
          ],
      },

      // DIMANCHE
      {
        name: 'Dimanche', title: 'Repos actif', type: 'repos',
        groups: [
          { title: 'Récupération', exercises: [
            { name: 'Marche légère ou balade', detail: '20-30 min' },
            { name: 'Étirements complets', detail: '10 min' },
            { name: 'Exercices périnée', detail: '5 min' },
          ]},
        ],
      },
    ],
  }
}

export function getAllWeeks() {
  return Array.from({ length: 8 }, (_, i) => generateWeek(i + 1))
}


// ============================================================
// PÉRINÉE — Programme quotidien
// ============================================================

export const PERINEE_ROUTINE = {
  title: 'Routine périnée quotidienne (5 min)',
  note: 'À faire tous les jours, même les jours Chartres. Ça se fait assise, debout, dans le train.',
  exercises: [
    { name: 'Contractions lentes', detail: '10× — serre 5s, relâche 5s', tip: 'Comme retenir un gaz + pipi en même temps' },
    { name: 'Contractions rapides', detail: '10× — serre/relâche vite', tip: 'Petites impulsions rapides' },
    { name: 'Respiration + périnée', detail: '10× — expire = serre, inspire = relâche', tip: 'Associer la respiration au périnée' },
  ],
  important: 'Expire pendant chaque effort en salle. C\'est la règle n°1 pour protéger le périnée sous charge.',
}


// ============================================================
// NUTRITION
// ============================================================

export const NUTRITION_RULES = [
  { emoji: '🥩', text: 'Protéines à chaque repas (coupe la faim)' },
  { emoji: '🚫', text: 'Limiter les combos gras + sucre' },
  { emoji: '🌙', text: 'Manger léger le soir (mais manger)' },
  { emoji: '💧', text: '1,5 à 2L d\'eau par jour' },
]

export const NUTRITION_AVOID = [
  'Alcool → 1 fois/semaine max',
  'Soda',
  'Grignotage entre les repas',
]

export const SNACKS = [
  'Compote sans sucre',
  'Un fruit (pomme, banane)',
  'Yaourt végétal',
]

export const MEALS_HOME = {
  matin: {
    title: 'Petit-déjeuner maison',
    options: [
      {
        name: 'Café + tartine (ton classique)',
        items: ['Café au lait d\'avoine', 'Demi-baguette', 'Beurre ou confiture OU jambon/fromage'],
        grammage: 'Pain ~120g • Protéine si salé ~30g',
      },
      {
        name: 'Version œufs',
        items: ['Café au lait d\'avoine', '2 œufs brouillés ou au plat', '1 tranche de pain'],
        grammage: 'Œufs ~120g • Pain ~40g',
      },
    ],
  },
  midi: {
    title: 'Déjeuner maison',
    options: [
      {
        name: 'Assiette équilibrée',
        items: ['Poulet OU thon OU œufs', 'Riz / pâtes / semoule', 'Légumes à volonté', '1 fruit'],
        grammage: 'Protéine 120-150g • Féculent 100-120g cuit • Légumes 200g+',
      },
      {
        name: 'Salade complète',
        items: ['Salade composée : thon + maïs + tomates + riz froid', '1 fruit'],
        grammage: 'Thon 1 boîte ~130g • Riz froid ~100g',
      },
    ],
  },
  soir: {
    title: 'Dîner léger (important pour le ventre)',
    options: [
      { name: 'Express 5 min', items: ['2 œufs (au plat ou durs)', 'Compote sans sucre'], grammage: 'Œufs ~120g' },
      { name: 'Protéiné', items: ['Poulet grillé', 'Légumes vapeur ou poêlés'], grammage: 'Poulet 100-120g • Légumes 200g' },
      { name: 'Fatigue max', items: ['Thon en boîte', 'Compote sans sucre'], grammage: 'Thon 1 boîte ~130g' },
    ],
  },
}

export const MEALS_CHARTRES = {
  matin: {
    title: 'Petit-déj à emporter (train)',
    options: [
      {
        name: 'Sandwich maison',
        items: ['Demi-baguette + jambon ou fromage', 'Café thermos ou acheté en gare'],
        grammage: 'Pain ~120g • Jambon ~40g',
      },
      {
        name: 'Version tartine emballée',
        items: ['Pain + beurre dans du film', '1 fruit (pomme, banane)', 'Café en route'],
        grammage: 'Pain ~120g',
      },
      {
        name: 'Version express',
        items: ['2 tranches pain de mie + confiture ou jambon', '1 compote à boire', 'Café thermos'],
        grammage: 'Pain de mie ~60g',
      },
    ],
  },
  midi: {
    title: 'Cantine — la règle du 1 plaisir',
    note: 'Viande + légumes + petit féculent. Tu choisis 1 seul plaisir : dessert OU pain/fromage OU sauce. Pas les 3.',
    options: [
      {
        name: 'Assiette type',
        items: ['Viande ou poisson', 'Légumes du jour', 'Petit féculent', '→ + 1 plaisir au choix'],
        grammage: 'Protéine ~150g • Féculent ~100g',
      },
    ],
  },
  soir: {
    title: 'Dîner obligatoire (même fatiguée)',
    note: '5 min max. Si tu sautes → tu stockes + tu craques le lendemain.',
    options: [
      { name: 'Express', items: ['2 œufs', 'Compote sans sucre'], grammage: 'Œufs ~120g' },
      { name: 'Alternative', items: ['Thon en boîte', 'Compote sans sucre'], grammage: 'Thon ~130g' },
      { name: 'Si énergie', items: ['Poulet réchauffé', 'Compote ou fruit'], grammage: 'Poulet ~100g' },
    ],
  },
}

export const SHOPPING_LIST = [
  { category: 'Protéines', items: ['Poulet (cuisses ou filets) ×2 barquettes', 'Œufs ×18', 'Thon en boîte ×4', 'Jambon ×1 paquet'] },
  { category: 'Féculents', items: ['Riz ou pâtes ×1 paquet', 'Pain / baguettes (tous les 2 jours)', 'Pain de mie ×1 (jours Chartres)'] },
  { category: 'Légumes', items: ['Tomates ×6', 'Courgettes ×4', 'Haricots verts surgelés ×1 sac', 'Salade ×1', 'Maïs en boîte ×2'] },
  { category: 'Fruits', items: ['Pommes ×6', 'Bananes ×4', 'Compotes sans sucre ×8'] },
  { category: 'Petit-déj & boissons', items: ['Lait d\'avoine ×2', 'Café', 'Beurre', 'Confiture'] },
  { category: 'Extras', items: ['Yaourts végétaux ×4', 'Fromage (portion semaine)'] },
]

export const DAY_TYPES = {
  cardio:  { label: 'Cardio', bg: 'bg-teal-light', text: 'text-teal-dark' },
  renfo:   { label: 'Renfo', bg: 'bg-sky-light', text: 'text-sky-dark' },
  ringfit: { label: 'Ring Fit', bg: 'bg-rose-light', text: 'text-rose-dark' },
  repos:   { label: 'Repos', bg: 'bg-bg-3', text: 'text-ink-3' },
  trajet:  { label: 'Chartres', bg: 'bg-amber-light', text: 'text-amber-dark' },
}
