<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Pagination from '#lib/components/pagination/index.js';
	import { Root } from '#lib/components/pagination/index.js';

	const { Story } = defineMeta({
		title: 'Components/Pagination',
		component: Root,
		args: {
			count: 100,
			perPage: 10
		}
	});
</script>

<Story name="Default" asChild>
	<Pagination.Root count={100} perPage={10}>
		{#snippet children({ pages })}
			<Pagination.PrevButton>Préc.</Pagination.PrevButton>
			{#each pages as page (page.key)}
				{#if page.type === 'page'}
					<Pagination.Page {page}>{page.value}</Pagination.Page>
				{:else}
					<span class="px-1 font-mono text-xs text-muted-foreground">…</span>
				{/if}
			{/each}
			<Pagination.NextButton>Suiv.</Pagination.NextButton>
		{/snippet}
	</Pagination.Root>
</Story>
