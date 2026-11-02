<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type Props = CalendarPrimitive.GridHeadProps;

	let { ...rest }: Props = $props();
</script>

<!-- En-tête de grille : pas de style (passthrough) — structurel -->
<CalendarPrimitive.GridHead {...rest} />
