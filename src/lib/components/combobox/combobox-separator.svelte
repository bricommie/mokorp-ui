<script lang="ts">
	import { Combobox as ComboboxPrimitive, Separator } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = Separator.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur du combobox — §3 -->
<ComboboxPrimitive.Separator {...rest} class={cn('h-px bg-border my-1', className)} />