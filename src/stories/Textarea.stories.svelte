<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Textarea from '#lib/components/Textarea.svelte';

	const { Story } = defineMeta({
		title: 'Components/Textarea',
		component: Textarea
	});
</script>

<Story name="Default" args={{ placeholder: 'Notes de version…', class: 'w-80' }} />
<Story name="Invalid" args={{ value: 'Trop court', 'aria-invalid': true, class: 'w-80' }} />
<Story name="Disabled" args={{ placeholder: 'Désactivé', disabled: true, class: 'w-80' }} />
