<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from '#lib/components/Input.svelte';

	const { Story } = defineMeta({
		title: 'Components/Input',
		component: Input
	});
</script>

<Story name="Default" args={{ placeholder: 'Type something…' }} />
<Story name="Disabled" args={{ placeholder: 'Disabled', disabled: true }} />
