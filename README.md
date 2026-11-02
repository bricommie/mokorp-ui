# mokorp-ui

Bibliothèque de composants Svelte 5 pour le design system **« Acid Terminal »**
(néo-brutalisme acide). Chaque composant est un wrapper stylé autour des primitives
headless [`bits-ui`](https://www.bits-ui.com), selon la spec figée dans
[`docs/design-system.md`](docs/design-system.md).

- **Stack** : SvelteKit 5 (runes) + Tailwind CSS v4 + Storybook.
- **Thème** : tokens sémantiques (jamais de valeur brute), thème `acid` en
  `:root` / `.dark`, structure prête pour `[data-theme="…"]`.

## Installation

```sh
npm install mokorp-ui bits-ui @internationalized/date
```

> `bits-ui` et `@internationalized/date` sont des **peerDependencies** : à installer
> par le consommateur.

Importez le thème une seule fois :

```js
import 'mokorp-ui/theme.css';
```

## Usage

```svelte
<script lang="ts">
	import { Button, Accordion, Select } from 'mokorp-ui';
</script>

<Button variant="primary">Acid</Button>

<Accordion.Root type="single">
	<Accordion.Item value="a">
		<Accordion.Header>
			<Accordion.Trigger>Ouvrir</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>Contenu…</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
```

- **Composants mono-partie** : `Button`, `Card`, `Badge`, `Input`, `Label`,
  `AspectRatio`, `Meter`, `Progress`, `Separator`, `Toggle`.
- **Composants multi-parties** (namespaces `X.Root`, `X.Item`, `X.Trigger`…) :
  `Accordion`, `AlertDialog`, `Avatar`, `Calendar`, `Checkbox`, `Collapsible`,
  `Combobox`, `Command`, `ContextMenu`, `DateField`, `DatePicker`, `DateRangeField`,
  `DateRangePicker`, `Dialog`, `DropdownMenu`, `LinkPreview`, `Menubar`,
  `NavigationMenu`, `Pagination`, `PinInput`, `Popover`, `RadioGroup`,
  `RangeCalendar`, `RatingGroup`, `ScrollArea`, `Select`, `Slider`, `Switch`,
  `Tabs`, `TimeField`, `TimeRangeField`, `ToggleGroup`, `Toolbar`, `Tooltip`.

Variants CVA exportés : `buttonVariants`, `badgeVariants`, `toggleVariants`
(+ leurs types).

## Développement

```sh
npm install          # installe les dépendances
npm run dev          # showcase (src/routes)
npm run storybook    # Storybook (port 6006)
npm run check        # svelte-check
npm run test:unit    # Vitest (dont le garde-fou « aucune couleur brute »)
npm run build        # build + package (svelte-package) + publint
```

## Conventions

Voir [`docs/component-guide.md`](docs/component-guide.md) (implémentation des
wrappers) et [`docs/design-system.md`](docs/design-system.md) (tokens et règles
d'or). Règles non négociables : jamais de couleur brute dans un composant
(utiliser uniquement les tokens sémantiques), et un composant est soit structurel
(coins nets) soit organique (`rounded-full`).
