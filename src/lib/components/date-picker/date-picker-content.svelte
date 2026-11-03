<!--
@component
**DatePicker.Content** — Surface flottante du calendrier (entrée / sortie animées par la transition `pop`). `sideOffset` = 8 par défaut.

[API Bits UI](https://bits-ui.com/docs/components/date-picker)
-->
<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import { pop } from '../../motion/index.js';

	type Props = DatePickerPrimitive.ContentProps;

	let { class: className, sideOffset = 8, children, ...rest }: Props = $props();
</script>

<!--
	Surface flottante du popover — §3.
	Pattern Bits UI pour animer avec `svelte/transition` : `forceMount` garde le
	composant monté, et c'est NOUS qui décidons quand le DOM apparaît (`{#if open}`),
	ce qui laisse à Svelte le temps de jouer la sortie avant de retirer le nœud.
	`wrapperProps` porte le positionnement (floating-ui) : on n'anime que l'enfant,
	sinon le `transform` de la transition écraserait celui du placement.
-->
<DatePickerPrimitive.Content
	{...rest}
	{sideOffset}
	forceMount
	class={cn(
		'rounded-surface z-50 origin-(--bits-floating-transform-origin) border-(length:--border-width) border-border-subtle bg-popover p-2 text-popover-foreground shadow-lg outline-none',
		className
	)}
>
	{#snippet child({ wrapperProps, props, open })}
		{#if open}
			<div {...wrapperProps}>
				<div {...props} in:pop out:pop={{ duration: 'fast', easing: 'exit', y: -4 }}>
					{@render children?.()}
				</div>
			</div>
		{/if}
	{/snippet}
</DatePickerPrimitive.Content>
