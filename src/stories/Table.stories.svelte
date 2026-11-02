<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Table from '#lib/components/table/index.js';
	import { Root } from '#lib/components/table/index.js';

	const { Story } = defineMeta({
		title: 'Composants/Données et retours/Table',
		component: Root,
		parameters: {
			docs: {
				description: {
					component:
						'Tableau de **données** (pas de mise en page). Parties stylées, structure HTML native.\n\n**Anatomie** : `Table.Root` › `Table.Caption` · `Table.Header` › `Table.Row` › `Table.Head` ; `Table.Body` › `Table.Row` › `Table.Cell` ; `Table.Footer`.\n\n**Accessibilité** : un `Caption` décrit le tableau ; les nombres s\'alignent à droite (`class="text-right"`).'
				}
			}
		}
	});
</script>

<Story name="Default" asChild>
	<Table.Root class="w-[28rem]">
		<Table.Caption>Derniers déploiements</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Version</Table.Head>
				<Table.Head>Branche</Table.Head>
				<Table.Head class="text-right">Durée</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row
				><Table.Cell>d-2841</Table.Cell><Table.Cell>main</Table.Cell><Table.Cell class="text-right"
					>49 s</Table.Cell
				></Table.Row
			>
			<Table.Row
				><Table.Cell>d-2840</Table.Cell><Table.Cell>fix/header</Table.Cell><Table.Cell
					class="text-right">1 min 12 s</Table.Cell
				></Table.Row
			>
		</Table.Body>
	</Table.Root>
</Story>
