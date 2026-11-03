---
name: verifier-composant
description: Definition of Done d'un composant Mokorp-ui (tokens, accessibilité, JSDoc, story, tests, exports). Utiliser pour auditer ou relire un composant, et en fin de création ou de modification.
---

# Vérifier un composant Mokorp-ui

Ce skill est la **Definition of Done** partagée. Les skills `creer-composant` et
`modifier-composant` s'y terminent ; on peut aussi l'appeler seul pour auditer un
composant existant ou relire une PR.

Sources de vérité, à relire en cas de doute (ne pas les recopier ici) :

- `docs/design-system.md` : tokens, rôles de rayon, états interactifs, règles d'or ;
- `docs/component-guide.md` : patterns de wrapper Bits UI et leçons de l'audit (§0 bis) ;
- `src/docs/guides/EcrireUneStory.mdx` et `src/docs/guides/Accessibilite.mdx`.

## Comment conduire l'audit

1. Identifier les fichiers du composant : le `.svelte` (ou le dossier `<kebab>/`),
   l'éventuel `<kebab>.ts` de variants CVA, la story `src/stories/<Nom>.stories.svelte`,
   les tests `*.svelte.test.ts`, l'export dans `src/lib/index.ts`.
2. Parcourir la checklist ci-dessous **section par section**. Pour chaque point,
   noter ✅, ❌ (avec `fichier:ligne` et la correction proposée) ou « n/a ».
3. Lancer les commandes de la section 8 et rapporter leur sortie réelle.
4. Restituer : d'abord les **points forts**, puis les **axes d'amélioration** classés
   par gravité (bloquant, important, confort), chacun avec le _pourquoi_ (règle du
   design system ou critère WCAG concerné). C'est une relecture pédagogique : expliquer
   la règle, pas seulement la violation.

## Checklist

### 1. API et réactivité (Svelte 5)

- [ ] `<script lang="ts">`, props lues avec `$props()` et typées par un `type Props`.
- [ ] `Props` étend le type Bits UI de la partie (`XPrimitive.RootProps`…) ; on ne
      redéclare pas ce que Bits UI fournit déjà.
- [ ] Props bindables (`value`, `open`, `checked`…) déclarées avec `$bindable()` **et le
      même défaut que Bits UI**, puis liées explicitement (`bind:value`). Un simple
      `{...rest}` casse `bind:`.
- [ ] `class: className` extrait, passé **en dernier** à `cn()` (la classe du
      consommateur gagne).
- [ ] `{...rest}` est transmis à la primitive (attributs HTML/ARIA, `ref`, `child`).
- [ ] Contenu passé par **snippets** (`children`, snippets nommés), pas de `<slot>`.
- [ ] Valeurs dérivées avec `$derived`, jamais calculées dans un `$effect`.
- [ ] Noms de props alignés sur l'existant : `variant`, `size`, `disabled`, `loading`,
      `value`, `open`, `orientation`… Booléens à l'affirmative (`loading`, pas
      `notReady`). Événements en `onXxx` (`onValueChange`).
- [ ] Le composant fait **une** chose : s'il dépasse ~3 props de configuration
      orthogonales, envisager un composant multi-parties (composition) plutôt qu'une
      API à options.

### 2. Design tokens

- [ ] Aucune couleur brute (hex, `oklch()`, `rgb()`…) : uniquement des utilitaires
      sémantiques (`bg-card`, `text-foreground`…). Garde-fou : `colors.test.ts`.
- [ ] Couleurs utilisées en **couples** `bg-x` + `text-x-foreground`.
- [ ] **Un** rôle de rayon (`rounded-surface | field | item | control | pill`), choisi
      selon `docs/component-guide.md` §4.
- [ ] Bordures : `border-(length:--border-width)`, jamais `border-2`.
- [ ] Toute transition utilise un rôle de durée (`duration-instant|fast|base|slow`) et
      de courbe (`ease-standard|enter|exit|emphasized`).
- [ ] Pas de valeur arbitraire (`[13px]`, `[#…]`) quand un token ou l'échelle Tailwind
      existe.
- [ ] Typographie : `font-body text-sm` pour les contrôles, `font-display` pour les titres.
- [ ] Recettes partagées réutilisées telles quelles (focus, surface flottante, item de
      menu, indicateur de contrôle : `docs/component-guide.md` §3).

### 3. États interactifs

- [ ] États stylés via les attributs `data-*` de Bits UI (`data-[state=open]`,
      `data-[highlighted]`, `data-[disabled]`), pas via des props booléennes.
- [ ] Survol/focus d'un item = inversion `bg-primary text-primary-foreground`.
- [ ] Sélection jamais signalée par la couleur seule (coche, point, remplissage).
- [ ] États contradictoires protégés (`not-data-[selected]:hover:…`).
- [ ] Désactivé : `data-[disabled]:pointer-events-none data-[disabled]:opacity-50`
      (ou `disabled:` pour un élément natif).

### 4. Accessibilité (WCAG 2.2 AA)

- [ ] Rôle et sémantique natifs conservés (on ne remplace pas un `<button>` par un
      `<div>`). On ne retire pas un rôle ARIA posé par Bits UI.
- [ ] Focus visible avec la recette `focus-visible:ring-2 ring-ring ring-offset-2
ring-offset-background`, jamais `outline-none` seul.
- [ ] Navigation clavier complète (Tab, flèches, Échap, Entrée/Espace selon le motif
      ARIA APG du composant).
- [ ] Nom accessible garanti ou **documenté** comme requis (`aria-label` pour un bouton
      icône, `Label` associé pour un champ).
- [ ] Icônes décoratives en `aria-hidden="true"` ; textes réservés aux lecteurs d'écran
      en `sr-only`.
- [ ] États dynamiques annoncés (`aria-busy`, `aria-invalid`, `aria-expanded`…).
- [ ] Contrastes : texte 4.5:1, bordures de contrôle et focus 3:1, **dans les deux
      faces**.
- [ ] Cible tactile ≥ 24×24 px (viser 44 px pour une action principale).
- [ ] Mouvement : toute animation non déclenchée par l'utilisateur est neutralisée par
      `motion-reduce:`.
- [ ] Panneau **Accessibility** de Storybook sans violation sur chaque story.

### 5. Documentation IDE (JSDoc)

Convention : `docs/component-guide.md` (§ 5 bis « Documentation IDE ») ; garde-fou :
`src/lib/components/docs.test.ts`. svelte-package recopie le bloc `@component` en
JSDoc dans `dist/*.svelte.d.ts` : c'est ce que l'IDE du consommateur affiche au survol.

- [ ] **Chaque** `.svelte` de `src/lib/components/` commence, avant `<script>`, par un
      commentaire HTML dont la première ligne est `@component`, en français.
- [ ] Composant racine ou mono-partie : `**Nom** — description`, quand l'utiliser (et
      quoi utiliser à la place), **Anatomie** si multi-parties, liste à puces des props
      clés (`bind:` possibles, props obligatoires), **Accessibilité**, puis un exemple
      dans un bloc ```svelte.
- [ ] Partie d'un composant : `**X.Partie** — …` en 1 à 3 phrases (rôle, props
      obligatoires, comportement intégré).
- [ ] Wrapper Bits UI : dernière ligne `[API Bits UI](https://bits-ui.com/docs/components/<slug>)`.
- [ ] Jamais de fermeture de commentaire HTML (`-->`) dans le texte du bloc.
- [ ] `type Props = …` reste local (pas d'interface exportée). Seules les props
      **ajoutées** par Mokorp-ui ont un JSDoc : une phrase, les valeurs possibles pour
      un variant, et `@default <valeur>` si la prop a un défaut. Les props héritées de
      Bits UI ou des attributs HTML ne sont **pas** redocumentées.
- [ ] `class` et `children` ne sont documentés que sur les composants HTML natifs (Card,
      Alert…), en une phrase.
- [ ] Les variants CVA (`<kebab>.ts`) ont un bloc JSDoc expliquant les choix de tokens.
- [ ] Les commentaires internes expliquent le **pourquoi** (ex. `aria-disabled` plutôt
      que `disabled`), pas le quoi.

### 6. Story Storybook

- [ ] Fichier `src/stories/<Nom>.stories.svelte` en Svelte CSF (`defineMeta` dans
      `<script module>`).
- [ ] `title: 'Composants/<Famille>/<Nom>'`, famille parmi : Actions, Formulaires, Dates
      et heures, Superpositions, Navigation, Données et retours, Mise en page.
- [ ] `parameters.docs.description.component` : 1. quand l'utiliser, 2. anatomie
      (multi-parties), 3. accessibilité.
- [ ] Un `argType` par prop de design (variants, tailles, états) : `control`,
      `description` en français, `table.category` (**obligatoire**) et
      `table.defaultValue`. Catégories : Props, Événements, Snippets, Svelte.
- [ ] `args` par défaut dans la méta ; une story `Default` pilotée par les args.
- [ ] Une story par état ou variante visible, nommée par état (`Disabled`, `Loading`,
      `With icon`), pas par numéro.
- [ ] Composant à état : une story `asChild` avec `$state` local **en plus** de la
      story pilotée par les args.
- [ ] Au moins une fonction `play` qui prouve le comportement clé (clavier, ouverture,
      valeur, attribut ARIA).
- [ ] Vérifiée en Face **Claire** et **Sombre**, et en Mouvement **Réduit**.

### 7. Tests

- [ ] Interactions et ARIA testées par les `play` des stories (exécutées par le projet
      Vitest `storybook`).
- [ ] Logique propre au wrapper (prop bindable, `loading`, handler intercepté, valeur
      dérivée) couverte par un test `*.svelte.test.ts` à côté du composant (projet
      Vitest `client`, `vitest-browser-svelte`).
- [ ] Garde-fous verts : couleurs (`colors.test.ts`) et blocs `@component` (`docs.test.ts`).
- [ ] Aucun test désactivé (`.skip`, `.todo`) pour faire passer la suite.

### 8. Export, distribution et vitrine

- [ ] Exporté dans `src/lib/index.ts`, dans la bonne section : `export { default as X }`
      (mono-partie) ou `export * as X from './components/x/index.js'` (namespace).
      Variants et types exportés avec leur composant (`xVariants`, `type XVariant`).
- [ ] `index.ts` du dossier : exports nommés des parties ; `Portal` réexporté depuis
      `bits-ui`, jamais wrappé.
- [ ] Imports relatifs avec extension `.js` dans `src/lib` (`../cn.js`) ; `#lib/…` dans
      les stories uniquement.
- [ ] Tableau « Ce qui est exporté » du `README.md` à jour.
- [ ] Démo ajoutée dans la vitrine (`src/routes/_site/demos/<Famille>Demos.svelte`) si
      le composant est public.
- [ ] Pas de nouvelle dépendance ; si un peer est nécessaire, il va dans
      `peerDependencies` **et** `devDependencies`.

### 9. Commandes (rapporter la sortie réelle)

```sh
npm run check                                   # svelte-check : 0 erreur, 0 warning
npm run lint                                    # prettier + eslint
npx vitest run --project server                 # garde-fous couleurs et @component
npx vitest run --project client                 # tests *.svelte.test.ts (navigateur)
npx vitest run --project storybook              # stories + fonctions play
npm run build                                   # svelte-package + publint
```

Si une commande échoue pour une raison d'environnement (navigateur Playwright absent,
réseau), le dire explicitement plutôt que de cocher la case.
