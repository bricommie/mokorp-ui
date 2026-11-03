<!--
@component
**Composant** — ‹résumé en une phrase (ce que fait le composant)›.

‹Quand l'utiliser›. Pour ‹autre cas›, préférez `Autre`.

- `variant` : ‹valeurs et intention›.
- ‹Props clés : bind: possibles, props obligatoires.›

**Accessibilité** : ‹ce que le consommateur doit fournir (nom accessible, Label…)›.

```svelte
<Composant variant="primary">Contenu</Composant>
```

[API Bits UI](https://bits-ui.com/docs/components/SLUG)
-->
<script lang="ts">
	import { Xxx as XxxPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';
	import { composantVariants, type ComposantVariant } from './composant.js';

	type Props = XxxPrimitive.RootProps & {
		/**
		 * Intention visuelle : `primary` (action principale) ou `secondary`.
		 * @default 'primary'
		 */
		variant?: ComposantVariant;
	};

	let { variant = 'primary', class: className, ...rest }: Props = $props();
</script>

<XxxPrimitive.Root {...rest} class={cn(composantVariants({ variant }), className)} />
