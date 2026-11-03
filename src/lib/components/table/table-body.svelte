<!--
@component
**Table.Body** — Corps du tableau (`<tbody>`).
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Contenu. */
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<tbody {...rest} class={cn('[&_tr:last-child]:border-0', className)}>
	{@render children?.()}
</tbody>
