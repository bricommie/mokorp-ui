<!--
@component
**DateRangeField.Input** — Conteneur des segments d'**une** borne : `type="start"` ou `type="end"`. Snippet `children` avec `segments`. Ring `primary` au focus.

[API Bits UI](https://bits-ui.com/docs/components/date-range-field)
-->
<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangeFieldPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur du champ (segments) — structurel + ring primary via focus-within — §5 -->
<DateRangeFieldPrimitive.Input
	{...rest}
	class={cn(
		'rounded-field flex items-center gap-1 border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
		className
	)}
/>
