<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { cn } from '../../cn.js';

	type Props = Omit<SVGAttributes<SVGSVGElement>, 'class'> & { class?: string };

	let { class: className, ...rest }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	aria-hidden="true"
	{...rest}
	class={cn('size-2 shrink-0', className)}
>
	<circle cx="12" cy="12" r="12" />
</svg>
