<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { theme } from '../theme.svelte.js';
	import { cn } from '../cn.js';
	import Sun from './icons/sun.svelte';
	import Moon from './icons/moon.svelte';

	type Props = Omit<HTMLButtonAttributes, 'class'> & { class?: string; label?: string };

	let { class: className, label = 'Basculer le thème', ...rest }: Props = $props();

	onMount(() => theme.sync());
</script>

<!-- Bouton organique (pill) : affiche l'icône de la face VERS laquelle on bascule — §5 -->
<button
	type="button"
	aria-label={label}
	aria-pressed={theme.current === 'dark'}
	{...rest}
	onclick={(e) => {
		theme.toggle();
		rest.onclick?.(e);
	}}
	class={cn(
		'inline-flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		className
	)}
>
	{#if theme.current === 'dark'}<Sun class="size-5" />{:else}<Moon class="size-5" />{/if}
</button>
