<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DateCalendar from '#lib/components/DateCalendar.svelte';

	const { Story } = defineMeta({
		title: 'Components/DateCalendar',
		component: DateCalendar
	});
</script>

<Story name="Default" />
