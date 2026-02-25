// ============================================================
// src/utils/formatters.js
// Fonctions de formatage partagées entre les 3 solutions
// ============================================================

// ── 1. FORMATAGE MONÉTAIRE ───────────────────────────────────

/**
 * Formate un nombre en monnaie FCFA
 * @param {number} montant
 * @param {boolean} abrege - affiche "1,5M" au lieu de "1 500 000"
 * @returns {string}
 *
 * Exemple : formatMonnaie(1500000) → "1 500 000 FCFA"
 * Exemple : formatMonnaie(1500000, true) → "1,5M FCFA"
 */
export function formatMonnaie(montant, abrege = false) {
  if (montant === null || montant === undefined) return "—";

  if (abrege) {
    if (montant >= 1_000_000) return `${(montant / 1_000_000).toFixed(1)}M FCFA`;
    if (montant >= 1_000)     return `${(montant / 1_000).toFixed(0)}K FCFA`;
    return `${montant} FCFA`;
  }

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",          // CFA Franc BCEAO
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(montant);
}

// ── 2. FORMATAGE DES DATES ───────────────────────────────────

/**
 * Formate une date en format court français
 * @param {Date|string} date
 * @returns {string}
 *
 * Exemple : formatDate("2024-03-15") → "15 mar. 2024"
 */
export function formatDate(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    day:   "numeric",
    month: "short",
    year:  "numeric",
  }).format(new Date(date));
}

/**
 * Formate une date en format long français
 * @param {Date|string} date
 * @returns {string}
 *
 * Exemple : formatDateLong("2024-03-15") → "vendredi 15 mars 2024"
 */
export function formatDateLong(date) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day:     "numeric",
    month:   "long",
    year:    "numeric",
  }).format(new Date(date));
}

/**
 * Retourne le temps relatif (il y a X heures, hier, etc.)
 * @param {Date|string} date
 * @returns {string}
 *
 * Exemple : formatTempsRelatif(new Date(Date.now() - 3600000)) → "il y a 1 heure"
 */
export function formatTempsRelatif(date) {
  if (!date) return "—";
  const diff = Date.now() - new Date(date).getTime();
  const secondes = Math.floor(diff / 1000);
  const minutes  = Math.floor(secondes / 60);
  const heures   = Math.floor(minutes / 60);
  const jours    = Math.floor(heures / 24);

  if (secondes < 60)  return "À l'instant";
  if (minutes < 60)   return `il y a ${minutes} min`;
  if (heures < 24)    return `il y a ${heures}h`;
  if (jours === 1)    return "Hier";
  if (jours < 7)      return `il y a ${jours} jours`;
  return formatDate(date);
}

// ── 3. FORMATAGE DES NOMBRES ─────────────────────────────────

/**
 * Formate un nombre avec séparateur de milliers
 * @param {number} nombre
 * @param {number} decimales
 * @returns {string}
 *
 * Exemple : formatNombre(12450.5) → "12 450,5"
 */
export function formatNombre(nombre, decimales = 0) {
  if (nombre === null || nombre === undefined) return "—";
  return new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(nombre);
}

/**
 * Formate un pourcentage
 * @param {number} valeur - valeur entre 0 et 100
 * @returns {string}
 *
 * Exemple : formatPourcentage(87.5) → "87,5 %"
 */
export function formatPourcentage(valeur) {
  if (valeur === null || valeur === undefined) return "—";
  return `${new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(valeur)} %`;
}

// ── 4. FORMATAGE DES POIDS & SURFACES ───────────────────────

/**
 * Formate un poids avec son unité
 * @param {number} valeur
 * @param {string} unite
 * @returns {string}
 *
 * Exemple : formatQuantite(350, "kg") → "350 kg"
 */
export function formatQuantite(valeur, unite = "") {
  if (valeur === null || valeur === undefined) return "—";
  return `${formatNombre(valeur)} ${unite}`.trim();
}

// ── 5. CALCULS UTILITAIRES ───────────────────────────────────

/**
 * Calcule la variation en pourcentage entre deux valeurs
 * @param {number} ancienne
 * @param {number} nouvelle
 * @returns {number} pourcentage arrondi à 1 décimale
 *
 * Exemple : calculerVariation(100, 115) → +15
 * Exemple : calculerVariation(100, 80)  → -20
 */
export function calculerVariation(ancienne, nouvelle) {
  if (!ancienne || ancienne === 0) return 0;
  return Math.round(((nouvelle - ancienne) / ancienne) * 1000) / 10;
}

/**
 * Détermine le statut d'un stock selon le seuil
 * @param {number} quantite
 * @param {number} seuil
 * @returns {"ok"|"alerte"|"critique"|"rupture"}
 */
export function getStatutStock(quantite, seuil) {
  if (quantite <= 0)            return "rupture";
  if (quantite <= seuil * 0.5)  return "critique";
  if (quantite <= seuil)        return "alerte";
  return "ok";
}

/**
 * Tronque un texte à une longueur maximale
 * @param {string} texte
 * @param {number} longueur
 * @returns {string}
 *
 * Exemple : tronquer("Ferme agro-pastorale de Kpandai", 20) → "Ferme agro-pastoral..."
 */
export function tronquer(texte, longueur = 30) {
  if (!texte) return "";
  if (texte.length <= longueur) return texte;
  return `${texte.slice(0, longueur)}...`;
}

/**
 * Génère un ID unique simple (pour les formulaires front)
 * @returns {string}
 *
 * Exemple : genId() → "a3f2b1"
 */
export function genId() {
  return Math.random().toString(36).slice(2, 8);
}