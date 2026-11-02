<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Progress from '#lib/components/Progress.svelte';

	const { Story } = defineMeta({
		title: 'Components/Progress',
		component: Progress,
		args: { value: 40 }
	});
</script>

<Story name="Default" args={{ value: 40 }} />
<Story name="Complete" args={{ value: 100 }} />
<Story name="Empty" args={{ value: 0 }} />
