---
name: modifier-composant
description: Workflow pour modifier un composant Mokorp-ui existant (nouvelle prop ou variante, correctif de style, d'accessibilité ou de comportement, renommage) en gardant code, JSDoc, story, tests, exports et README synchronisés. Utiliser pour toute modification dans src/lib/components.
---

# Modifier un composant Mokorp-ui

Une modification n'est jamais « juste le code » : la story, la documentation IDE, les
tests, le README et la vitrine décrivent le même contrat que le composant. Ce skill
garantit qu'ils restent synchronisés et que les consommateurs ne sont pas cassés sans
le savoir.

Références : `docs/component-guide.md`, `docs/design-system.md`,
`src/docs/guides/EcrireUneStory.mdx`, et le skill `verifier-composant`.

## Étape 1 : inventorier ce qui touche le composant

Avant de modifier, lister (et garder la liste sous les yeux jusqu'à la fin) :

```sh
grep -rn "<Nom>\|<kebab>" src/lib src/stories src/routes src/docs README.md docs
```

- le ou les `.svelte` du composant, son `<kebab>.ts` de variants, son `index.ts` ;
- `src/stories/<Nom>.stories.svelte` ;
- ses tests (`*.svelte.test.ts`) ;
- les **autres composants qui l'utilisent** (ex. `DatePickerField` compose `Popover`,
  `Calendar`, `Button`) ;
- la vitrine `src/routes/_site/` et les pages MDX de `src/docs/` qui le citent ;
- son export dans `src/lib/index.ts` et sa ligne dans `README.md`.

## Étape 2 : qualifier le changement

| Type de changement                                                                                              | Impact semver | Commit                                                    |
| --------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| Correctif sans changement d'API (style, a11y, bug)                                                              | patch         | `fix(<kebab>): …`                                         |
| Ajout rétrocompatible (nouvelle prop optionnelle, variante)                                                     | minor         | `feat(<kebab>): …`                                        |
| Prop ou partie renommée/supprimée, défaut changé, valeur de variant supprimée, rendu DOM changé (rôle, élément) | **majeur**    | `feat(<kebab>)!: …` + pied `BREAKING CHANGE: <migration>` |

Un changement **cassant** ne se fait pas en silence : le signaler à l'utilisateur avant
de l'implémenter, proposer une alternative rétrocompatible si elle existe (garder
l'ancienne prop en alias dépréciée avec `@deprecated` dans son JSDoc), et écrire la
migration dans le message de commit et la PR.

Questions de design system à se poser, et à expliquer à l'utilisateur :

- La demande est-elle **locale** (ce composant) ou **systémique** ? Un changement de
  couleur, de rayon ou de durée qui devrait s'appliquer partout se fait dans les
  **tokens** (`src/lib/theme/`), pas dans le composant. On ne renomme jamais un token
  sémantique : on change sa valeur.
- Une nouvelle prop est-elle vraiment nécessaire, ou la composition (snippet, partie
  supplémentaire, `class`) suffit-elle ? Chaque prop est un contrat à maintenir.
- Le nom de la prop suit-il les conventions existantes (`variant`, `size`, `disabled`,
  `loading`, `onValueChange`…) ?

## Étape 3 : modifier le code

Mêmes règles qu'à la création (`docs/component-guide.md` et skill `creer-composant`,
étape 1) : tokens uniquement, un rôle de rayon, `data-*` pour les états, `$bindable()`
avec le défaut de Bits UI, `$derived` plutôt que `$effect`, `class` en dernier dans
`cn()`, `motion-reduce:` sur les animations.

Si un composant qui **utilise** celui-ci est affecté, le mettre à jour dans le même
changement.

## Étape 4 : synchroniser la documentation (checklist par type de changement)

**Nouvelle prop ou nouvelle valeur de variant**

- [ ] JSDoc `/** … */` sur la prop dans `type Props` (une phrase, valeurs possibles,
      `@default`) ;
- [ ] bloc `@component` : ajouter la prop aux puces des props clés si elle est
      structurante, mettre à jour l'exemple si besoin ;
- [ ] story : `argType` (`control`, `description`, `table.category`,
      `table.defaultValue`), `options` complétées pour un variant, et **une story pour
      le nouvel état** ;
- [ ] type exporté à jour (`XVariant` dérive de CVA : rien à faire, mais vérifier
      `src/lib/index.ts` si un nouveau type est créé).

**Prop renommée, supprimée ou défaut changé**

- [ ] tous les usages mis à jour (`grep` de l'étape 1, y compris stories, vitrine, MDX) ;
- [ ] `argTypes`, `args` et `defaultValue` de la story corrigés ;
- [ ] `@default` du JSDoc corrigé ; ancienne prop gardée en `@deprecated` si possible ;
- [ ] migration rédigée (commit + PR).

**Correctif d'accessibilité ou de comportement**

- [ ] une `play` (ou un test `*.svelte.test.ts`) qui **reproduit le bug avant le
      correctif** et passe après : le test doit échouer sans la correction ;
- [ ] section **Accessibilité** du bloc `@component` et de la description de la story
      mise à jour si ce que le consommateur doit fournir a changé.

**Correctif visuel**

- [ ] vérifier les deux faces et le mouvement réduit dans Storybook ;
- [ ] si une story ne montre pas l'état corrigé, l'ajouter (c'est elle que la revue
      visuelle comparera).

**Nouvelle partie (multi-parties)**

- [ ] fichier `<kebab>-<partie>.svelte` depuis `creer-composant/templates/partie-stylee.svelte`,
      avec son bloc `@component` ;
- [ ] export nommé dans l'`index.ts` du dossier ;
- [ ] **Anatomie** mise à jour dans le bloc `@component` du Root et dans la
      description de la story.

Dans tous les cas : le `README.md` (tableau des exports) et la vitrine
(`src/routes/_site/demos/`) reflètent l'API actuelle.

## Étape 5 : vérifier et livrer

Dérouler le skill `verifier-composant` sur le composant modifié **et** sur chaque
composant qui l'utilise, et rapporter le résultat réel des commandes. Puis commit selon
le tableau de l'étape 2 ; la PR liste le type de changement (patch / minor / majeur),
ce qui a été synchronisé, et la migration s'il y en a une.

## Restituer à l'utilisateur

Dire ce qui a changé dans l'API publique (ou « aucun changement d'API »), pourquoi la
solution passe par le composant plutôt que par les tokens (ou l'inverse), et ce qui
reste à vérifier à l'œil dans Storybook.
