<!--
@component
**AspectRatio** — Conteneur qui conserve un **ratio** (16/9, 1/1) quelle que soit la largeur : images, vidéos, cartes. Le contenu débordant est rogné.

- `ratio` : largeur / hauteur (ex. `16 / 9`).

```svelte
<AspectRatio ratio={16 / 9}>
	<img src={cover} alt="" class="size-full object-cover" />
</AspectRatio>
```

[API Bits UI](https://bits-ui.com/docs/components/aspect-ratio)
-->
<script lang="ts">
	import { AspectRatio as AspectRatioPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = AspectRatioPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel — conteneur à ratio, clippe le contenu — §4 -->
<AspectRatioPrimitive.Root {...rest} class={cn('overflow-hidden', className)} />
