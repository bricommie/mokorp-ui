<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Toggle from '#lib/components/Toggle.svelte';

	const { Story } = defineMeta({
		title: 'Components/Toggle',
		component: Toggle,
		argTypes: {
			variant: { control: 'select', options: ['default', 'outline'] },
			size: { control: 'select', options: ['default', 'sm', 'lg'] }
		},
		args: {
			variant: 'default',
			size: 'default'
		}
	});
</script>

<Story name="Default">Bold</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Bold</Story>
<Story name="Small" args={{ size: 'sm' }}>Bold</Story>
<Story name="Large" args={{ size: 'lg' }}>Bold</Story>
