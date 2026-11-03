<!--
@component
**Toggle** — Bouton **à deux états** (activé / désactivé), comme « Gras » dans un éditeur. L'état est porté par `aria-pressed`. Pour un groupe de bascules liées : `ToggleGroup`.

- `bind:pressed` : état activé.
- `variant` : `default` · `outline` ; `size` : `default` · `sm` · `lg`.

**Accessibilité** : le libellé ne doit **pas** changer avec l'état (« Gras », pas « Activer le gras »).

```svelte
<Toggle bind:pressed={bold} aria-label="Gras">B</Toggle>
```

[API Bits UI](https://bits-ui.com/docs/components/toggle)
-->
<script lang="ts">
	import { Toggle as TogglePrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '../cn.js';
	import { toggleVariants, type ToggleSize, type ToggleVariant } from './toggle.js';

	type Props = WithoutChild<TogglePrimitive.RootProps> & {
		/**
		 * `default` (transparent) ou `outline` (bordure, pour une bascule isolée).
		 * @default 'default'
		 */
		variant?: ToggleVariant;
		/**
		 * Gabarit : `default`, `sm`, `lg`.
		 * @default 'default'
		 */
		size?: ToggleSize;
	};

	let {
		variant = 'default',
		size = 'default',
		class: className,
		pressed = $bindable(false),
		...rest
	}: Props = $props();
</script>

<!-- Organique (pill) — variantes via `toggleVariants` (§7). Les enfants (snippet `{ pressed }`) sont
	transmis par `rest` pour conserver le paramètre du snippet primitif. -->
<TogglePrimitive.Root
	bind:pressed
	{...rest}
	class={cn(toggleVariants({ variant, size }), className)}
/>
