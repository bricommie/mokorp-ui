<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	type Props = DropdownMenuPrimitive.TriggerProps;

	let { ...rest }: Props = $props();
</script>

<!-- Déclencheur du menu : pas de style (passthrough) — §7 -->
<DropdownMenuPrimitive.Trigger {...rest} />
