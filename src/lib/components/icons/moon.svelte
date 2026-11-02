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
	<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
</svg>
