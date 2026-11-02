<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type Props = CalendarPrimitive.GridRowProps;

	let { ...rest }: Props = $props();
</script>

<!-- Ligne de grille : pas de style (passthrough) — structurel -->
<CalendarPrimitive.GridRow {...rest} />
