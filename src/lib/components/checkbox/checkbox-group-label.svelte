<!--
@component
**Checkbox.GroupLabel** — Nom du `Checkbox.Group` (motif `Label`), annoncé aux lecteurs d'écran.

[API Bits UI](https://bits-ui.com/docs/components/checkbox)
-->
<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CheckboxPrimitive.GroupLabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif Label — §6 -->
<CheckboxPrimitive.GroupLabel {...rest} class={cn('font-body text-sm font-semibold', className)} />
