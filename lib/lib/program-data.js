// ============================================================
// PROGRAMME — 4 séances/semaine
// Lundi, Jeudi, Vendredi, Samedi
// Mardi + Mercredi = Chartres (repos)
// Matériel : Marcy HG3000, tapis 3%, step, Ring Fit
// ============================================================

export const WEEK_MODES = [
  {
    id: 'transition',
    name: 'Semaine de reprise',
    color: 'amber',
    desc: 'Reprise en douceur après une pause. Une série de moins partout, pas de HIIT. On réhabitue le corps sans le brusquer.',
  },
  {
    id: 'normal',
    name: 'Rythme normal',
    color: 'teal',
    desc: 'Le programme complet. Séances de 45-50 min, 4 fois par semaine. C\'est ton rythme de croisière.',
  },
]

function build(mode) {
  const soft = mode === 'transition'
  const s4 = soft ? 3 : 4
  const s3 = soft ? 2 : 3
  const plank = soft ? 25 : 30

  return [
    // LUNDI
    {
      name: 'Lundi', title: 'Bas du corps + ventre', type: 'renfo', duration: soft ? '~40 min' : '~50 min',
      groups: [
        { title: 'Échauffement', exercises: [
          { name: 'Step ou vélo tranquille', detail: '8 min' },
        ]},
        { title: 'Jambes', exercises: [
          { name: 'Squat', detail: `${s4}×12` },
          { name: 'Squat sumo (large, pointes dehors)', detail: `${s3}×12` },
          { name: 'Fentes marchées', detail: `${s3}×10/jambe` },
          { name: 'Leg extension (Marcy)', detail: `${s3}×12` },
        ]},
        { title: 'Fessiers', exercises: [
          { name: 'Hip thrust (dos sur canapé)', detail: `${s3}×15` },
        ]},
        { title: 'Ventre', exercises: [
          { name: 'Gainage frontal', detail: `${s3}×${plank}s` },
          { name: 'Dead bug', detail: `${s3}×15` },
          { name: 'Vacuum', detail: '5×15s' },
        ]},
      ],
    },

    // MARDI
    {
      name: 'Mardi', title: 'Chartres — repos', type: 'trajet', duration: '5 min',
      groups: [
        { title: 'Le soir (5 min)', exercises: [
          { name: 'Vacuum (assise ou allongée)', detail: '5×15s' },
          { name: 'Exercices périnée', detail: '5 min' },
        ]},
      ],
    },

    // MERCREDI
    {
      name: 'Mercredi', title: 'Chartres — repos', type: 'trajet', duration: '5 min',
      groups: [
        { title: 'Le soir (5 min)', exercises: [
          { name: 'Vacuum', detail: '5×15s' },
          { name: 'Étirements doux', detail: '5 min' },
        ]},
      ],
    },

    // JEUDI
    {
      name: 'Jeudi', title: 'Haut du corps', type: 'renfo', duration: soft ? '~40 min' : '~50 min',
      groups: [
        { title: 'Échauffement', exercises: [
          { name: 'Step ou vélo tranquille', detail: '8 min' },
        ]},
        { title: 'Poitrine & dos (Marcy)', exercises: [
          { name: 'Chest press', detail: `${s4}×12` },
          { name: 'Tirage dos poulie haute', detail: `${s4}×12` },
          { name: 'Butterfly', detail: `${s3}×12` },
          { name: 'Tirage prise serrée', detail: `${s3}×12` },
        ]},
        { title: 'Bras & épaules', exercises: [
          { name: 'Curl biceps', detail: `${s3}×12` },
          { name: 'Extension triceps', detail: `${s3}×12` },
          { name: 'Élévations latérales', detail: `${s3}×12` },
        ]},
        { title: 'Ventre', exercises: [
          { name: 'Vacuum', detail: '5×15s' },
        ]},
      ],
    },

    // VENDREDI
    {
      name: 'Vendredi', title: 'Cardio + abdos', type: 'cardio', duration: soft ? '~35 min' : '~45 min',
      groups: [
        { title: 'Cardio', exercises: [
          { name: 'Step dynamique', detail: '20 min' },
          ...(soft ? [] : [{ name: 'Step HIIT : 30s fort / 30s lent', detail: '5 rounds' }]),
        ]},
        { title: 'Abdos', exercises: [
          { name: 'Gainage frontal', detail: `${s3}×${plank + 5}s` },
          { name: 'Gainage latéral', detail: `${s3}×${plank - 5}s/côté` },
          { name: 'Crunch inversé', detail: `${s3}×15` },
          { name: 'Mountain climbers lents', detail: `${s3}×15` },
        ]},
        { title: 'Ventre', exercises: [
          { name: 'Vacuum', detail: '5×15s' },
        ]},
      ],
    },

    // SAMEDI
    {
      name: 'Samedi', title: 'Ring Fit + full body', type: 'ringfit', duration: soft ? '~35 min' : '~45 min',
      groups: [
        { title: 'Ring Fit Adventure', exercises: [
          { name: 'Session Ring Fit (sans sauts)', detail: soft ? '25 min' : '30 min' },
        ]},
        { title: 'Complément full body', exercises: [
          { name: 'Squat', detail: `${s3}×15` },
          { name: 'Chest press (Marcy)', detail: `${s3}×12` },
          { name: 'Gainage frontal', detail: `${s3}×${plank}s` },
        ]},
        { title: 'Ventre', exercises: [
          { name: 'Vacuum', detail: '5×15s' },
        ]},
      ],
    },

    // DIMANCHE
    {
      name: 'Dimanche', title: 'Repos complet', type: 'repos', duration: '5 min',
      groups: [
        { title: 'Récupération', exercises: [
          { name: 'Repos total (ou balade si envie)', detail: 'libre' },
          { name: 'Vacuum', detail: '5×15s' },
          { name: 'Étirements', detail: '10 min' },
        ]},
      ],
    },
  ]
}

export function getDays(mode) {
  return build(mode)
}

// ============================================================
// VACUUM
// ============================================================

export const VACUUM_GUIDE = {
  intro: 'Le vacuum travaille le transverse, le muscle profond qui fait office de gaine naturelle. C\'est lui qui donne un ventre plat, pas les crunchs. À faire tous les jours, même les jours de repos.',
  positions: [
    { name: 'Allongée (le plus facile)', desc: 'Genoux pliés. Expire à fond, rentre le nombril vers la colonne. Tiens 15s en respirant doucement.' },
    { name: 'À quatre pattes', desc: 'Position table. Expire, aspire le nombril vers le haut. La gravité aide à bien sentir le mouvement.' },
    { name: 'Debout', desc: 'Mains sur les cuisses, légèrement penchée. Expire et rentre tout.' },
    { name: 'Assise (partout)', desc: 'Dans le train, en voiture, au bureau. Personne ne voit rien.' },
  ],
  rules: [
    'Tous les jours, sans exception',
    'Matin au réveil et/ou le soir',
    'Ne bloque pas la respiration — respire doucement en tenant',
    'Serre le périnée en même temps',
  ],
}

// ============================================================
// NUTRITION
// ============================================================

export const NUTRITION_RULES = [
  { emoji: '🥩', text: 'Protéines à chaque repas' },
  { emoji: '🚫', text: 'Limiter les combos gras + sucre' },
  { emoji: '🌙', text: 'Dîner léger, mais dîner quand même' },
  { emoji: '💧', text: '1,5 à 2L d\'eau par jour' },
]

export const MEALS_HOME = {
  matin: {
    title: 'Petit-déjeuner maison',
    options: [
      { name: 'Overnight oat (préparé la veille)', items: ['40g flocons + 10g chia', 'Lait d\'avoine + 100g skyr', 'Demi banane + pépites de chocolat le matin'], grammage: 'À répartir dans 2 pots de 180ml' },
      { name: 'Café + tartine', items: ['Café au lait d\'avoine', 'Demi-baguette', 'Beurre/confiture OU jambon/fromage'] },
      { name: 'Version œufs', items: ['Café au lait d\'avoine', '2 œufs', '1 tranche de pain'] },
    ],
  },
  midi: {
    title: 'Déjeuner',
    options: [
      { name: 'Assiette équilibrée', items: ['Poulet / thon / œufs', 'Riz, pâtes ou semoule', 'Légumes à volonté', '1 fruit'], grammage: 'Protéine 120-150g • Féculent 100-120g cuit' },
      { name: 'Salade complète', items: ['Thon + maïs + tomates + riz froid', '1 fruit'] },
    ],
  },
  soir: {
    title: 'Dîner léger',
    options: [
      { name: 'Express 5 min', items: ['2 œufs', 'Compote sans sucre ou banane'] },
      { name: 'Protéiné', items: ['Poulet', 'Légumes vapeur ou poêlés'], grammage: 'Poulet 100-120g' },
      { name: 'Fatigue max', items: ['Thon en boîte', 'Compote'] },
    ],
  },
}

export const MEALS_CHARTRES = {
  matin: {
    title: 'Petit-déj à emporter',
    options: [
      { name: 'Wrap maison (préparé la veille)', items: ['1 wrap + fromage fouetté', 'Œuf + jambon (ou saumon)', 'Salade'], grammage: 'Le plus rassasiant, ~400 kcal' },
      { name: 'Overnight oat en pot', items: ['Se mange froid dans le train', 'Cuillère dans le sac'] },
      { name: 'Sandwich jambon', items: ['Demi-baguette + jambon', 'Café thermos'] },
      { name: 'Dépannage', items: ['Barre protéinée (Barebells, Grenade, Joyfuel)', '1 fruit'] },
    ],
  },
  midi: {
    title: 'Cantine — la règle du 1 plaisir',
    note: 'Viande/poisson + légumes + petit féculent. Tu choisis UN seul plaisir : dessert OU pain-fromage OU sauce. Pas les trois.',
    options: [
      { name: 'Assiette type', items: ['Viande ou poisson', 'Légumes du jour', 'Petit féculent', '+ 1 plaisir au choix'], grammage: 'Un seul féculent : pain OU semoule, pas les deux' },
    ],
  },
  soir: {
    title: 'Dîner obligatoire (même fatiguée)',
    note: '5 min max. Si tu sautes le dîner, tu craques le lendemain matin.',
    options: [
      { name: 'Express', items: ['2 œufs', 'Compote ou banane'] },
      { name: 'Alternative', items: ['Thon en boîte', 'Compote'] },
    ],
  },
}

export const SNACKS = [
  'Œuf dur (le meilleur coupe-faim)',
  'Compote sans sucre',
  'Un fruit',
  'Yaourt nature ou skyr',
  'Barre protéinée (dépannage)',
]

export const SHOPPING_LIST = [
  { category: 'Protéines', items: ['Poulet ×2 barquettes', 'Œufs ×18', 'Thon en boîte ×4', 'Jambon ×1 paquet', 'Skyr ×4'] },
  { category: 'Féculents', items: ['Riz ou pâtes ×1', 'Pain / baguettes', 'Flocons d\'avoine', 'Wraps ×1 paquet'] },
  { category: 'Légumes', items: ['Tomates', 'Courgettes', 'Haricots verts surgelés', 'Salade', 'Maïs en boîte'] },
  { category: 'Fruits', items: ['Pommes ×6', 'Bananes ×6', 'Compotes sans sucre ×8'] },
  { category: 'Petit-déj', items: ['Lait d\'avoine ×2', 'Café', 'Graines de chia', 'Fromage fouetté', 'Pépites de chocolat'] },
]

export const DAY_TYPES = {
  cardio:  { label: 'Cardio', bg: 'bg-teal-light', text: 'text-teal-dark' },
  renfo:   { label: 'Renfo', bg: 'bg-sky-light', text: 'text-sky-dark' },
  ringfit: { label: 'Ring Fit', bg: 'bg-rose-light', text: 'text-rose-dark' },
  repos:   { label: 'Repos', bg: 'bg-bg-3', text: 'text-ink-3' },
  trajet:  { label: 'Chartres', bg: 'bg-amber-light', text: 'text-amber-dark' },
}
