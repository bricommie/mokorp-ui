<!--
@component
**RadioGroup.Root** — Choix **exclusif** parmi quelques options visibles (2 à 6). Au-delà, préférez `Select`.

**Anatomie** : `RadioGroup.Root` › `RadioGroup.Item` (point intégré), chacun avec son `Label`. Utilisable avec `bind:value`.

**Accessibilité** : un seul arrêt de tabulation, les flèches changent la sélection. Nommez le groupe (`aria-label` ou `aria-labelledby`).

```svelte
<RadioGroup.Root bind:value aria-label="Livraison">
	<div class="flex items-center gap-2">
		<RadioGroup.Item id="std" value="standard" /><Label for="std">Standard</Label>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroup.Item id="exp" value="express" /><Label for="exp">Express</Label>
	</div>
</RadioGroup.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/radio-group)
-->
<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RadioGroupPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Groupe : disposition grille — §7 -->
<RadioGroupPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('grid gap-2', className)}
/>
