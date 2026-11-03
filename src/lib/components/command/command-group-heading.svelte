<!--
@component
**Command.GroupHeading** — Titre d'un groupe de commandes.

[API Bits UI](https://bits-ui.com/docs/components/command)
-->
<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = CommandPrimitive.GroupHeadingProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Étiquette de groupe — §5 -->
<CommandPrimitive.GroupHeading
	{...rest}
	class={cn('px-2 py-1.5 font-body text-xs font-semibold text-muted-foreground', className)}
/>
