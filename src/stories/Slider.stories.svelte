<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Slider from '#lib/components/slider/index.js';
	import { Root } from '#lib/components/slider/index.js';

	const { Story } = defineMeta({
		title: 'Components/Slider',
		component: Root,
		args: { type: 'single' }
	});
</script>

<Story name="Default" args={{ type: 'single', value: 50, class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
</Story>

<Story name="Disabled" args={{ type: 'single', value: 30, disabled: true, class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
</Story>

<Story name="Range" args={{ type: 'multiple', value: [20, 80], class: 'w-[300px]' }}>
	<Slider.Range />
	<Slider.Thumb index={0} />
	<Slider.Thumb index={1} />
</Story>
