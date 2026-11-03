<!--
@component
**Combobox.Arrow** — Flèche optionnelle pointant vers le champ.

[API Bits UI](https://bits-ui.com/docs/components/combobox)
-->
<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ArrowProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Flèche du combobox : remplit la surface flottante — §3 -->
<ComboboxPrimitive.Arrow {...rest} class={cn('fill-popover', className)} />
