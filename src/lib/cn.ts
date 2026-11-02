import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Helper `cn()` — §7.
 * Combine `clsx` (composition conditionnelle) + `tailwind-merge` (résolution des
 * conflits de classes Tailwind). Point d'entrée unique pour la composition de
 * classes dans tous les composants.
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
