<!--
@component
**Checkbox.Root** — Case à cocher : choix **indépendants** (j'accepte, recevoir les e-mails). Pour un choix exclusif, utilisez `RadioGroup` ; pour un réglage à effet immédiat, `Switch`.

- `bind:checked` : état coché.
- `bind:indeterminate` : état partiel (« tout sélectionner »), affiché par un tiret.
- `name` / `value` : soumission dans un `<form>` natif.

**Accessibilité** : associez un `Label` (`for` = `id` de la case).

```svelte
<div class="flex items-center gap-2">
	<Checkbox.Root id="cgu" bind:checked={accepted} />
	<Label for="cgu">J'accepte les conditions</Label>
</div>
```

[API Bits UI](https://bits-ui.com/docs/components/checkbox)
-->
<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../cn.js';

	type Props = Omit<CheckboxPrimitive.RootProps, 'children'> & {
		/**
		 * Contenu ajouté dans le contrôle, après l'indicateur intégré (la coche / le tiret).
		 * Rarement utile : le libellé se place dans un `Label` à côté.
		 */
		children?: Snippet;
	};

	let {
		class: className,
		children,
		checked = $bindable(false),
		indeterminate = $bindable(false),
		...rest
	}: Props = $props();
</script>

<!-- Structurel + indicateur (coche/tiret) piloté par data-state — §3 / §4 -->
<CheckboxPrimitive.Root
	bind:checked
	bind:indeterminate
	{...rest}
	class={cn(
		'rounded-item group flex size-5 shrink-0 items-center justify-center border-(length:--border-width) border-border bg-background text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:border-primary-border data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary-border data-[state=indeterminate]:bg-primary',
		className
	)}
>
	<svg
		class="size-3 opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M2.5 8.5l3.5 3.5 7-8" />
	</svg>
	<svg
		class="size-3 opacity-0 transition-opacity group-data-[state=indeterminate]:opacity-100"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		fill="none"
		stroke="currentColor"
		stroke-width="2.5"
		stroke-linecap="round"
		aria-hidden="true"
	>
		<path d="M3 8h10" />
	</svg>
	{@render children?.()}
</CheckboxPrimitive.Root>
