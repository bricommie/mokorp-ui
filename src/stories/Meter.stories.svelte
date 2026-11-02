<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Meter from '#lib/components/Meter.svelte';

	const { Story } = defineMeta({
		title: 'Components/Meter',
		component: Meter,
		args: { value: 60 }
	});
</script>

<Story name="Default" args={{ value: 60 }} />
<Story name="Low" args={{ value: 15 }} />
<Story name="High" args={{ value: 90 }} />
