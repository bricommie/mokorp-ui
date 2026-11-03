# Guide d'implémentation des wrappers bits-ui

Référence unique pour créer les wrappers stylés (façon shadcn-svelte) autour des
primitives headless `bits-ui@2.20.2`, selon le design system « Signal »
(`docs/design-system.md`).

## 0. Règles d'or (non négociables)

1. **Jamais de couleur brute** (hex, oklch, rgb, hsl…) dans un `.svelte` ou `.ts`.
   Uniquement les utilitaires Tailwind sémantiques (`bg-card`, `text-foreground`,
   `border-border`, `ring-ring`, `shadow-md`…). Un test Vitest
   (`src/lib/components/colors.test.ts`) échoue sinon.
2. **Ne pas modifier (phase d’amorçage ; l’audit a depuis corrigé ces fichiers)** `src/lib/index.ts`, `package.json`, ni les composants déjà
   existants à la racine (`Button.svelte`, `Label.svelte`, `Card.svelte`,
   `Badge.svelte`, `Input.svelte`, `button.ts`, `badge.ts`).
3. **Stack** : Svelte 5 (runes `$props()`), TypeScript strict. Pas de `<script>` en
   JS, toujours `<script lang="ts">`.
4. Pas de dépendances nouvelles. Imports : `bits-ui`, `../../cn.js` (ou `../cn.js`
   pour un fichier à la racine de `components/`), `#lib/...` dans les stories.

## 0 bis. Leçons de l'audit (à respecter pour tout nouveau wrapper)

1. **Les props bindables doivent être déclarées.** `let { ...rest } = $props()` suivi de
   `{...rest}` casse `bind:value` / `bind:open` / `bind:checked` : la valeur ne remonte
   jamais au parent. Pour chaque `Root`, déclarer les props bindables **avec le même
   défaut que bits-ui** puis les lier :

   ```svelte
   let { value = $bindable(''), ...rest }: Props = $props();
   <TabsPrimitive.Root bind:value={value as never} {...rest} />
   ```

   Un défaut différent de celui de bits-ui (ex. `undefined` au lieu de `''`) plante au
   montage : « Cannot do `bind:value={undefined}` when `value` has a fallback value ».
   Les défauts se lisent dans `node_modules/bits-ui/dist/bits/<kebab>/components/*.svelte`.

2. **Un item doit afficher son contenu.** `Select.Item` / `Combobox.Item` reçoivent
   `label` : le wrapper l'affiche par défaut et ajoute la coche si l'item est sélectionné.
3. **Les indicateurs sont intégrés** (chevron des triggers, coche/point des items de menu,
   chevron des sous-menus et des boutons de navigation). Ne pas les redemander au
   consommateur. Les icônes vivent dans `components/icons/` (traits carrés, `currentColor`).
4. **Survol / focus d'un item = inversion primary** (`data-[highlighted]:bg-primary
data-[highlighted]:text-primary-foreground`), pas `bg-muted` (trop proche du fond).
5. **États qui se contredisent** : ne jamais empiler `hover:bg-muted` et
   `data-[selected]:bg-primary` sur le même élément sans `not-data-[selected]:`.
6. **Surfaces flottantes** : `z-50`, `sideOffset` par défaut de 8 (l'ombre dure a besoin de
   respirer), largeur du Select/Combobox calée sur le trigger via
   `w-(--bits-select-anchor-width)`.
7. **Grilles et flex** : un enfant de grille ou de flex qui contient du contenu large doit
   porter `min-w-0` (ou la grille `grid-cols-1`), sinon la page déborde en mobile.
8. **Mouvement** : toute animation non déclenchée par l'utilisateur est neutralisée par
   `motion-reduce:`. Les keyframes (`mk-*`) sont dans `theme/tokens/components.css`.
9. **Triggers** : `Dialog`, `AlertDialog`, `Popover`, `DropdownMenu` et `ContextMenu` ont un
   `Trigger` sans style. Pour un bouton, utiliser le snippet `child` :

   ```svelte
   <Dialog.Trigger>
   	{#snippet child({ props })}<Button variant="outline" {...props}>Ouvrir</Button>{/snippet}
   </Dialog.Trigger>
   ```

## 1. Structure des fichiers

- **Composant multi-parties** → dossier `src/lib/components/<kebab>/` contenant :
  - `<kebab>.svelte` (Root), `<kebab>-<part>.svelte` (une par partie stylée),
    `<kebab>-<part>.svelte` (passthrough si aucune classe nécessaire).
  - `index.ts` qui réexporte les parties en export nommé.
- **Composant mono-partie** (separator, progress, slider, switch, checkbox… si une
  seule partie) → un seul fichier `src/lib/components/<PascalCase>.svelte`.
- **Story** → `src/stories/<PascalCase>.stories.svelte`.

Import de `cn` : depuis un fichier de dossier `components/<kebab>/`, c'est
`../../cn.js` ; depuis un fichier à la racine de `components/`, c'est `../cn.js`.

## 2. API bits-ui : comment la trouver

Chaque primitive exporte un namespace avec des parties. La liste exacte des parties
et des types de props est dans :

```
node_modules/bits-ui/dist/bits/<kebab>/exports.d.ts
```

Exemple (`accordion/exports.d.ts`) : `Root`, `Item`, `Header`, `Trigger`, `Content`,
avec les types `AccordionRootProps as RootProps`, `AccordionTriggerProps as
TriggerProps`, etc.

**Toujours lire ce fichier** pour connaître : (a) les noms exacts des parties, (b) les
noms exacts des types `*Props`. Ne jamais deviner un nom de partie.

### Pattern du wrapper d'une partie

Une partie bits-ui accepte `class` (via `mergeProps`), `children` (snippet normal) et
`child` (snippet asChild). Le wrapper ne fait que forwarder les props et injecter la
classe stylée :

```svelte
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AccordionPrimitive.TriggerProps;

	let { class: className, ...rest }: Props = $props();
</script>

<AccordionPrimitive.Trigger
	{...rest}
	class={cn('flex flex-1 items-center justify-between gap-2 py-4 font-body text-sm ...', className)}
/>
```

Pour une partie **sans style** (Root, Header, Portal…) :

```svelte
<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';

	type Props = AccordionPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<AccordionPrimitive.Root {...rest} />
```

> `Portal` ne se wrappe JAMAIS : on réexporte directement le `Portal` de bits-ui dans
> `index.ts` (`export { Portal } from 'bits-ui';`).

### Pattern du `index.ts` du dossier

```ts
import Root from './accordion.svelte';
import Item from './accordion-item.svelte';
import Header from './accordion-header.svelte';
import Trigger from './accordion-trigger.svelte';
import Content from './accordion-content.svelte';

export { Root, Item, Header, Trigger, Content };
```

(Exporter aussi les types de props si utile, via `export type { ... } from 'bits-ui';`
ou en redéclarant — optionnel.)

## 3. Recettes de style (chaînes exactes à réutiliser)

### Focus (toute partie focusable)

```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

### Surface flottante (contenu de popover/menu/dialog/tooltip/select/combobox/date)

```
rounded-surface border-(length:--border-width) border-border-subtle bg-popover text-popover-foreground shadow-lg
```

### Élément de menu / option (item de select/combobox/menu)

Base : `relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none`
(coins **nets**, donc AUCUN `rounded-*`).

États via attributs data de bits-ui :

- survolé/focus : `data-[highlighted]:bg-muted`
- coché/sélectionné : `data-[state=checked]:bg-muted` (menu) ou
  `data-[selected]:bg-muted` (combobox)
- désactivé : `data-[disabled]:pointer-events-none data-[disabled]:opacity-50`

### Indicateur de contrôle (coche checkbox, point radio, pouce switch/slider)

Bordure `--border-width`, fond selon état :

- non coché : `border-(length:--border-width) border-border bg-background`
- coché : `border-primary-border bg-primary text-primary-foreground` (le lime est
  bordé d'encre en face claire)

## 4. Rayons par rôle (verrouillé)

Chaque composant choisit un **rôle**, jamais une valeur :

- `rounded-surface` : card, alert, dialog, alert-dialog, menus, popover, select et
  combobox (contenu), command, link-preview, date pickers, calendrier, table.
- `rounded-field` : input, textarea, déclencheurs de type champ, date/time fields,
  pin-input, menubar.
- `rounded-item` : option de menu, jour de calendrier, checkbox, toolbar,
  toggle-group, kbd, tooltip, skeleton, segments de date.
- `rounded-control` : button, collapsible-trigger.
- `rounded-pill` : avatar, badge, switch, slider, toggle, progress, meter, radio,
  pagination.

Bordure : toujours `border-(length:--border-width)`, jamais `border-2`.

## 5. Typographie

- Corps/contrôles : `font-body text-sm` (le body hérite déjà `font-body`, l'utiliser
  est sans danger pour l'explicitation).
- Motif « Label » : `font-body text-sm font-semibold` (casse normale).
- Titres : `font-display`.

## 5 bis. Documentation IDE (obligatoire)

L'aide affichée au survol d'une balise et dans l'autocomplétion (Svelte for VS Code,
WebStorm) vient de deux sources, toutes deux recopiées par `svelte-package` en JSDoc
dans `dist/**/*.svelte.d.ts`, donc visibles aussi chez les applications consommatrices.

**1. Le bloc `@component`, en tête de fichier (avant `<script>`)** :

```svelte
<!--
@component
**Select.Item** — Option de la liste. `value` (**obligatoire**) et `label` : le libellé
est affiché par défaut, avec la coche si l'option est sélectionnée.

[API Bits UI](https://bits-ui.com/docs/components/select)
-->
<script lang="ts">
```

- Première ligne : `**Nom** — description`, où `Nom` est ce que le consommateur
  écrit (`Button`, `Select.Item`).
- **Composant racine ou mono-partie** : quand l'utiliser (et quoi utiliser à la place),
  **Anatomie** pour un multi-parties, props clés en liste (`bind:` possibles, props
  obligatoires), **Accessibilité**, puis un exemple en bloc ` ```svelte `.
- **Partie** d'un composant : une à trois phrases (rôle, props obligatoires,
  comportement intégré comme une coche ou un chevron).
- Wrapper Bits UI : terminer par le lien `[API Bits UI](…)`.
- Jamais de `<!--` ni de `<script>` dans le bloc : le premier fermerait le commentaire,
  le second trompe certains préprocesseurs.

**2. Le JSDoc des props ajoutées par Mokorp** (pas celles héritées de Bits UI ou des
attributs HTML, déjà documentées par leurs types) :

```ts
type Props = WithoutChild<ButtonPrimitive.RootProps> & {
	/**
	 * Rôle visuel : `primary` (une seule action principale par vue), `secondary`…
	 * @default 'primary'
	 */
	variant?: ButtonVariant;
};
```

Une phrase sur l'effet de la prop, les valeurs possibles pour un variant, et `@default`
dès que la prop a une valeur par défaut. Le test `src/lib/components/docs.test.ts`
échoue si un composant n'a pas de bloc `@component`.

## 6. Stories (obligatoire, au moins une « Default »)

Guide complet dans Storybook : **Guides › Écrire une story**. L'essentiel :

```svelte
<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Comp from '#lib/components/<kebab>/index.js'; // multi-parties
	// ou import Comp from '#lib/components/<PascalCase>.svelte'; // mono-partie

	const { Story } = defineMeta({
		// Famille : Actions, Formulaires, Dates et heures, Superpositions,
		// Navigation, Données et retours, Mise en page.
		title: 'Composants/<Famille>/<PascalCase>',
		component: Comp.Root, // multi-parties (la partie Root) ; mono-partie : Comp
		parameters: {
			docs: {
				description: {
					// 1. quand l'utiliser, 2. anatomie, 3. accessibilité
					component: '…'
				}
			}
		},
		argTypes: {
			variant: {
				control: 'select',
				options: ['…'],
				description: 'En français : ce que change la prop.',
				// La catégorie est OBLIGATOIRE : sans elle, un attribut natif
				// (disabled, type, aria-*…) est masqué de la table (voir preview.ts).
				table: { category: 'Props', defaultValue: { summary: "'…'" } }
			}
		}
	});
</script>
```

- La page Docs est générée pour toutes les stories (`tags: ['autodocs']` global).
- Mono-partie : `<Story name="Default" args={...}>Contenu</Story>`.
- Multi-parties : le contenu (`<Comp.Item>`…) est passé en enfants du `<Story>`.
- Composants à état : une story `asChild` avec un `$state` local pour la démo
  interactive, en plus d'une story pilotée par les args.

## 7. Vérification locale (après avoir écrit tes fichiers)

```
npx svelte-check --tsconfig ./tsconfig.json
```

Doit renvoyer `0 errors`. Corriger sinon (typiquement : mauvais nom de partie, ou
prop inexistante).
