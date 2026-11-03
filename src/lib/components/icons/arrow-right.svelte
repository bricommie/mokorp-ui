<!--
@component
**Icons.ArrowRight** — Icône flèche vers la droite (traits carrés, `currentColor`, `size-4` par défaut). Décorative : `aria-hidden` est posé ; donnez un `aria-label` au bouton qui la contient.

```svelte
<Icons.ArrowRight class="size-5" />
```
-->
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
	<path d="M4 12h16M14 6l6 6-6 6" />
</svg>
