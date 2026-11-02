<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from '#lib/components/Badge.svelte';

	const { Story } = defineMeta({
		title: 'Components/Badge',
		component: Badge,
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary', 'outline', 'success', 'warning', 'destructive']
			}
		},
		args: {
			variant: 'primary'
		}
	});
</script>

<Story name="Primary" args={{ variant: 'primary' }}>New</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>Beta</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Draft</Story>
<Story name="Success" args={{ variant: 'success' }}>Reçu</Story>
<Story name="Warning" args={{ variant: 'warning' }}>En attente</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>Error</Story>
