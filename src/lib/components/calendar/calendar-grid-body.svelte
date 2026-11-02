<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type Props = CalendarPrimitive.GridBodyProps;

	let { ...rest }: Props = $props();
</script>

<!-- Corps de grille : pas de style (passthrough) — structurel -->
<CalendarPrimitive.GridBody {...rest} />
