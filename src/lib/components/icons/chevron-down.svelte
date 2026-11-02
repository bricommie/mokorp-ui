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
	stroke-width="3"
	stroke-linecap="square"
	stroke-linejoin="miter"
	aria-hidden="true"
	{...rest}
	class={cn('size-4 shrink-0', className)}
>
	<path d="M5 9l7 7 7-7" />
</svg>
