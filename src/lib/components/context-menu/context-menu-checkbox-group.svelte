<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	type Props = ContextMenuPrimitive.CheckboxGroupProps;

	let { value = $bindable([]), ...rest }: Props = $props();
</script>

<!-- Passthrough + props bindables (bind:value fonctionne) — §7 -->
<ContextMenuPrimitive.CheckboxGroup bind:value={value as never} {...rest} />
