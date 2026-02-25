// ============================================================
// src/utils/constants.js
// Constantes partagées entre les 3 solutions
// ============================================================

// ── Statuts génériques ───────────────────────────────────────
export const STATUTS = {
  ACTIF:     "actif",
  INACTIF:   "inactif",
  ARCHIVE:   "archive",
  EN_COURS:  "en_cours",
  TERMINE:   "termine",
  ANNULE:    "annule",
};

// ── Statuts santé animale ────────────────────────────────────
export const SANTE = {
  SAIN:       "sain",
  TRAITEMENT: "traitement",
  QUARANTAINE:"quarantaine",
  GESTATION:  "gestation",
  DECEDE:     "decede",
};

// ── Statuts de stock ─────────────────────────────────────────
export const STOCK_STATUTS = {
  OK:       "ok",       // niveau normal
  ALERTE:   "alerte",   // proche du seuil
  CRITIQUE: "critique", // en dessous du seuil
  RUPTURE:  "rupture",  // à zéro
};

// ── Catégories de dépenses ───────────────────────────────────
export const CATEGORIES_DEPENSES = [
  { value: "semences",      label: "Semences & Plants" },
  { value: "intrants",      label: "Intrants agricoles" },
  { value: "aliments",      label: "Alimentation bétail" },
  { value: "veterinaire",   label: "Soins vétérinaires" },
  { value: "main_oeuvre",   label: "Main d'œuvre" },
  { value: "equipements",   label: "Équipements & matériel" },
  { value: "transport",     label: "Transport & livraison" },
  { value: "autres",        label: "Autres dépenses" },
];

// ── Espèces animales ─────────────────────────────────────────
export const ESPECES = [
  { value: "bovin",    label: "Bovin",    emoji: "🐄" },
  { value: "ovin",     label: "Ovin",     emoji: "🐏" },
  { value: "caprin",   label: "Caprin",   emoji: "🐐" },
  { value: "porcin",   label: "Porcin",   emoji: "🐖" },
  { value: "volaille", label: "Volaille", emoji: "🐔" },
  { value: "autre",    label: "Autre",    emoji: "🐾" },
];

// ── Stades végétatifs ────────────────────────────────────────
export const STADES_VEGETATIFS = [
  "Semis",
  "Levée",
  "Croissance végétative",
  "Floraison",
  "Fructification",
  "Maturation",
  "Récolte",
];

// ── Types de mouvements de stock ─────────────────────────────
export const MOUVEMENT_TYPES = {
  ENTREE:    "entree",
  SORTIE:    "sortie",
  AJUSTEMENT:"ajustement",
};

// ── Rôles utilisateurs ───────────────────────────────────────
export const ROLES = {
  ADMIN:      "administrateur",
  GESTIONNAIRE:"gestionnaire",
  OPERATEUR:  "operateur",
  LECTEUR:    "lecteur",
};

// ── Couleurs des graphiques (palette cohérente Recharts) ─────
export const CHART_COLORS = {
  primary:  "#22c55e",
  earth:    "#d4882a",
  sky:      "#0ea5e9",
  purple:   "#8b5cf6",
  red:      "#ef4444",
  amber:    "#f59e0b",
  pink:     "#ec4899",
  teal:     "#14b8a6",
  // Tableau de couleurs pour les séries multiples
  series: ["#22c55e", "#d4882a", "#0ea5e9", "#8b5cf6", "#f59e0b", "#ec4899"],
};

// ── Unités de mesure ─────────────────────────────────────────
export const UNITES = [
  { value: "kg",     label: "Kilogramme (kg)" },
  { value: "tonne",  label: "Tonne (t)" },
  { value: "litre",  label: "Litre (L)" },
  { value: "sac",    label: "Sac" },
  { value: "botte",  label: "Botte" },
  { value: "dose",   label: "Dose" },
  { value: "unite",  label: "Unité" },
  { value: "ha",     label: "Hectare (ha)" },
];

// ── Mois de l'année (pour les graphiques) ────────────────────
export const MOIS = [
  "Jan", "Fév", "Mar", "Avr", "Mai", "Jun",
  "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc",
];
