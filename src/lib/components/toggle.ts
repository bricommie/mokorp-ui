import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Toggle` — §7 (API `variant` / `size` façon shadcn).
 *
 * Organique (`rounded-pill`) + bordure `primary-border` à l'état actif
 * (`data-[state=on]:border-primary-border`). Aucune valeur brute : uniquement
 * des utilitaires pointant vers le sémantique.
 */
export const toggleVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-pill border-(length:--border-width) border-transparent font-body text-sm font-medium transition-colors not-data-[state=on]:hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[state=on]:border-primary-border data-[state=on]:bg-primary data-[state=on]:text-primary-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'border-border bg-background'
			},
			size: {
				default: 'h-10 px-3',
				sm: 'h-8 px-2.5 text-xs',
				lg: 'h-12 px-5 text-base'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export type ToggleVariant = VariantProps<typeof toggleVariants>['variant'];
export type ToggleSize = VariantProps<typeof toggleVariants>['size'];
