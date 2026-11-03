<!--
@component
**PinInput.Root** — Saisie d'un **code court** (OTP, code de vérification), une case par caractère. Le collage d'un code complet est géré.

**Anatomie** : `PinInput.Root` (snippet `children` avec `cells`) › `PinInput.Cell`.

- `maxlength` : nombre de caractères. `bind:value` : le code saisi.
- `onComplete` : appelé quand toutes les cases sont remplies.

**Accessibilité** : un seul vrai `<input>` caché porte la valeur ; ajoutez `autocomplete="one-time-code"`.

```svelte
<PinInput.Root maxlength={6} bind:value autocomplete="one-time-code" onComplete={verify}>
	{#snippet children({ cells })}
		{#each cells as cell, i (i)}<PinInput.Cell {cell} />{/each}
	{/snippet}
</PinInput.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/pin-input)
-->
<script lang="ts">
	import { PinInput as PinInputPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = PinInputPrimitive.RootProps;

	let { class: className, value = $bindable(''), ...rest }: Props = $props();
</script>

<!-- Conteneur structurel — §5 -->
<PinInputPrimitive.Root
	bind:value={value as never}
	{...rest}
	class={cn('inline-flex items-center gap-2', className)}
/>
