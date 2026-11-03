<!--
@component
**AlertDialog.Header** — En-tête : empile `AlertDialog.Title` et `AlertDialog.Description`.

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<!-- En-tête : titre + description empilés — §7 -->
<div {...rest} class={cn('flex flex-col gap-1.5 pr-8 text-left', className)}>
	{@render children?.()}
</div>
