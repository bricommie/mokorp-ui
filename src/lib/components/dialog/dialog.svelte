<!--
@component
**Dialog.Root** — Fenêtre **modale** pour une tâche courte qui interrompt le flux (éditer un profil, confirmer des paramètres). Pour une action destructive, utilisez `AlertDialog`.

**Anatomie** : `Dialog.Root` › `Dialog.Trigger` ; `Dialog.Portal` › `Dialog.Overlay` + `Dialog.Content` › `Dialog.Header` (`Title` · `Description`) · contenu · `Dialog.Footer` (+ `Dialog.Close`). Utilisable avec `bind:open`.

**Accessibilité** : `Dialog.Title` est **obligatoire**. Le focus est piégé à l'intérieur puis rendu au déclencheur ; Échap et le clic extérieur ferment.

```svelte
<Dialog.Root bind:open>
	<Dialog.Trigger>
		{#snippet child({ props })}<Button variant="outline" {...props}>Modifier le profil</Button>{/snippet}
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay />
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Modifier le profil</Dialog.Title>
				<Dialog.Description>Vos changements sont visibles par l'équipe.</Dialog.Description>
			</Dialog.Header>
			…
			<Dialog.Footer><Button onclick={save}>Enregistrer</Button></Dialog.Footer>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/dialog)
-->
<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.RootProps;

	let { open = $bindable(false), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:open fonctionne) — §7 -->
<DialogPrimitive.Root bind:open {...rest} />
