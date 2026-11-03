<!--
@component
**Icons.Circle** — Icône point plein (indicateur radio) (traits carrés, `currentColor`, `size-4` par défaut). Décorative : `aria-hidden` est posé ; donnez un `aria-label` au bouton qui la contient.

```svelte
<Icons.Circle class="size-5" />
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
	fill="currentColor"
	aria-hidden="true"
	{...rest}
	class={cn('size-2 shrink-0', className)}
>
	<circle cx="12" cy="12" r="12" />
</svg>
