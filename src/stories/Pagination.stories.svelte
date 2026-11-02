<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Pagination from '#lib/components/pagination/index.js';
	import { Root } from '#lib/components/pagination/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Navigation/Pagination',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Navigation entre les **pages d\'une liste** (résultats, tableau).\n\n**Anatomie** : `Pagination.Root` (snippet `children` avec `pages`) › `Pagination.PrevButton` · `Pagination.Page` (une par page, ou ellipse) · `Pagination.NextButton`.\n\n**Accessibilité** : la page courante porte `aria-current="page"`. Donnez un `aria-label` au Root (« Pagination des résultats »).'
				}
			}
		},
		argTypes: {
			count: {
				control: 'number',
				description: "Nombre total d'éléments à paginer.",
				table: {
					category: 'Props'
				}
			},
			perPage: {
				control: 'number',
				description: 'Éléments par page.',
				table: {
					defaultValue: {
						summary: '1'
					},
					category: 'Props'
				}
			},
			page: {
				control: 'number',
				description: 'Page courante (à partir de 1). Utilisable avec `bind:page`.',
				table: {
					defaultValue: {
						summary: '1'
					},
					category: 'Props'
				}
			},
			siblingCount: {
				control: 'number',
				description: 'Pages visibles de chaque côté de la page courante.',
				table: {
					defaultValue: {
						summary: '1'
					},
					category: 'Props'
				}
			},
			onPageChange: {
				description: 'Appelé quand la page change.',
				table: {
					type: {
						summary: '(page: number) => void'
					},
					category: 'Événements'
				}
			}
		},
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
