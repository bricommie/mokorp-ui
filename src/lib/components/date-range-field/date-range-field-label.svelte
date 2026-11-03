<!--
@component
**DateRangeField.Label** — Libellé du champ (motif `Label`). Nomme le groupe de segments pour les lecteurs d'écran : ne l'omettez pas.

[API Bits UI](https://bits-ui.com/docs/components/date-range-field)
-->
<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateRangeFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<DateRangeFieldPrimitive.Label {...rest} class={cn('font-body text-sm font-semibold', className)} />
