<!--
@component
**TimeRangeField.Root** — Saisie d'une **plage horaire** (début / fin) au clavier : horaires d'ouverture, créneaux.

**Anatomie** : `TimeRangeField.Root` › `Label` · `Input type="start"` / `Input type="end"` › `Segment`. Utilisable avec `bind:value` (`{ start, end }`).

[API Bits UI](https://bits-ui.com/docs/components/time-range-field)
-->
<script lang="ts">
	import { TimeRangeField as TimeRangeFieldPrimitive } from 'bits-ui';

	type Props = TimeRangeFieldPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<TimeRangeFieldPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>
