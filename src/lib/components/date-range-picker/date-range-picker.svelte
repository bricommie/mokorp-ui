<!--
@component
**DateRangePicker.Root** — Champ de **plage** de dates avec calendrier dans un popover, composable. Pour l'usage courant : `DateRangePickerField`.

**Anatomie** : `DateRangePicker.Root` › `Label` · `Input type="start"` / `type="end"` · `Trigger` ; `Portal` › `Content` › `Calendar`.

Utilisable avec `bind:value` (`{ start, end }`), `bind:placeholder` et `bind:open`.

[API Bits UI](https://bits-ui.com/docs/components/date-range-picker)
-->
<script lang="ts">
	import { DateRangePicker as DateRangePickerPrimitive } from 'bits-ui';

	type Props = DateRangePickerPrimitive.RootProps;

	let {
		value = $bindable(),
		open = $bindable(false),
		placeholder = $bindable(),
		...rest
	}: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DateRangePickerPrimitive.Root
	bind:value={value as never}
	bind:open
	bind:placeholder={placeholder as never}
	{...rest}
/>
