<!--
@component
**Alert** — Message **contextuel** posé dans la page : résultat d'une action, avertissement, erreur. Pour une confirmation bloquante, utilisez `AlertDialog`.

- `variant` : `default` · `success` · `warning` · `destructive`.
- `icon` : snippet optionnel affiché à gauche.

**Accessibilité** : `role="alert"` (annoncé immédiatement) pour `warning` et `destructive`, `role="status"` sinon.

```svelte
<Alert variant="success">
	{#snippet icon()}<Icons.Check />{/snippet}
	Vos modifications ont été enregistrées.
</Alert>
```
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';
	import { alertVariants, type AlertVariant } from './alert.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & {
		/**
		 * Ton du message : `default`, `success`, `warning`, `destructive`.
		 * `warning` et `destructive` sont annoncés immédiatement (`role="alert"`).
		 * @default 'default'
		 */
		variant?: AlertVariant;
		/** Classes Tailwind ajoutées (fusionnées avec `cn`). */
		class?: string;
		/** Icône optionnelle affichée à gauche (décorative). */
		icon?: Snippet;
		/** Contenu du message (titre et texte libres). */
		children?: Snippet;
	};

	let { variant = 'default', class: className, icon, children, ...rest }: Props = $props();
</script>

<!-- `role="alert"` pour destructive et warning (annoncés), `status` sinon — §7 -->
<div
	role={variant === 'destructive' || variant === 'warning' ? 'alert' : 'status'}
	{...rest}
	class={cn(alertVariants({ variant }), !icon && 'grid-cols-1', className)}
>
	{#if icon}{@render icon()}{/if}
	<div class="flex flex-col gap-1">{@render children?.()}</div>
</div>
