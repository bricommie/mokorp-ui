<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as RatingGroup from '#lib/components/rating-group/index.js';
	import { Root } from '#lib/components/rating-group/index.js';

	const { Story } = defineMeta({
		title: 'Components/RatingGroup',
		component: Root,
		args: { value: 3 }
	});
</script>

<Story name="Default" args={{ value: 3 }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>

<Story name="Empty" args={{ value: 0 }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>

<Story name="Disabled" args={{ value: 3, disabled: true }}>
	<RatingGroup.Item index={0} />
	<RatingGroup.Item index={1} />
	<RatingGroup.Item index={2} />
	<RatingGroup.Item index={3} />
	<RatingGroup.Item index={4} />
</Story>
