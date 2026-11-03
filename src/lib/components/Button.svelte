<!--
@component
**Button** — Déclenche une **action** (envoyer, enregistrer, ouvrir). Pour **naviguer**, passez `href` : le bouton devient un lien `<a>` avec la même apparence.

- `variant` : `primary` (défaut) · `secondary` · `outline` · `ghost` · `link` · `destructive`. **Une seule action `primary` par vue.**
- `size` : `default` · `sm` · `lg` · `icon`.
- `loading` : indicateur à la place du libellé, **sans changer la largeur** ; les clics sont ignorés mais le focus reste.

**Accessibilité** : un bouton `size="icon"` n'a pas de texte, il exige un `aria-label`.

```svelte
<Button onclick={save} loading={saving}>Enregistrer</Button>
<Button variant="outline" href="/aide">Aide</Button>
<Button size="icon" variant="ghost" aria-label="Fermer"><Icons.X /></Button>
```

[API Bits UI](https://bits-ui.com/docs/components/button)
-->
<script lang="ts">
	import { Button as ButtonPrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '../cn.js';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from './button.js';

	type Props = WithoutChild<ButtonPrimitive.RootProps> & {
		/**
		 * Rôle visuel : `primary` (une seule action principale par vue), `secondary`,
		 * `outline`, `ghost`, `link`, `destructive`.
		 * @default 'primary'
		 */
		variant?: ButtonVariant;
		/**
		 * Gabarit : `default` (44 px), `sm`, `lg`, `icon` (carré, exige un `aria-label`).
		 * @default 'default'
		 */
		size?: ButtonSize;
		/**
		 * Action en cours : le libellé s'efface au profit d'un indicateur, la
		 * largeur ne bouge pas et le bouton ignore les clics (sans perdre le focus).
		 * @default false
		 */
		loading?: boolean;
		/**
		 * Annoncé aux lecteurs d'écran pendant `loading`.
		 * @default 'Chargement…'
		 */
		loadingLabel?: string;
	};

	let {
		variant = 'primary',
		size = 'default',
		loading = false,
		loadingLabel = 'Chargement…',
		class: className,
		children,
		onclick,
		...rest
	}: Props = $props();

	// Un seul handler pour <button> et <a> : on ne type que ce qu'on utilise.
	function handleClick(e: MouseEvent) {
		if (loading) return e.preventDefault();
		(onclick as ((e: MouseEvent) => void) | null | undefined)?.(e);
	}
</script>

<!--
	`aria-disabled` plutôt que `disabled` pendant le chargement : le focus reste sur
	le bouton (un bouton `disabled` le perd, et le lecteur d'écran avec).
	L’indicateur est superposé en absolu au libellé (masqué, pas retiré) : aucun saut de largeur.
-->
<ButtonPrimitive.Root
	{...rest}
	aria-busy={loading || undefined}
	aria-disabled={loading || rest['aria-disabled'] || undefined}
	data-loading={loading || undefined}
	onclick={handleClick}
	class={cn(
		buttonVariants({ variant, size }),
		'group/button',
		loading && 'cursor-progress',
		className
	)}
>
	<span
		class="inline-flex items-center justify-center gap-2 transition-[opacity,transform] duration-base ease-standard group-data-[loading]/button:-translate-y-1 group-data-[loading]/button:opacity-0"
	>
		{@render children?.()}
	</span>
	<span
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 flex translate-y-1 items-center justify-center opacity-0 transition-[opacity,transform] duration-base ease-standard group-data-[loading]/button:translate-y-0 group-data-[loading]/button:opacity-100"
	>
		<span
			class="size-4 rounded-pill border-2 border-current border-r-transparent animate-[mk-spin_700ms_linear_infinite] [animation-play-state:paused] group-data-[loading]/button:[animation-play-state:running] motion-reduce:animate-none motion-reduce:border-r-current motion-reduce:opacity-60"
		></span>
	</span>
	{#if loading}<span class="sr-only">{loadingLabel}</span>{/if}
</ButtonPrimitive.Root>
