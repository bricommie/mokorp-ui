<!--
@component
**DatePicker.Root** — Champ de date **avec calendrier** dans un popover, composable. Pour l'usage courant : `DatePickerField`.

**Anatomie** : `DatePicker.Root` › `DatePicker.Label` · `DatePicker.Input` › `Segment` + `DatePicker.Trigger` ; `DatePicker.Portal` › `DatePicker.Content` › `DatePicker.Calendar` (même anatomie que `Calendar`).

Utilisable avec `bind:value`, `bind:placeholder` et `bind:open`.

[API Bits UI](https://bits-ui.com/docs/components/date-picker)
-->
<script lang="ts">
	import { DatePicker as DatePickerPrimitive } from 'bits-ui';

	type Props = DatePickerPrimitive.RootProps;

	let {
		value = $bindable(),
		open = $bindable(false),
		placeholder = $bindable(),
		...rest
	}: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<DatePickerPrimitive.Root
	bind:value={value as never}
	bind:open
	bind:placeholder={placeholder as never}
	{...rest}
/>
