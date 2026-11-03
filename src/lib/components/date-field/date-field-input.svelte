<!--
@component
**DateField.Input** — Conteneur des segments (aspect d'un `Input`, ring `primary` au focus). Son snippet `children` reçoit `segments` à itérer.

[API Bits UI](https://bits-ui.com/docs/components/date-field)
-->
<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateFieldPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur du champ (segments) — structurel + ring primary via focus-within — §5 -->
<DateFieldPrimitive.Input
	{...rest}
	class={cn(
		'rounded-field flex items-center gap-1 border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
		className
	)}
/>
