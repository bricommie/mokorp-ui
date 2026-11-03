<!--
@component
**Meter** — **Mesure** d'une grandeur dans un intervalle connu (quota, batterie, score). Pour l'avancement d'une tâche, utilisez `Progress`.

- `value`, `min`, `max` (défaut 0–100).

**Accessibilité** : rôle `meter` ; donnez un `aria-label` et, si utile, `aria-valuetext` (« 6 Go sur 10 »).

```svelte
<Meter value={6} max={10} aria-label="Stockage" aria-valuetext="6 Go sur 10" />
```

[API Bits UI](https://bits-ui.com/docs/components/meter)
-->
<script lang="ts">
	import { Meter as MeterPrimitive } from 'bits-ui';
	import { cn } from '../cn.js';

	type Props = MeterPrimitive.RootProps;

	let { value = 0, max = 100, class: className, children, ...rest }: Props = $props();

	const percent = $derived(Math.min(100, Math.max(0, (value / max) * 100)));
</script>

<!-- Structurel + piste encre + barre primary — §4 / §5 -->
<MeterPrimitive.Root
	{value}
	{max}
	{...rest}
	class={cn(
		'relative h-3 w-full overflow-hidden rounded-pill border-(length:--border-width) border-border bg-muted',
		className
	)}
>
	{@render children?.()}
	<div class="h-full bg-indicator transition-all" style:width={`${percent}%`}></div>
</MeterPrimitive.Root>
