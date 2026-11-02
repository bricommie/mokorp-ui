<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as NavigationMenu from '#lib/components/navigation-menu/index.js';
	import { Root } from '#lib/components/navigation-menu/index.js';

	const { Story } = defineMeta({
		title: 'Components/NavigationMenu',
		component: Root
	});
</script>

<Story name="Default">
	<NavigationMenu.List>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Premier</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#">Lien 1</NavigationMenu.Link>
				<NavigationMenu.Link href="#">Lien 2</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Second</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<NavigationMenu.Link href="#">Lien 3</NavigationMenu.Link>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link href="#">Direct</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport>
		<NavigationMenu.Indicator>
			<div class="relative top-[60%] h-2 w-2 rotate-45 bg-border shadow-md"></div>
		</NavigationMenu.Indicator>
	</NavigationMenu.Viewport>
</Story>
