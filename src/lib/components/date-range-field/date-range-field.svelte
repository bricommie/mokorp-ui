<!--
@component
**DateRangeField.Root** — Saisie d'une **plage** de dates au clavier (deux champs début / fin), sans calendrier.

**Anatomie** : `DateRangeField.Root` › `Label` · `Input type="start"` / `Input type="end"` › `Segment`. Utilisable avec `bind:value` (`{ start, end }`).

[API Bits UI](https://bits-ui.com/docs/components/date-range-field)
-->
<script lang="ts">
	import { DateRangeField as DateRangeFieldPrimitive } from 'bits-ui';

	type Props = DateRangeFieldPrimitive.RootProps;

	let { value = $bindable(), placeholder = $bindable(), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DateRangeFieldPrimitive.Root
	bind:value={value as never}
	bind:placeholder={placeholder as never}
	{...rest}
/>
