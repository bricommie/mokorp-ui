<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Checkbox from '#lib/components/checkbox/index.js';
	import { Root } from '#lib/components/checkbox/index.js';

	const { Story } = defineMeta({
		title: 'Components/Checkbox',
		component: Root
	});
</script>

<Story name="Checked" args={{ checked: true }} />
<Story name="Unchecked" args={{ checked: false }} />
<Story name="Indeterminate" args={{ indeterminate: true }} />
<Story name="Disabled" args={{ checked: true, disabled: true }} />

<Story name="Group" asChild>
	<Checkbox.Group value={['accept']}>
		<Checkbox.GroupLabel>Toppings</Checkbox.GroupLabel>
		<div class="flex items-center gap-2">
			<Checkbox.Root value="accept" />
			<span class="font-body text-sm text-foreground">Accept terms</span>
		</div>
		<div class="flex items-center gap-2">
			<Checkbox.Root value="newsletter" />
			<span class="font-body text-sm text-foreground">Subscribe to newsletter</span>
		</div>
	</Checkbox.Group>
</Story>
