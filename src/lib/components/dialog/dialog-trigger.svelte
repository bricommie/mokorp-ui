<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	type Props = DialogPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur du dialog : pas de style (passthrough) — §7 -->
<DialogPrimitive.Trigger {...rest} />