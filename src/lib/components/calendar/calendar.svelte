<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';

	type Props = CalendarPrimitive.RootProps;

	let { ...rest }: Props = $props();
</script>

<!-- Racine sémantique : pas de style (passthrough) — structurel (coins nets) -->
<CalendarPrimitive.Root {...rest} />
