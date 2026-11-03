<!--
@component
**Slider.Root** — Choix d'une valeur (ou d'une plage) dans un intervalle continu : volume, prix maximum. Si la valeur exacte compte, ajoutez un `Input` à côté.

**Anatomie** : `Slider.Root` › `Slider.Range` · `Slider.Thumb` (un par valeur) · optionnellement `Slider.Tick`, `Slider.TickLabel`, `Slider.ThumbLabel`.

- `type` (**obligatoire**) : `"single"` (`value: number`) ou `"multiple"` (`value: number[]`).
- `min`, `max`, `step` ; `bind:value`.

**Accessibilité** : flèches (pas), Page préc. / suiv. (grand pas), Début / Fin. Donnez un `aria-label` à chaque `Thumb`.

```svelte
<Slider.Root type="single" bind:value min={0} max={100} step={5}>
	<Slider.Range />
	<Slider.Thumb index={0} aria-label="Volume" />
</Slider.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/slider)
-->
<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SliderPrimitive.RootProps;

	let { class: className, value = $bindable(), ...rest }: Props = $props();
</script>

<!-- Piste : conteneur relatif, désélection + tactile — §4 -->
<SliderPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn(
		'relative flex h-3 w-full touch-none rounded-pill select-none items-center border-(length:--border-width) border-border bg-muted data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3 data-[orientation=vertical]:flex-col',
		className
	)}
/>
