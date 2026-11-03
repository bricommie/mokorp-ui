<!--
@component
**Dialog.Content** — Surface centrée du dialogue, bornée à la fenêtre (défile si besoin). Bouton de fermeture (×) intégré en haut à droite.

- `showClose` : affiche le bouton × (défaut `true`).
- `closeLabel` : nom accessible du bouton × (défaut « Fermer »).

[API Bits UI](https://bits-ui.com/docs/components/dialog)
-->
<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';
	import X from '../icons/x.svelte';

	type Props = DialogPrimitive.ContentProps & {
		/**
		 * Affiche le bouton de fermeture (×) en haut à droite.
		 * @default true
		 */
		showClose?: boolean;
		/**
		 * Nom accessible du bouton ×, lu par les lecteurs d'écran.
		 * @default 'Fermer'
		 */
		closeLabel?: string;
	};

	let {
		class: className,
		showClose = true,
		closeLabel = 'Fermer',
		children,
		...rest
	}: Props = $props();
</script>

<!-- Surface flottante centrée, bornée à la fenêtre — §3 -->
<DialogPrimitive.Content
	{...rest}
	class={cn(
		'rounded-surface fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border-(length:--border-width) border-border-subtle bg-popover p-6 font-body text-popover-foreground shadow-xl outline-none',
		className
	)}
>
	{@render children?.()}
	{#if showClose}
		<DialogPrimitive.Close
			class="absolute right-3 top-3 inline-flex rounded-item size-8 items-center justify-center border-(length:--border-width) border-transparent text-foreground transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		>
			<X class="size-4" />
			<span class="sr-only">{closeLabel}</span>
		</DialogPrimitive.Close>
	{/if}
</DialogPrimitive.Content>
