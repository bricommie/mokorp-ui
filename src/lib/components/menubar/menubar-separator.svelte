<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = MenubarPrimitive.SeparatorProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Séparateur de menu — §3 -->
<MenubarPrimitive.Separator {...rest} class={cn('h-px bg-border my-1', className)} />