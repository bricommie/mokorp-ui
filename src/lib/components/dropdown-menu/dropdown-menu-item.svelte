<!--
@component
**DropdownMenu.Item** — Élément d'action du menu. Survol / focus clavier = inversion `primary`.

- `inset` : décale le libellé pour l'aligner avec les items à coche / point.
- `onSelect` : appelé à l'activation (clic, Entrée).

[API Bits UI](https://bits-ui.com/docs/components/dropdown-menu)
-->
<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = DropdownMenuPrimitive.ItemProps & {
		/**
		 * Décale le libellé vers la droite pour l'aligner avec les items à coche ou à point.
		 * @default false
		 */
		inset?: boolean;
	};

	let { class: className, inset = false, ...rest }: Props = $props();
</script>

<!-- Élément de menu — survol/focus inversé (primary) — §3 -->
<DropdownMenuPrimitive.Item
	{...rest}
	class={cn(
		'rounded-item relative flex cursor-pointer select-none items-center gap-2 px-2 py-1.5 font-body text-sm text-foreground outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		inset && 'pl-8',
		className
	)}
/>
