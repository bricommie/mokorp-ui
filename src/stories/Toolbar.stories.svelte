<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Toolbar from '#lib/components/toolbar/index.js';
	import { Root } from '#lib/components/toolbar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Toolbar',
		component: Root,
		args: {}
	});
</script>

<Story name="Default">
	<Toolbar.Button>Copier</Toolbar.Button>
	<Toolbar.Link href="#">Aide</Toolbar.Link>
	<Toolbar.Group type="multiple">
		<Toolbar.GroupItem value="bold">Gras</Toolbar.GroupItem>
		<Toolbar.GroupItem value="italic">Italique</Toolbar.GroupItem>
	</Toolbar.Group>
</Story>
