<!--
@component
**DateRangeField.Segment** — Segment éditable (jour, mois, année, heure…) : rôle `spinbutton`, flèches ↑/↓ ou saisie directe. Reçoit `part` depuis `segments`.

[API Bits UI](https://bits-ui.com/docs/components/date-range-field)
-->
<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangeFieldPrimitive.SegmentProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Segment éditable : mise en avant au focus — structurel -->
<DateRangeFieldPrimitive.Segment
	{...rest}
	class={cn('rounded-item focus:bg-muted focus:text-foreground', className)}
/>
