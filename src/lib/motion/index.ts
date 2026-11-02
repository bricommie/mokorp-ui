/**
 * Mouvement côté JS — miroir des tokens de `theme/tokens/motion.css`.
 *
 * Le CSS couvre les états simples (survol, pression, data-state). Dès qu'on
 * passe par `svelte/transition` ou `svelte/motion` (entrée/sortie du DOM,
 * ressorts), la durée vit en JS : ce module garantit qu'elle reste alignée sur
 * les mêmes rôles et qu'elle tombe à 0 quand l'utilisateur réduit les animations.
 */
import { backOut, cubicIn, cubicOut, quintOut } from 'svelte/easing';
import { prefersReducedMotion } from 'svelte/motion';
import type { TransitionConfig } from 'svelte/transition';

/** Mêmes rôles que `--duration-*` (ms). */
export const durations = {
	instant: 90,
	fast: 150,
	base: 220,
	slow: 320
} as const;

export type DurationToken = keyof typeof durations;

/** Approximation des `--ease-*` avec les courbes de `svelte/easing`. */
export const easings = {
	standard: quintOut,
	enter: cubicOut,
	exit: cubicIn,
	emphasized: backOut
} as const;

export type EasingToken = keyof typeof easings;

/**
 * `true` si le système demande moins d'animations OU si `<html data-motion="reduced">`
 * est posé (barre d'outils Storybook, réglage dans l'app).
 * Lecture réactive : utilisable dans un `$derived` ou un template.
 */
export function isReducedMotion(): boolean {
	if (prefersReducedMotion.current) return true;
	return typeof document !== 'undefined' && document.documentElement.dataset.motion === 'reduced';
}

/** Durée d'un token en ms, ramenée à 0 en mouvement réduit. */
export function duration(token: DurationToken): number {
	return isReducedMotion() ? 0 : durations[token];
}

type PopParams = {
	/** Décalage vertical de départ, en px (négatif = vient du haut). */
	y?: number;
	/** Échelle de départ. */
	start?: number;
	duration?: DurationToken;
	easing?: EasingToken;
};

/**
 * Transition « pop » des surfaces flottantes (popover, menu, calendrier) :
 * fondu + léger zoom + glissé. En mouvement réduit, il ne reste qu'un fondu
 * très court — l'apparition reste perceptible, sans déplacement.
 */
export function pop(
	node: Element,
	{ y = -6, start = 0.96, duration: d = 'base', easing = 'enter' }: PopParams = {}
): TransitionConfig {
	if (isReducedMotion()) {
		return { duration: durations.instant, css: (t) => `opacity: ${t}` };
	}
	const base = getComputedStyle(node).transform;
	const transform = base === 'none' ? '' : base;
	return {
		duration: durations[d],
		easing: easings[easing],
		css: (t, u) =>
			`opacity: ${t}; transform: ${transform} translateY(${u * y}px) scale(${start + (1 - start) * t});`
	};
}
