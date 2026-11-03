<!--
@component
**Combobox.Viewport** — Zone défilante de la liste (à utiliser avec les boutons de défilement).

[API Bits UI](https://bits-ui.com/docs/components/combobox)
-->
<script lang="ts">
	import { Combobox as ComboboxPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = ComboboxPrimitive.ViewportProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Viewport du combobox — §4 -->
<ComboboxPrimitive.Viewport {...rest} class={cn('p-1', className)} />
