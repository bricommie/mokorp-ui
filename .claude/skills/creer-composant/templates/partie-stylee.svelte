<!--
@component
**Composant.Partie** — ‹rôle de la partie en 1 à 3 phrases : props obligatoires, comportement intégré (indicateur, coche…)›.

[API Bits UI](https://bits-ui.com/docs/components/SLUG)
-->
<script lang="ts">
	import { Xxx as XxxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = XxxPrimitive.PartieProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- ‹Pourquoi ces classes : rôle de rayon, recette réutilisée (docs/component-guide.md §3)› -->
<XxxPrimitive.Partie
	{...rest}
	class={cn(
		'rounded-ROLE font-body text-sm',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
/>
