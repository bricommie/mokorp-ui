<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<SVGAttributes<SVGSVGElement>, 'class'> & { class?: string };

	let { class: className, ...rest }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2.5"
	stroke-linecap="square"
	stroke-linejoin="miter"
	aria-hidden="true"
	{...rest}
	class={cn('size-4 shrink-0', className)}
>
	<path
		d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21"
	/>
</svg>
