<!--
@component
**Avatar.Root** — Image de profil avec **repli** (initiales) si l'image manque ou ne charge pas.

**Anatomie** : `Avatar.Root` › `Avatar.Image` · `Avatar.Fallback`.

```svelte
<Avatar.Root>
	<Avatar.Image src={user.photo} alt={user.name} />
	<Avatar.Fallback>AB</Avatar.Fallback>
</Avatar.Root>
```

[API Bits UI](https://bits-ui.com/docs/components/avatar)
-->
<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = AvatarPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Organique (rounded-pill) + surface bordure `--border-width` — §4 / §5 -->
<AvatarPrimitive.Root
	{...rest}
	class={cn(
		'relative flex size-10 shrink-0 overflow-hidden rounded-pill border-(length:--border-width) border-border',
		className
	)}
/>
