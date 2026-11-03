<!--
@component
**Avatar.Fallback** — Repli affiché tant que l'image n'est pas chargée (ou en cas d'erreur) : en général les initiales.

[API Bits UI](https://bits-ui.com/docs/components/avatar)
-->
<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.FallbackProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Fallback centré, police display — §6 -->
<AvatarPrimitive.Fallback
	{...rest}
	class={cn(
		'flex h-full w-full items-center justify-center rounded-pill bg-muted font-display',
		className
	)}
/>
