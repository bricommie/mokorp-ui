<script lang="ts" module>
	export type NavbarItem = {
		label: string;
		href: string;
	};

	export type NavbarVariant = 'solid' | 'glass';
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Spring } from 'svelte/motion';
	import { fly, slide } from 'svelte/transition';
	import { cn } from '../cn.js';
	import { duration, easings, isReducedMotion } from '../motion/index.js';

	type Props = {
		items: NavbarItem[];
		/** `href` de la page courante. Dans SvelteKit : `current={page.url.pathname}`. */
		current?: string;
		/** Nom accessible du landmark `<nav>` (obligatoire dès qu'il y a plusieurs nav). */
		label?: string;
		/** Libellé du bouton menu (mobile). */
		menuLabel?: string;
		/**
		 * `solid` : surface carte opaque (défaut).
		 * `glass` : surface translucide floutée + halo lumineux qui suit la souris.
		 */
		variant?: NavbarVariant;
		brand?: Snippet;
		actions?: Snippet;
		class?: string;
		onNavigate?: (item: NavbarItem) => void;
	};

	let {
		items,
		current = $bindable(),
		label = 'Navigation principale',
		menuLabel = 'Menu',
		variant = 'solid',
		brand,
		actions,
		class: className,
		onNavigate
	}: Props = $props();

	const panelId = $props.id();

	let list = $state<HTMLUListElement>();
	let links = $state<HTMLAnchorElement[]>([]);
	let hovered = $state<number | null>(null);
	let open = $state(false);

	const activeIndex = $derived(items.findIndex((i) => i.href === current));

	/*
	 * Deux calques animés par ressort (`svelte/motion`) plutôt que par CSS :
	 * leur cible (position/largeur d'un lien) n'est connue qu'en mesurant le DOM,
	 * et un ressort enchaîne naturellement les changements de cible en plein vol.
	 * - `active` : pastille primary sous la page courante.
	 * - `hover`  : pastille muted qui suit le pointeur / le focus clavier.
	 */
	const springOpts = { stiffness: 0.18, damping: 0.72 };
	const active = { x: new Spring(0, springOpts), w: new Spring(0, springOpts) };
	const hover = { x: new Spring(0, springOpts), w: new Spring(0, springOpts) };
	let activeReady = $state(false);

	function moveTo(target: typeof active, el: HTMLElement | undefined, instant: boolean) {
		if (!el) return;
		const opts = { instant: instant || isReducedMotion() };
		target.x.set(el.offsetLeft, opts);
		target.w.set(el.offsetWidth, opts);
	}

	// Suit la page courante ; première mesure sans animation (pas de glissé au chargement).
	$effect(() => {
		const el = links[activeIndex];
		moveTo(active, el, !activeReady);
		if (el) activeReady = true;
	});

	// Le survol part de la pastille active quand on entre dans la liste.
	$effect(() => {
		if (hovered === null) return;
		moveTo(hover, links[hovered], false);
	});

	// Re-mesure si la police charge ou si la fenêtre change de taille.
	$effect(() => {
		if (!list) return;
		const ro = new ResizeObserver(() => moveTo(active, links[activeIndex], true));
		ro.observe(list);
		return () => ro.disconnect();
	});

	/*
	 * Halo « glass » : un disque primary flouté qui suit le pointeur avec un ressort
	 * mou (il traîne derrière la souris, puis la rattrape). La surface floutée
	 * (`backdrop-blur`) et `overflow-hidden` en font une lueur sous le verre.
	 * Souris / stylet uniquement : au doigt, le halo resterait figé au dernier tap.
	 */
	const glass = $derived(variant === 'glass');
	const glowOpts = { stiffness: 0.07, damping: 0.55 };
	const glow = { x: new Spring(0, glowOpts), y: new Spring(0, glowOpts) };
	let glowVisible = $state(false);
	let glowPressed = $state(false);

	function trackGlow(e: PointerEvent, entering = false) {
		if (!glass || e.pointerType === 'touch') return;
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		// À l'entrée, le halo part de sous le pointeur au lieu de traverser la barre.
		const opts = { instant: entering || isReducedMotion() };
		glow.x.set(e.clientX - rect.left, opts);
		glow.y.set(e.clientY - rect.top, opts);
		glowVisible = true;
	}

	function enter(i: number) {
		if (hovered === null) moveTo(hover, links[i], true);
		hovered = i;
	}

	function select(item: NavbarItem) {
		current = item.href;
		open = false;
		onNavigate?.(item);
	}
</script>

<!--
	Composant de librairie : les `href` sont fournis (et déjà résolus via `resolve()`)
	par l'app consommatrice, la règle SvelteKit ne s'applique pas ici.
-->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<nav
	aria-label={label}
	data-variant={variant}
	onpointerenter={(e) => trackGlow(e, true)}
	onpointermove={(e) => trackGlow(e)}
	onpointerleave={() => {
		glowVisible = false;
		glowPressed = false;
	}}
	onpointerdown={(e) => e.pointerType !== 'touch' && (glowPressed = true)}
	onpointerup={() => (glowPressed = false)}
	class={cn(
		'relative flex flex-wrap items-center gap-4 rounded-surface border-(length:--border-width) px-3 py-2 font-body',
		glass
			? 'isolate overflow-hidden border-foreground/10 bg-linear-to-br from-card/70 to-card/30 text-foreground shadow-lg backdrop-blur-xl backdrop-saturate-150'
			: 'border-border-subtle bg-card text-card-foreground',
		className
	)}
>
	{#if glass}
		<!-- Reflet du verre : liseré clair en haut, sous le contenu. -->
		<span
			aria-hidden="true"
			class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-foreground/30 to-transparent"
		></span>
		<!-- Halo qui suit la souris. -->
		<span
			aria-hidden="true"
			class={cn(
				'pointer-events-none absolute top-0 left-0 -z-10 size-56 rounded-pill bg-radial from-primary/70 from-5% via-primary/25 via-40% to-transparent to-70% blur-md transition-[opacity,scale] duration-base ease-standard motion-reduce:transition-none',
				glowVisible ? 'opacity-100' : 'opacity-0',
				glowPressed ? 'scale-75' : 'scale-100'
			)}
			style:translate="calc({glow.x.current}px - 50%) calc({glow.y.current}px - 50%)"
		></span>
	{/if}

	{#if brand}<div class="flex shrink-0 items-center pl-2">{@render brand()}</div>{/if}

	<!-- Liste desktop -->
	<ul
		bind:this={list}
		class="relative hidden flex-1 list-none items-center gap-1 md:flex"
		onpointerleave={() => (hovered = null)}
		onfocusout={(e) => {
			if (!list?.contains(e.relatedTarget as Node)) hovered = null;
		}}
	>
		<span
			aria-hidden="true"
			class={cn(
				'pointer-events-none absolute inset-y-0 left-0 rounded-control transition-opacity duration-fast',
				glass ? 'bg-foreground/10 ring-1 ring-foreground/10 ring-inset' : 'bg-muted'
			)}
			class:opacity-0={hovered === null || hovered === activeIndex}
			style:transform="translateX({hover.x.current}px)"
			style:width="{hover.w.current}px"
		></span>
		<span
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-0 rounded-control border-(length:--border-width) border-primary-border bg-primary"
			class:opacity-0={activeIndex < 0 || !activeReady}
			style:transform="translateX({active.x.current}px)"
			style:width="{active.w.current}px"
		></span>

		{#each items as item, i (item.href)}
			<li>
				<a
					bind:this={links[i]}
					href={item.href}
					aria-current={i === activeIndex ? 'page' : undefined}
					onpointerenter={() => enter(i)}
					onfocus={() => enter(i)}
					onclick={() => select(item)}
					class="relative inline-flex h-10 items-center rounded-control px-4 text-sm font-semibold text-foreground outline-none transition-colors duration-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card aria-[current=page]:text-primary-foreground"
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>

	<div class="ml-auto flex items-center gap-2">
		{#if actions}{@render actions()}{/if}

		<!-- Bouton menu mobile : l'icône se transforme en croix (3 traits en CSS) -->
		<button
			type="button"
			class="group/menu relative inline-flex size-10 items-center justify-center rounded-control text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
			aria-expanded={open}
			aria-controls={panelId}
			aria-label={menuLabel}
			onclick={() => (open = !open)}
		>
			{#each ['-translate-y-1.5 group-aria-expanded/menu:translate-y-0 group-aria-expanded/menu:rotate-45', 'group-aria-expanded/menu:scale-x-0 group-aria-expanded/menu:opacity-0', 'translate-y-1.5 group-aria-expanded/menu:translate-y-0 group-aria-expanded/menu:-rotate-45'] as bar, b (b)}
				<span
					aria-hidden="true"
					class={cn(
						'absolute h-0.5 w-5 rounded-pill bg-current transition-[transform,opacity] duration-base ease-emphasized',
						bar
					)}
				></span>
			{/each}
		</button>
	</div>

	<!-- Panneau mobile : `slide` pour le conteneur, `fly` décalé pour chaque lien -->
	{#if open}
		<ul
			id={panelId}
			class="basis-full list-none overflow-hidden md:hidden"
			transition:slide={{ duration: duration('base'), easing: easings.standard }}
		>
			{#each items as item, i (item.href)}
				<li
					in:fly={{
						y: -8,
						delay: duration('instant') && i * 40,
						duration: duration('base'),
						easing: easings.enter
					}}
				>
					<a
						href={item.href}
						aria-current={i === activeIndex ? 'page' : undefined}
						onclick={() => select(item)}
						class="flex h-11 items-center rounded-item border-(length:--border-width) border-transparent px-3 text-sm font-semibold text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:border-primary-border aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
