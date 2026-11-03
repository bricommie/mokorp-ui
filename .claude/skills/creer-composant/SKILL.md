---
name: creer-composant
description: Workflow complet pour créer un nouveau composant Mokorp-ui (wrapper Bits UI, tokens, JSDoc @component, story Storybook, tests, export, vitrine). Utiliser dès qu'on ajoute un composant ou une partie de composant à src/lib/components.
---

# Créer un composant Mokorp-ui

Un composant Mokorp-ui est un **wrapper stylé** autour d'une primitive headless Bits UI :
Bits UI apporte le comportement et l'accessibilité, Mokorp-ui apporte l'apparence,
**uniquement via des design tokens**. Le travail n'est pas fini tant que la story, la
documentation IDE, les tests et l'export ne sont pas livrés avec le code.

Références (les lire, ne pas les réinventer) :

- `docs/component-guide.md` : patterns de wrapper, recettes de classes, leçons de l'audit ;
- `docs/design-system.md` : tokens, rôles de rayon, états interactifs ;
- `src/docs/guides/EcrireUneStory.mdx` : conventions de stories ;
- `templates/` (à côté de ce fichier) : squelettes prêts à copier.

## Étape 0 : cadrer avant de coder

Répondre explicitement, et le dire à l'utilisateur s'il y a un doute :

1. **Besoin** : quel problème d'interface, et aucun composant existant ne le couvre-t-il
   déjà (`src/lib/index.ts`) ? Un nouveau variant d'un composant existant vaut souvent
   mieux qu'un nouveau composant (dans ce cas, utiliser le skill `modifier-composant`).
2. **Primitive Bits UI** : lire `node_modules/bits-ui/dist/bits/<kebab>/exports.d.ts`
   pour les noms exacts des parties et des types `*Props`. Ne jamais deviner. Si Bits UI
   n'a pas de primitive, construire sur l'élément HTML natif le plus sémantique.
3. **Motif ARIA** : identifier le motif APG (button, disclosure, listbox, dialog…) et
   le comportement clavier attendu.
4. **Structure** : mono-partie ou multi-parties (voir tableau ci-dessous).
5. **Famille Storybook** : Actions, Formulaires, Dates et heures, Superpositions,
   Navigation, Données et retours, Mise en page.
6. **Tokens** : rôle de rayon, couples de couleurs, rôle de durée et de courbe.

| Cas               | Fichiers                                                            |
| ----------------- | ------------------------------------------------------------------- |
| Une seule partie  | `src/lib/components/<PascalCase>.svelte`                            |
| Plusieurs parties | `src/lib/components/<kebab>/<kebab>[-<partie>].svelte` + `index.ts` |
| Variants          | `src/lib/components/<kebab>.ts` (`cva()`) à côté du composant       |
| Story             | `src/stories/<PascalCase>.stories.svelte`                           |
| Test du wrapper   | `<même dossier que le composant>/<PascalCase>.svelte.test.ts`       |

## Étape 1 : le composant

Partir des templates (remplacer `Xxx` par le namespace Bits UI, `Composant` /
`composant` par le nom, `ROLE` par le rôle de rayon, `SLUG` par le slug de la doc Bits
UI, et chaque `‹…›` par du vrai contenu) :

| Template               | Pour                                          |
| ---------------------- | --------------------------------------------- |
| `Composant.svelte`     | mono-partie avec variants                     |
| `variants.ts`          | variants CVA (`<kebab>.ts`)                   |
| `partie-racine.svelte` | `Root` d'un multi-parties, avec prop bindable |
| `partie-stylee.svelte` | toute autre partie stylée                     |
| `index.ts`             | réexport des parties d'un multi-parties       |

Règles à tenir pendant l'écriture (détail dans `docs/component-guide.md`) :

- `type Props` étend le type Bits UI ; `class: className` extrait et passé **en dernier**
  à `cn()` ; `{...rest}` transmis à la primitive.
- Props bindables : `$bindable()` avec **le même défaut que Bits UI** (lu dans
  `node_modules/bits-ui/dist/bits/<kebab>/components/*.svelte`), puis `bind:` explicite.
- États stylés par les `data-*` de Bits UI, jamais par des props booléennes.
- `$derived` pour dériver, pas `$effect`. Snippets (`children`, `child`), pas de `<slot>`.
- Indicateurs intégrés (chevron, coche) : ne pas les demander au consommateur.
- `Portal` réexporté depuis `bits-ui`, jamais wrappé.
- Aucune couleur brute, un seul rôle de rayon, `border-(length:--border-width)`,
  recettes partagées du guide §3 (focus, surface flottante, item, indicateur),
  `motion-reduce:` sur toute animation non déclenchée par l'utilisateur.

## Étape 2 : la documentation IDE

Chaque `.svelte` créé (y compris chaque partie) commence par un bloc `@component`
conforme à la convention (`docs/component-guide.md`, vérifiée par
`src/lib/components/docs.test.ts`) :

- racine ou mono-partie : `**Nom** — description`, quand l'utiliser, **Anatomie**
  (multi-parties), props clés en puces, **Accessibilité**, exemple ```svelte ;
- partie : `**X.Partie** — …` en 1 à 3 phrases ;
- dernière ligne `[API Bits UI](https://bits-ui.com/docs/components/<slug>)` ;
- JSDoc `/** … */` uniquement sur les props **ajoutées** par Mokorp-ui, avec
  `@default` quand il y a un défaut.

## Étape 3 : la story

Copier `templates/Composant.stories.svelte` vers `src/stories/<Nom>.stories.svelte`,
puis :

- `title: 'Composants/<Famille>/<Nom>'`, `component` = le composant (ou `X.Root`) ;
- description : quand l'utiliser, anatomie, accessibilité ;
- un `argType` par prop de design avec `control`, `description` en français,
  `table.category` (**obligatoire**) et `table.defaultValue` ; `args` par défaut ;
- stories : `Default` pilotée par les args, une par variante ou état visible, une
  `asChild` interactive avec `$state` si le composant a un `bind:` ;
- au moins une `play` qui prouve le comportement clé (clavier, ARIA, valeur).

## Étape 4 : les tests

- **Interactions et ARIA** : dans les `play` des stories (projet Vitest `storybook`).
- **Logique propre au wrapper** (prop bindable, `loading`, handler intercepté, état
  dérivé) : `templates/Composant.svelte.test.ts`, à placer à côté du composant
  (`*.svelte.test.ts`, projet Vitest `client`, `vitest-browser-svelte`). Ne pas
  re-tester ce que Bits UI garantit déjà.
- Un wrapper purement stylistique (une partie sans logique) n'a pas besoin de test
  dédié : sa story et les garde-fous suffisent.

## Étape 5 : export, README, vitrine

1. `src/lib/index.ts`, dans la bonne section :
   `export { default as Nom } from './components/Nom.svelte';` ou
   `export * as Nom from './components/<kebab>/index.js';`, plus les variants et types
   (`export { nomVariants, type NomVariant } from './components/<kebab>.js';`).
2. `README.md` : ajouter le composant au tableau « Ce qui est exporté ».
3. Vitrine : ajouter une démo dans `src/routes/_site/demos/<Famille>Demos.svelte`.

## Étape 6 : vérifier et livrer

Dérouler **intégralement** le skill `verifier-composant` (checklist + commandes) et
rapporter le résultat réel de chaque commande. Puis :

- commit en Conventional Commits, en français :
  `feat(<kebab>): ajouter le composant <Nom>` ;
- dans la PR, lister ce qui a été livré (composant, story, tests, export, README,
  vitrine) et ce qui a été vérifié à la main (faces claire/sombre, mouvement réduit,
  panneau Accessibility).

## Restituer à l'utilisateur

Expliquer les choix de design system faits pendant la création (rôle de rayon choisi
et pourquoi, motif ARIA suivi, props exposées et pourquoi pas d'autres), en mentor :
le but est que l'utilisateur sache refaire le raisonnement seul.
