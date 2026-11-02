# Système de design — « Acid Terminal »

> Spec figée issue d'une session de design. Autonome et portable : à déposer dans le
> repo de la bibliothèque de composants. Toute implémentation doit s'y référer.

---

## 1. Identité

Néo-brutalisme **acide**, construit sur une **paire complémentaire vert ⇄ violet inversée**
entre les modes. Deux faces d'une même pièce :

- **Light** = sec, imprimé : offset dur, coins nets, encre violet-noir.
- **Dark** = électrique, néon : glow lime, fond violet profond.

Le style ne repose pas sur « une couleur de marque », mais sur **la paire** elle-même.
Consequence à trancher plus tard (hors spec) : le « représentant » de la paire hors
contexte (logo, favicon, bannière marketing).

---

## 2. Architecture des tokens — 3 couches (multi-thèmes)

Objectif : ajouter un thème plus tard = écrire **un bloc CSS**, sans toucher aux composants.

```
[THÈME]        ensemble nommé de valeurs concrètes
    │          ex. "acid-light", "acid-dark", puis "mono", "pastel", "ocean"…
    ▼
[SÉMANTIQUE]   le CONTRAT : noms stables consommés par les composants
    │          ex. --background, --primary, --border, --ring, --radius…
    ▼
[COMPOSANT]    référence uniquement le sémantique via les utilitaires Tailwind
               ex. bg-card, text-foreground, border-border, shadow-md…
```

Règles :

- Un thème = un sélecteur CSS (`:root` pour le light par défaut, `.dark`, puis
  `[data-theme="mono"]`, `[data-theme="ocean"]`…) qui assigne **les mêmes noms
  sémantiques** à des valeurs différentes.
- Les noms sémantiques **ne changent jamais**. Seule leur valeur change par thème.
- Les composants ne voient **jamais** de valeur brute (hex, oklch) : ils ne connaissent
  que le sémantique.

---

## 3. Contrat sémantique (liste canonique des tokens)

### Couleurs (par thème)

| Groupe     | Tokens                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Surfaces   | `--background`, `--foreground`                                                                                     |
| Cartes     | `--card`, `--card-foreground`                                                                                      |
| Popover    | `--popover`, `--popover-foreground`                                                                                |
| Actions    | `--primary`, `--primary-foreground`                                                                                |
| Secondaire | `--secondary`, `--secondary-foreground`                                                                            |
| Atténué    | `--muted`, `--muted-foreground`                                                                                    |
| Accent     | `--accent`, `--accent-foreground`                                                                                  |
| Erreur     | `--destructive`, `--destructive-foreground`                                                                        |
| Lignes     | `--border` (encre), `--input`, `--ring` (focus)                                                                    |
| Graphiques | `--chart-1` … `--chart-5`                                                                                          |
| Sidebar    | `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-accent`, `--sidebar-border`, `--sidebar-ring` |

### Non-couleur (transverses)

- Rayon : `--radius` (structurel) — l'organique utilise `rounded-full` (9999px).
- Ombres : `--shadow-2xs` … `--shadow-2xl`, plus `--shadow-color`.
- Typo : `--font-display`, `--font-body`, `--font-mono`, `--font-serif`.

---

## 4. Thème « Acid » (premier thème, light + dark)

### Light (sélecteur `:root`)

| Token                    | Valeur                                            |
| ------------------------ | ------------------------------------------------- |
| `background`             | `#AEFF4F`                                         |
| `foreground`             | `#240033`                                         |
| `card`                   | `#CCFF9A`                                         |
| `card-foreground`        | `#240033`                                         |
| `popover`                | `#CCFF9A`                                         |
| `popover-foreground`     | `#240033`                                         |
| `primary`                | `#690087`                                         |
| `primary-foreground`     | `#F8F8F8`                                         |
| `secondary`              | `#F07A00`                                         |
| `secondary-foreground`   | `#330F00`                                         |
| `muted`                  | `#A2D372`                                         |
| `muted-foreground`       | `#4F0B68`                                         |
| `accent`                 | `#690087` ( = primary)                            |
| `accent-foreground`      | `#F8F8F8`                                         |
| `destructive`            | `#DD001D`                                         |
| `destructive-foreground` | `#F8F8F8`                                         |
| `border`                 | `#240033` (encre)                                 |
| `input`                  | `#240033` (encre)                                 |
| `ring`                   | `#690087` (primary)                               |
| `chart-1…5`              | `#7E00A7 · #9EF927 · #F38300 · #38004C · #FF0013` |
| `sidebar`                | `#150A29` (toujours sombre)                       |
| `sidebar-foreground`     | `#EEEBF7`                                         |
| `sidebar-primary`        | `#9EF927`                                         |
| `sidebar-border`         | `#2C1E43`                                         |

### Dark (sélecteur `.dark`)

| Token                    | Valeur                                            |
| ------------------------ | ------------------------------------------------- |
| `background`             | `#300041`                                         |
| `foreground`             | `#ADFF42`                                         |
| `card`                   | `#230033`                                         |
| `card-foreground`        | `#F1EEFF`                                         |
| `popover`                | `#230033`                                         |
| `popover-foreground`     | `#F1EEFF`                                         |
| `primary`                | `#A3FF1F`                                         |
| `primary-foreground`     | `#210033`                                         |
| `secondary`              | `#FB7E00`                                         |
| `secondary-foreground`   | `#330F00`                                         |
| `muted`                  | `#430458`                                         |
| `muted-foreground`       | `#91D347`                                         |
| `accent`                 | `#A3FF1F` ( = primary)                            |
| `accent-foreground`      | `#210033`                                         |
| `destructive`            | `#FF1329`                                         |
| `destructive-foreground` | `#F8F8F8`                                         |
| `border`                 | `#F1EEFF` (encre, dosée à l'opacité)              |
| `input`                  | `#F1EEFF`                                         |
| `ring`                   | `#A3FF1F` (primary)                               |
| `chart-1…5`              | `#C72CFF · #A3FF1F · #FF8700 · #752F8F · #FF2835` |
| `sidebar`                | `#11082B`                                         |
| `sidebar-foreground`     | `#F1F0F9`                                         |
| `sidebar-primary`        | `#A3FF1F`                                         |
| `sidebar-border`         | `#1C122E`                                         |

### Ombres

- **Light** — offset dur, _élévation = décalage_, zéro flou, couleur = encre `#240033` :
  - `2xs: 1px 1px 0` · `xs: 2px 2px 0` · `sm: 3px 3px 0` · `md: 4px 4px 0` ·
    `lg: 6px 6px 0` · `xl: 8px 8px 0` · `2xl: 12px 12px 0`.
- **Dark** — glow lime, _élévation = étendue_, réservé aux éléments **élevés**
  (cartes, modales, popovers, boutons), opacité ≤ 1, couleur = primary `#A3FF1F` :
  - `2xs/xs: aucun` · `sm: 0 0 12px -3px` · `md: 0 0 16px -4px` ·
    `lg: 0 0 24px -4px` · `xl: 0 0 32px -6px` · `2xl: 0 0 48px -8px`.

---

## 5. Géométrie

- **Radius** : `0` structurel (cartes, boutons, inputs, champs) · `9999px` organique
  (avatars, badges-compteurs, toggles, chips/pills). Règle : _un composant est soit
  structurel, soit organique._
- **Bordures** : `--border` = encre, **2px**, nette, pour la structure. `--ring` =
  primary, réservé à l'interaction (survol / focus / sélection). Règle : _structure =
  encre, interaction = primary._

---

## 6. Typographie

4 slots sémantiques (re-assignables par projet sans toucher aux composants) :

| Slot      | Police            | Rôle                                                |
| --------- | ----------------- | --------------------------------------------------- |
| `display` | **Chakra Petch**  | titres, héros, gros chiffres, logo                  |
| `body`    | **IBM Plex Mono** | corps de texte, labels, boutons, valeurs            |
| `mono`    | **IBM Plex Mono** | code, données, timestamps, tags                     |
| `serif`   | **Georgia**       | accent éditorial (légendes, citations, états vides) |

Échelle :

| Niveau       | Taille                     | Leading |
| ------------ | -------------------------- | ------- |
| hero         | `4rem`                     | `0.95`  |
| h1 / h2 / h3 | `3rem` / `2rem` / `1.5rem` | `0.95`  |
| body         | `16px` (sm `14px`)         | `1.5`   |
| label        | `12px`                     | `1.3`   |

**Motif signature — `Label`** : `font-mono · text-xs · uppercase · tracking-[0.08em]`.
Pas de tracking global sur le corps (le mono a déjà son rythme).

---

## 7. Conventions composants

- **API de variants** : `class-variance-authority` (CVA) + `clsx` + `tailwind-merge`
  via un helper `cn()`. Props `variant` / `size` façon shadcn.
- **Styles** : uniquement des utilitaires Tailwind qui pointent vers le sémantique.
  **Jamais de valeur brute (hex/oklch) dans un composant.**
- **Stack** : SvelteKit 5 (runes) + Tailwind v4 + Storybook.
- **Composants d'amorçage** (ordre de construction) : `Label`, `Button`, `Card`,
  `Badge`, `Input`.

---

## 7 bis. États interactifs (ajout)

- **Survol / focus d'un item** (menu, select, combobox, command) : inversion
  `bg-primary` + `text-primary-foreground` — comme une sélection de terminal.
- **État sélectionné** : jamais une couleur de fond seule ; toujours un indicateur
  (coche, point, remplissage plein vs contour pour le `RatingGroup`).
- **Bouton plein** : survol = décalage de −2px et ombre `lg` ; pression = décalage de
  +4px et ombre supprimée (le bouton « tombe » sur son ombre).
- **Thème imbriquable** : `.light` et `.dark` peuvent être posés sur n'importe quel
  conteneur pour forcer une face dans une page de l'autre thème.

---

## 8. Règles d'or

1. **Tokens d'abord** : un changement visuel = une ligne dans le thème, pas 40 fichiers.
2. **Sémantique stable** : on ne renomme jamais un token sémantique ; on change sa valeur.
3. **Aucun hex en dur** dans un composant (garde-fou testable : un test Vitest qui
   échoue si un composant contient un littéral de couleur).
4. **Un composant = structurel ou organique** (radius), et sa bordure = encre sauf
   interaction = primary.

---

## 9. À faire à l'atterrissage dans le nouveau repo

1. Installer Tailwind v4 (`@tailwindcss/vite`) + `app.css` portant les tokens
   (thème `acid` en `:root` / `.dark`, structure prête pour `[data-theme="…"]`).
2. Fonts : `@fontsource/chakra-petch` + `@fontsource/ibm-plex-mono` (Georgia = système).
3. Helper `cn()` + `class-variance-authority`.
4. Composants `Label`, `Button`, `Card`, `Badge`, `Input` + stories Storybook.
5. Test garde-fou « aucun hex en dur ».
6. (Plus tard) `ThemeToggle` + thèmes supplémentaires via `[data-theme="…"]`.
