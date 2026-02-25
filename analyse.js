/* global process */
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY non défini — la génération de contenu est désactivée.');
} else {
  const genAI = new GoogleGenerativeAI(apiKey);
  var model = genAI.getGenerativeModel({ model: "gemini-pro" });
}

// Lire un fichier passé en argument ou tous les fichiers JS/JSX du dossier courant
function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) {
      // Ignorer les dossiers volumineux ou dépendances
      if (/(node_modules|\.vite|public|dist|build)/.test(e.name)) continue;
      files = files.concat(collectFiles(p));
    } else if (/\.(js|jsx|mjs|ts|tsx)$/.test(e.name)) files.push(p);
  }
  return files;
}

let code = "";
const target = process.argv[2];
if (target) {
  if (!fs.existsSync(target)) {
    console.error(`Fichier introuvable: ${target}`);
    process.exit(1);
  }
  code = fs.readFileSync(target, "utf8");
} else {
  const files = collectFiles(process.cwd());
  if (files.length === 0) {
    console.error("Aucun fichier JS/JSX trouvé. Passez un chemin de fichier en argument.");
    process.exit(1);
  }
  for (const f of files) {
    code += `\n// File: ${f}\n` + fs.readFileSync(f, "utf8");
  }
}

async function run() {
  const prompt = `
  Analyse ce code JavaScript.
  Identifie les erreurs.
  Corrige-les et optimise.

  Code:
  ${code}
  `;

  try {
    const result = await model.generateContent(prompt);
    if (result && result.response && typeof result.response.text === 'function') {
      console.log(result.response.text());
    } else {
      console.log(result);
    }
  } catch (err) {
    console.error('Erreur lors de la génération:', err);
  }
}

run();
