// ============================================================
// src/components/ui/ToastContainer.jsx
// Affichage des notifications toast — partagé entre les 3 solutions
// ============================================================
// USAGE dans App.jsx :
//   const toast = useToast();
//   <ToastContainer toasts={toast.toasts} onRemove={toast.remove} />
// ============================================================

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import clsx from "clsx";

// ── Configuration visuelle par type de toast ─────────────────
const TOAST_CONFIG = {
  success: {
    icon:       CheckCircle,
    container:  "bg-white border-l-4 border-green-500",
    iconColor:  "text-green-500",
    title:      "Succès",
  },
  error: {
    icon:       XCircle,
    container:  "bg-white border-l-4 border-red-500",
    iconColor:  "text-red-500",
    title:      "Erreur",
  },
  warning: {
    icon:       AlertTriangle,
    container:  "bg-white border-l-4 border-amber-500",
    iconColor:  "text-amber-500",
    title:      "Attention",
  },
  info: {
    icon:       Info,
    container:  "bg-white border-l-4 border-blue-500",
    iconColor:  "text-blue-500",
    title:      "Information",
  },
};

// ── Composant individuel Toast ────────────────────────────────
function Toast({ toast, onRemove }) {
  const [visible, setVisible] = useState(false);
  const config = TOAST_CONFIG[toast.type] || TOAST_CONFIG.info;
  const Icon = config.icon;

  // Animation d'entrée
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={clsx(
        // Styles de base
        "flex items-start gap-3 p-4 rounded-xl shadow-card-lg max-w-sm w-full",
        // Couleur selon le type
        config.container,
        // Animation d'entrée/sortie
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8"
      )}
      role="alert"
    >
      {/* Icône */}
      <Icon className={clsx("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />

      {/* Contenu */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {config.title}
        </p>
        <p className="text-sm text-gray-800 mt-0.5 leading-snug">
          {toast.message}
        </p>
      </div>

      {/* Bouton fermer */}
      <button
        onClick={() => onRemove(toast.id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Fermer la notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Conteneur principal des toasts ───────────────────────────
// Positionné en haut à droite de l'écran, fixe
export default function ToastContainer({ toasts, onRemove }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      className="fixed top-4 right-4 z-50 flex flex-col gap-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}