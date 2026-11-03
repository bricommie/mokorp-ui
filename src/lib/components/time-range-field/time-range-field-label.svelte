<!--
@component
**TimeRangeField.Label** — Libellé du champ (motif `Label`). Nomme le groupe de segments pour les lecteurs d'écran : ne l'omettez pas.

[API Bits UI](https://bits-ui.com/docs/components/time-range-field)
-->
<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = TimeRangeFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<TimeRangeFieldPrimitive.Label {...rest} class={cn('font-body text-sm font-semibold', className)} />
