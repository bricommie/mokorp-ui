<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as LinkPreview from '#lib/components/link-preview/index.js';
	import { Root } from '#lib/components/link-preview/index.js';

	const { Story } = defineMeta({
		title: 'Components/LinkPreview',
		component: Root,
		args: {}
	});
</script>

<Story name="Default">
	<LinkPreview.Trigger>Survole ce lien</LinkPreview.Trigger>
	<LinkPreview.Content>
		Un aperçu flottant du lien, structurel à coins nets.
	</LinkPreview.Content>
</Story>
