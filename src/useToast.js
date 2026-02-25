// ============================================================
// src/hooks/useToast.js
// Hook de notifications toast — partagé entre les 3 solutions
// ============================================================
// USAGE :
//   const { toasts, success, error, warning, info, remove } = useToast();
//
//   success("Animal enregistré avec succès !");
//   error("Impossible de supprimer cet article.");
//   warning("Stock en dessous du seuil d'alerte.");
// ============================================================

import { useState, useCallback } from "react";
import { genId } from "../utils/formatters";

// Durée d'affichage par défaut (ms)
const DUREE_PAR_DEFAUT = 3500;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  // ── Supprime un toast par son id ──────────────────────────
  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ── Ajoute un toast générique ─────────────────────────────
  const add = useCallback(
    (message, type = "info", duree = DUREE_PAR_DEFAUT) => {
      const id = genId();

      setToasts((prev) => [...prev, { id, message, type }]);

      // Auto-suppression après la durée définie
      setTimeout(() => remove(id), duree);

      return id;
    },
    [remove]
  );

  // ── Raccourcis par type ───────────────────────────────────
  const success = useCallback((msg, duree) => add(msg, "success", duree), [add]);
  const error   = useCallback((msg, duree) => add(msg, "error",   duree), [add]);
  const warning = useCallback((msg, duree) => add(msg, "warning", duree), [add]);
  const info    = useCallback((msg, duree) => add(msg, "info",    duree), [add]);

  return { toasts, add, remove, success, error, warning, info };
}