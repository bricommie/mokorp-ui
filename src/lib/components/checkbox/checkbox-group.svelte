<!--
@component
**Checkbox.Group** — Groupe de cases liées partageant une valeur `string[]` (`bind:value`). Chaque `Checkbox.Root` y porte un `value`.

[API Bits UI](https://bits-ui.com/docs/components/checkbox)
-->
<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CheckboxPrimitive.GroupProps;

	let { class: className, value = $bindable([]), ...rest }: Props = $props();
</script>

<!-- Groupe : empilement vertical léger — §7 -->
<CheckboxPrimitive.Group
	bind:value={value as never}
	{...rest}
	class={cn('flex flex-col gap-2', className)}
/>
