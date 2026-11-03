<!--
@component
**Label** — Libellé d'un champ de formulaire. Cliquer dessus donne le focus au champ associé.

**Accessibilité** : `for` doit correspondre à l'`id` du champ. Pour un contrôle Bits UI sans `<input>` natif (Checkbox, Switch), passez le même `id` au contrôle.

```svelte
<Label for="nom">Nom</Label>
<Input id="nom" />
```

[API Bits UI](https://bits-ui.com/docs/components/label)
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Label as LabelPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = LabelPrimitive.RootProps & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- Motif Label — §6 : Archivo semi-gras, casse normale -->
<LabelPrimitive.Root {...rest} class={cn('font-body text-sm font-semibold', className)}>
	{@render children?.()}
</LabelPrimitive.Root>
