# Pistes d'amélioration

## 1. Rendre la génération du README déterministe
- Problème actuel: `index.js` injecte des emojis aléatoires (`hey`, `love`, `robot`), ce qui crée des diffs non essentiels à chaque exécution.
- Amélioration proposée: remplacer l'aléatoire par une valeur stable (seed fixe, rotation journalière contrôlée, ou liste figée) pour éviter le bruit dans l'historique Git.
- Impact concret: historique plus lisible, revues plus rapides, moins de commits "cosmétiques".

## 2. Renforcer la CI pour éviter les boucles et commits inutiles
- Problème actuel: le workflow est déclenché sur `push`, `pull_request`, `workflow_dispatch` et `schedule`, puis commit automatiquement `README.md`.
- Amélioration proposée: limiter les déclencheurs (ex: `schedule` + `workflow_dispatch`) et ajouter une condition de commit seulement si le fichier a changé.
- Impact concret: exécutions GitHub Actions réduites, moins de bruit sur les PR, risque diminué de boucles de génération/commit.

## 3. Ajouter un minimum de validation automatique du générateur
- Problème actuel: absence de tests/lint visibles pour `index.js`.
- Amélioration proposée: ajouter une vérification simple (ex: test de snapshot sur la structure du README, contrôle de présence des sections clés, et lint JS basique).
- Impact concret: détection précoce des régressions de format, meilleure confiance lors des mises à jour automatiques.
