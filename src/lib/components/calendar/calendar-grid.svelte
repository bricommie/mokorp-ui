<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CalendarPrimitive.GridProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Grille (table) : pleine largeur, bordures fusionnées — structurel -->
<CalendarPrimitive.Grid {...rest} class={cn('w-full border-collapse', className)} />
