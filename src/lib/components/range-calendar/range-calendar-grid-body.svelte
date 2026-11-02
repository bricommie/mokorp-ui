<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.GridBodyProps;

	let { ...rest }: Props = $props();
</script>

<!-- Corps de grille : pas de style (passthrough) — structurel -->
<RangeCalendarPrimitive.GridBody {...rest} />
