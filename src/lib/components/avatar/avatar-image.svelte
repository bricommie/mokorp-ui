<!--
@component
**Avatar.Image** — Image de l'avatar. `alt` = le nom de la personne, ou `alt=""` si le nom est déjà écrit à côté.

[API Bits UI](https://bits-ui.com/docs/components/avatar)
-->
<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.ImageProps;

	let { class: className, ...rest }: Props = $props();
</script>

<AvatarPrimitive.Image {...rest} class={cn('h-full w-full object-cover', className)} />
