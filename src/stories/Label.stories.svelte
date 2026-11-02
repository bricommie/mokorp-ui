<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Label from '#lib/components/Label.svelte';

	const { Story } = defineMeta({
		title: 'Components/Label',
		component: Label
	});
</script>

<Story name="Default">Field label</Story>
<Story name="For input" args={{ for: 'email' }}>Email address</Story>
