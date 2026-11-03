<!--
@component
**Switch.Root** — Interrupteur **à effet immédiat** (activer les notifications). Si le choix ne s'applique qu'à la soumission d'un formulaire, utilisez `Checkbox`.

**Anatomie** : `Switch.Root` › `Switch.Thumb`. Utilisable avec `bind:checked`.

**Accessibilité** : rôle `switch`, Espace pour basculer. Associez un `Label`.

```svelte
<div class="flex items-center gap-2">
	<Switch.Root id="notif" bind:checked><Switch.Thumb /></Switch.Root>
	<Label for="notif">Notifications</Label>
</div>
```

[API Bits UI](https://bits-ui.com/docs/components/switch)
-->
<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = SwitchPrimitive.RootProps;

	let { class: className, checked = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Piste organique (rounded-pill) — primary coché, background sinon — §4 / §5 -->
<SwitchPrimitive.Root
	bind:checked
	{...rest}
	class={cn(
		'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-pill border-(length:--border-width) border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[state=checked]:border-primary-border data-[state=checked]:bg-primary',
		className
	)}
/>
