<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '#lib/components/Button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		argTypes: {
			variant: {
				control: 'select',
				options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive']
			},
			size: {
				control: 'select',
				options: ['default', 'sm', 'lg', 'icon']
			},
			loading: { control: 'boolean' },
			loadingLabel: { control: 'text' }
		},
		args: {
			variant: 'primary',
			size: 'default',
			loading: false
		}
	});
</script>

<script lang="ts">
	let saving = $state(false);
</script>

<Story name="Primary" args={{ variant: 'primary' }}>Primary</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary</Story>
<Story name="Outline" args={{ variant: 'outline' }}>Outline</Story>
<Story name="Ghost" args={{ variant: 'ghost' }}>Ghost</Story>
<Story name="Link" args={{ variant: 'link' }}>Link</Story>
<Story name="Destructive" args={{ variant: 'destructive' }}>Destructive</Story>
<Story name="Small" args={{ size: 'sm' }}>Small</Story>
<Story name="Large" args={{ size: 'lg' }}>Large</Story>
<Story name="Icon" args={{ size: 'icon', 'aria-label': 'Close' }}>✕</Story>

<!-- Mouvement : `loading` est un arg → togglable dans Controls, la largeur ne bouge pas. -->
<Story name="Loading" args={{ loading: true }}>Enregistrer</Story>

<Story name="Loading (interactif)" asChild>
	{@const save = async () => {
		saving = true;
		await new Promise((r) => setTimeout(r, 1600));
		saving = false;
	}}
	<div class="flex gap-3">
		<Button loading={saving} onclick={save}>Enregistrer</Button>
		<Button variant="outline" loading={saving} onclick={save}>Publier la version</Button>
	</div>
</Story>
