<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '#lib/components/Button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary', 'outline', 'ghost', 'destructive']
			},
			size: {
				control: 'select',
				options: ['default', 'sm', 'lg', 'icon']
			}
		},
		args: {
			variant: 'primary',
			size: 'default'
		}
	});
</script>

<Story name="Primary" args={{ variant: 'primary' }}>Primary</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Outline</Story>
<Story name="Ghost" args={{ variant: 'ghost' }}>Ghost</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>Destructive</Story>
<Story name="Small" args={{ size: 'sm' }}>Small</Story>
<Story name="Large" args={{ size: 'lg' }}>Large</Story>
<Story name="Icon" args={{ size: 'icon', 'aria-label': 'Close' }}>✕</Story>
