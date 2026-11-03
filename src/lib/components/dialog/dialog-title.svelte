<!--
@component
**Dialog.Title** — Titre du dialogue (**obligatoire**) : c'est son nom accessible.

[API Bits UI](https://bits-ui.com/docs/components/dialog)
-->
<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DialogPrimitive.TitleProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Titre du dialog — §5 -->
<DialogPrimitive.Title
	{...rest}
	class={cn('font-display text-lg font-semibold text-foreground', className)}
/>
