<!--
@component
**TimeRangeField.Input** — Conteneur des segments d'**une** borne : `type="start"` ou `type="end"`. Snippet `children` avec `segments`. Ring `primary` au focus.

[API Bits UI](https://bits-ui.com/docs/components/time-range-field)
-->
<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeRangeFieldPrimitive.InputProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Conteneur du champ (segments) — structurel + ring primary via focus-within — §5 -->
<TimeRangeFieldPrimitive.Input
	{...rest}
	class={cn(
		'rounded-field flex items-center gap-1 border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
		className
	)}
/>
