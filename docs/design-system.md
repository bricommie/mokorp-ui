# Système de design — « Signal »

> Spec figée issue d'une session de design. Autonome et portable : à déposer dans le
> repo de la bibliothèque de composants. Toute implémentation doit s'y référer.

---

## 1. Identité

Minimalisme **brut**, inspiré de la sobriété de Wero : des neutres teintés de violet,
une encre presque noire, et **une seule couleur d'action, le lime**. La couleur se
mérite : elle signale ce qui est cliquable ou ce qui demande l'attention.

- **Clair** : fond gris violacé, cartes blanches, lime **bordé d'encre** (le lime seul
  se fond dans un fond clair, 1,07:1).
- **Sombre** : fond profond, cartes à peine relevées, lime seul.

Les deux faces partagent les mêmes rôles et le même comportement d'interaction :
seules les valeurs changent.

> Historique : ce thème remplace « Acid Terminal » (néo-brutalisme acide). La revue
> de design qui a mené au choix est dans le fil « Critiquer et améliorer le design ».

---

## 2. Architecture des tokens — 3 couches (multi-thèmes)

Objectif : ajouter un thème plus tard = écrire **un bloc CSS**, sans toucher aux composants.

```
[THÈME]        ensemble nommé de valeurs concrètes
    │          ex. "signal-light", "signal-dark", puis "mono", "pastel", "ocean"…
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

| Groupe     | Tokens                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Surfaces   | `--background`, `--foreground`                                                                                                               |
| Cartes     | `--card`, `--card-foreground`                                                                                                                |
| Popover    | `--popover`, `--popover-foreground`                                                                                                          |
| Actions    | `--primary`, `--primary-foreground`, `--primary-border`, `--primary-hover`                                                                   |
| Secondaire | `--secondary`, `--secondary-foreground`, `--secondary-hover`                                                                                 |
| Atténué    | `--muted`, `--muted-foreground`                                                                                                              |
| Accent     | `--accent`, `--accent-foreground`                                                                                                            |
| États      | `--destructive`, `--destructive-foreground`, `--destructive-hover`, `--success`, `--success-foreground`, `--warning`, `--warning-foreground` |
| Lignes     | `--border` (contrôles, ≥ 3:1), `--border-subtle` (surfaces), `--input`, `--ring` (focus)                                                     |
| Divers     | `--link` (liens), `--indicator` (jauges, barres de progression, curseurs)                                                                    |
| Graphiques | `--chart-1` … `--chart-5`                                                                                                                    |
| Sidebar    | `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-accent`, `--sidebar-border`, `--sidebar-ring`                           |

### Non-couleur (transverses)

- Rayons par rôle : `--radius-surface`, `--radius-field`, `--radius-item`,
  `--radius-control`, `--radius-pill` (utilitaires `rounded-surface`, etc.).
- Bordure : `--border-width` (utilitaire `border-(length:--border-width)`).
- Ombres : `--shadow-2xs` … `--shadow-2xl`, plus `--shadow-color`.
- Typo : `--font-display`, `--font-body`, `--font-mono`, `--font-serif`.

---

## 4. Thème « Signal » (clair + sombre)

Les valeurs vivent dans `src/lib/theme/themes/light.css` et `dark.css` : c'est la
source de vérité, ce tableau n'en est qu'un résumé.

| Token                  | Clair (`:root`, `.light`) | Sombre (`.dark`) |
| ---------------------- | ------------------------- | ---------------- |
| `background`           | `#F5F3F7`                 | `#121016`        |
| `foreground`           | `#16111C`                 | `#F2EFF6`        |
| `card` / `popover`     | `#FFFFFF`                 | `#1C1922`        |
| `primary`              | `#C8FF4D`                 | `#C8FF4D`        |
| `primary-foreground`   | `#16111C`                 | `#16111C`        |
| `primary-border`       | `#16111C`                 | `transparent`    |
| `secondary`            | `#6A2FB0`                 | `#B48CFF`        |
| `secondary-foreground` | `#FFFFFF`                 | `#16111C`        |
| `muted`                | `#EBE7EF`                 | `#28242F`        |
| `muted-foreground`     | `#5E566A`                 | `#AAA2B5`        |
| `destructive`          | `#C4122F`                 | `#FF6B7D`        |
| `success`              | `#0F6B3A`                 | `#4ADE80`        |
| `warning`              | `#A34B00`                 | `#FFB347`        |
| `border` / `input`     | `#8B8396`                 | `#6F6779`        |
| `border-subtle`        | `#E4E0EA`                 | `#2C2833`        |
| `ring`                 | `#16111C`                 | `#C8FF4D`        |
| `link`                 | `#6A2FB0`                 | `#B48CFF`        |
| `indicator`            | `#6A2FB0`                 | `#C8FF4D`        |

Tous les couples texte/fond passent 4,5:1, et les bordures de contrôle et le focus
passent 3:1, dans les deux faces.

### Ombres

Aplats : `shadow-2xs` à `shadow-md` valent `none`, donc cartes et alertes sont à plat.
Seules les **couches flottantes** (menus, popovers, dialogues : `shadow-lg` et plus)
gardent une ombre douce pour se détacher du contenu recouvert.

---

## 5. Géométrie

- **Rayons par rôle**, jamais par valeur : `surface` 18px (cartes, alertes, menus,
  dialogues), `field` 12px (champs), `item` 8px (option de menu, jour, case à cocher),
  `control` pilule (boutons), `pill` pilule (badges, avatars, interrupteurs, curseurs).
- **Bordures** : `--border-width` (1,5px). `border-subtle` sépare les surfaces,
  `border`/`input` délimitent les contrôles (≥ 3:1), `ring` signale le focus.

---

## 6. Typographie

4 slots sémantiques (re-assignables par projet sans toucher aux composants) :

| Slot      | Police            | Rôle                                                |
| --------- | ----------------- | --------------------------------------------------- |
| `display` | **Archivo** large | titres, héros, gros chiffres, logo                  |
| `body`    | **Archivo**       | corps de texte, labels, boutons, valeurs            |
| `mono`    | **IBM Plex Mono** | code, données, timestamps, tags                     |
| `serif`   | **Georgia**       | accent éditorial (légendes, citations, états vides) |

Échelle :

| Niveau       | Taille                     | Leading |
| ------------ | -------------------------- | ------- |
| hero         | `4rem`                     | `0.95`  |
| h1 / h2 / h3 | `3rem` / `2rem` / `1.5rem` | `0.95`  |
| body         | `16px` (sm `14px`)         | `1.5`   |
| label        | `12px`                     | `1.3`   |

**Motif `Label`** : `font-body text-sm font-semibold`, en casse normale.

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

## 7 bis. États interactifs

- **Survol / focus d'un item** (menu, select, combobox, command) : `bg-primary` +
  `text-primary-foreground` sur un `rounded-item`.
- **État sélectionné** : jamais une couleur de fond seule ; toujours un indicateur
  (coche, point, remplissage plein vs contour pour le `RatingGroup`). Un remplissage
  lime porte aussi `border-primary-border`.
- **Boutons pleins** : survol = `*-hover` (dérivé par `color-mix()` dans
  `tokens/states.css`) ; pression = `scale(0.98)`. Identique dans les deux faces.
- **Thème imbriquable** : `.light` et `.dark` peuvent être posés sur n'importe quel
  conteneur pour forcer une face dans une page de l'autre thème.

---

## 8. Règles d'or

1. **Tokens d'abord** : un changement visuel = une ligne dans le thème, pas 40 fichiers.
2. **Sémantique stable** : on ne renomme jamais un token sémantique ; on change sa valeur.
3. **Aucun hex en dur** dans un composant (garde-fou testable : un test Vitest qui
   échoue si un composant contient un littéral de couleur).
4. **Un rôle de rayon par composant** (`surface`, `field`, `item`, `control`, `pill`),
   jamais une valeur. Une bordure de contrôle passe 3:1 ; une bordure de surface est
   `border-subtle`.

---

## 9. Distribution

1. `mokorp-ui/theme.css` embarque Tailwind, les polices et les tokens.
2. `@source '../components'` dans `theme/index.css` : sans lui, l'app cliente ne
   génère pas les classes des composants (Tailwind ignore `node_modules`).
3. Fonts : `@fontsource-variable/archivo` (axes graisse et largeur) +
   `@fontsource/ibm-plex-mono` (slot `mono`). Georgia = système.
4. Storybook : la barre d'outils « Face » bascule clair/sombre sur chaque story.
