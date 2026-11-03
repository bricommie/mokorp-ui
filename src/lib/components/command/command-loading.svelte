<!--
@component
**Command.Loading** — État de chargement (résultats asynchrones).

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.LoadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- État de chargement de la commande — §5 -->
<CommandPrimitive.Loading
	{...rest}
	class={cn('py-6 text-center font-body text-sm text-muted-foreground', className)}
/>
