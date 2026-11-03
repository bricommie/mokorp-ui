<!--
@component
**DateField.Label** — Libellé du champ (motif `Label`). Nomme le groupe de segments pour les lecteurs d'écran : ne l'omettez pas.

[API Bits UI](https://bits-ui.com/docs/components/date-field)
-->
<script lang="ts">
	import { DateField as DateFieldPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DateFieldPrimitive.LabelProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Motif signature « Label » — §6 -->
<DateFieldPrimitive.Label {...rest} class={cn('font-body text-sm font-semibold', className)} />
