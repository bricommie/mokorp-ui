# mokorp-ui

Bibliothèque de composants **Svelte 5** du design system **« Signal »** : minimalisme
brut, neutres teintés de violet, encre presque noire et **une seule couleur d'action, le
lime**. Chaque composant est un wrapper stylé autour d'une primitive headless
[Bits UI](https://www.bits-ui.com) : Bits UI apporte le comportement et l'accessibilité,
mokorp-ui apporte l'apparence, uniquement via des **design tokens**.

- **Stack** : Svelte 5 (runes, snippets) · SvelteKit · Tailwind CSS v4 · Bits UI 2 · Storybook 10
- **Deux faces** : claire (`:root`) et sombre (`.dark`), imbriquables, mêmes rôles et même
  comportement
- **Accessibilité** : WCAG 2.2 AA visé, contrastes vérifiés dans les deux faces, mouvement
  réductible

> 📚 **La documentation de référence est dans Storybook** (`npm run storybook`) :
> installation, fondations (couleurs, typographie, espacements, rayons, élévation,
> mouvement), guides (accessibilité, écrire une story, créer un composant) et une page
> Docs générée pour chaque composant.

## Installation

```sh
npm install mokorp-ui bits-ui @internationalized/date
```

`bits-ui`, `@internationalized/date`, `svelte` (≥ 5.20) et `tailwindcss` (v4) sont des
**peerDependencies** : l'app doit utiliser **Tailwind CSS v4**, car le thème est une source
Tailwind et c'est votre build qui génère les classes des composants.

Tant que le paquet n'est pas publié sur npm, installez-le depuis GitHub (npm construit
`dist` via le script `prepare`) ; ajoutez `#v0.1.0` ou `#<commit>` pour figer une version :

```sh
npm install github:bricommie/mokorp-ui bits-ui @internationalized/date
```

```css
/* src/app.css : remplace votre `@import 'tailwindcss'` */
@import 'mokorp-ui/theme.css';
```

Détails, script anti-flash de thème et dépannage : Storybook › **Démarrer › Installation**.

## Usage

```svelte
<script lang="ts">
	import { Button, Select, DatePickerField } from 'mokorp-ui';
	import type { DateValue } from '@internationalized/date';

	let fruit = $state('apple');
	let date = $state<DateValue>();
</script>

<!-- Composant simple : configuré par props -->
<Button variant="primary">Envoyer</Button>

<!-- Composant multi-parties : composé -->
<Select.Root type="single" bind:value={fruit}>
	<Select.Trigger><Select.Value placeholder="Choisir un fruit" /></Select.Trigger>
	<Select.Portal>
		<Select.Content>
			<Select.Item value="apple" label="Pomme" />
			<Select.Item value="banana" label="Banane" />
		</Select.Content>
	</Select.Portal>
</Select.Root>

<!-- Composition prête à l'emploi -->
<DatePickerField label="Date de livraison" bind:value={date} />
```

### Ce qui est exporté

| Catégorie                      | Exports                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Composants simples             | `Button`, `Badge`, `Input`, `Textarea`, `Label`, `Alert`, `Kbd`, `Skeleton`, `Separator`, `Toggle`, `Progress`, `Meter`, `AspectRatio`, `ThemeToggle`, `Navbar`, `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`)                                                                                                                                                                                                                       |
| Compositions prêtes à l'emploi | `DateCalendar`, `DateRangeCalendar`, `DatePickerField`, `DateRangePickerField`                                                                                                                                                                                                                                                                                                                                                                                              |
| Multi-parties (namespaces)     | `Accordion`, `AlertDialog`, `Avatar`, `Calendar`, `Checkbox`, `Collapsible`, `Combobox`, `Command`, `ContextMenu`, `DateField`, `DatePicker`, `DateRangeField`, `DateRangePicker`, `Dialog`, `DropdownMenu`, `LinkPreview`, `Menubar`, `NavigationMenu`, `Pagination`, `PinInput`, `Popover`, `RadioGroup`, `RangeCalendar`, `RatingGroup`, `ScrollArea`, `Select`, `Slider`, `Switch`, `Table`, `Tabs`, `TimeField`, `TimeRangeField`, `ToggleGroup`, `Toolbar`, `Tooltip` |
| Variantes (CVA)                | `buttonVariants`, `badgeVariants`, `toggleVariants`, `alertVariants` (+ types `ButtonVariant`, `ButtonSize`…)                                                                                                                                                                                                                                                                                                                                                               |
| Thème                          | `theme` (`current`, `set`, `toggle`), `ThemeToggle`                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Mouvement                      | `durations`, `easings`, `duration()`, `isReducedMotion()`, `pop` (transition Svelte)                                                                                                                                                                                                                                                                                                                                                                                        |
| Utilitaires                    | `cn()`, `Icons`                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Design tokens en bref

Trois couches : **thème** (valeurs, `themes/*.css`) → **sémantique** (noms stables,
`--primary`, `--radius-field`, `--duration-fast`…) → **composant** (utilitaires Tailwind
`bg-primary`, `rounded-field`, `duration-fast`). Un composant ne voit jamais une valeur.

| Famille     | Tokens                                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Couleurs    | `background`, `foreground`, `card`, `popover`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `success`, `warning`, `border`, `border-subtle`, `input`, `ring`, `link`, `indicator`, `chart-1…5`, `sidebar-*` |
| Rayons      | `rounded-surface`, `rounded-field`, `rounded-item`, `rounded-control`, `rounded-pill`                                                                                                                                    |
| Mouvement   | `duration-instant/fast/base/slow`, `ease-standard/enter/exit/emphasized`                                                                                                                                                 |
| Typographie | `font-display`, `font-body`, `font-mono`, `font-serif`                                                                                                                                                                   |
| Espacement  | échelle Tailwind (`--spacing` = 4px)                                                                                                                                                                                     |

## Développement

```sh
npm install          # dépendances
npm run storybook    # documentation et stories (http://localhost:6006)
npm run dev          # landing + démonstration vivante (src/routes)
npm run check        # svelte-check
npm run test:unit    # Vitest, dont le garde-fou « aucune couleur brute »
npm run build        # build + package (svelte-package) + publint
```

### Skills Claude Code

`.claude/skills/` contient les workflows à suivre (par Claude comme par un humain) :

- `creer-composant` : cadrage, wrapper Bits UI, JSDoc `@component`, story, tests, export, vitrine (+ templates) ;
- `modifier-composant` : inventaire d'impact, qualification semver, synchronisation doc/story/tests ;
- `verifier-composant` : la Definition of Done d'un composant (checklist et commandes).

### Où est quoi

```
src/lib/theme/          tokens (global, semantic, states, motion) et faces (light, dark)
src/lib/components/     wrappers Bits UI (un fichier, ou un dossier par composant multi-parties)
src/lib/motion/         miroir JS des tokens de mouvement
src/stories/            une story Svelte CSF par composant (autodocs)
src/docs/               pages MDX de Storybook (démarrer, fondations, guides)
.storybook/             config, filtrage des props, blocs de doc React, habillage
.claude/skills/         workflows créer / modifier / vérifier un composant
docs/                   spec figée du design system et guide d'implémentation
```

## Règles non négociables

1. **Jamais de couleur brute** dans un composant : uniquement les tokens sémantiques
   (testé par `src/lib/components/colors.test.ts`).
2. **Un rôle de rayon et un rôle de durée** par composant, jamais une valeur.
3. **Les deux faces** et le **mouvement réduit** sont vérifiés pour chaque composant
   (barre d'outils Storybook « Face » et « Mouvement »).
4. **Chaque story documente son composant** : description (quand, anatomie,
   accessibilité) et `argTypes` en français avec une catégorie.

Références : [`docs/design-system.md`](docs/design-system.md) (spec et tokens) ·
[`docs/component-guide.md`](docs/component-guide.md) (implémentation des wrappers).
