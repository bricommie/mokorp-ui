<!--
@component
**AlertDialog.Root** — Dialogue de **confirmation** d'une action importante ou irréversible (« Supprimer le projet ? »). Contrairement à `Dialog`, il ne se ferme **pas** au clic extérieur : l'utilisateur doit choisir.

**Anatomie** : `AlertDialog.Root` › `AlertDialog.Trigger` ; `AlertDialog.Portal` › `AlertDialog.Overlay` + `AlertDialog.Content` › `AlertDialog.Header` (`Title` · `Description`) · `AlertDialog.Footer` › `AlertDialog.Cancel` · `AlertDialog.Action`.

**Accessibilité** : rôle `alertdialog`. Le focus initial va sur `Cancel` (l'option sûre). Le libellé de `Action` nomme l'action (« Supprimer »), jamais « OK ».

```svelte
<AlertDialog.Root bind:open>
	<AlertDialog.Trigger>
		{#snippet child({ props })}<Button variant="destructive" {...props}>Supprimer</Button>{/snippet}
	</AlertDialog.Trigger>
	<AlertDialog.Portal>
		<AlertDialog.Overlay />
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Supprimer le projet ?</AlertDialog.Title>
				<AlertDialog.Description>Cette action est irréversible.</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
				<AlertDialog.Action variant="destructive" onclick={remove}>Supprimer</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/alert-dialog)
-->
<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	type Props = AlertDialogPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<AlertDialogPrimitive.Root bind:open {...rest} />
