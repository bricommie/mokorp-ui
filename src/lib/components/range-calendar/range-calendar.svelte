<script lang="ts">
	import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

	type Props = RangeCalendarPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel (coins nets) -->
<RangeCalendarPrimitive.Root {...rest} />
