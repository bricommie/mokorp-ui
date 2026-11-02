<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DatePickerField from '#lib/components/DatePickerField.svelte';

	const { Story } = defineMeta({
		title: 'Components/DatePickerField',
		component: DatePickerField
	});
</script>

<Story name="Default" args={{ label: 'Date de mise en ligne', class: 'w-72' }} />
