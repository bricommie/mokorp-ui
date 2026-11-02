<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RadioGroup from '#lib/components/radio-group/index.js';
	import { Root } from '#lib/components/radio-group/index.js';

	const { Story } = defineMeta({
		title: 'Components/RadioGroup',
		component: Root,
		args: { value: 'option-one' }
	});
</script>

<Story name="Default" args={{ value: 'option-one' }}>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-one" />
		<span class="font-body text-sm text-foreground">Option One</span>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-two" />
		<span class="font-body text-sm text-foreground">Option Two</span>
	</div>
	<div class="flex items-center gap-2">
		<RadioGroup.Item value="option-three" disabled />
		<span class="font-body text-sm text-foreground">Option Three (disabled)</span>
	</div>
</Story>
