<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = NavigationMenuPrimitive.ListProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Liste des éléments du menu de navigation — §4 -->
<NavigationMenuPrimitive.List
	{...rest}
	class={cn('group flex flex-1 list-none items-center justify-center gap-1 p-1', className)}
/>
