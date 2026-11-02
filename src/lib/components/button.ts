import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Button` — §7 (API `variant` / `size` façon shadcn).
 *
 * Thème Signal : forme `rounded-control`, aplat sans ombre, survol par
 * assombrissement (`*-hover`, dérivé dans `tokens/states.css`) et légère
 * compression à la pression. Le même comportement dans les deux faces : un
 * thème change des valeurs, jamais une métaphore d'interaction.
 *
 * Mouvement : la pression compresse en `duration-instant`, le relâchement
 * revient avec `ease-emphasized` (petit rebond). Tout passe par les tokens,
 * donc tout s'éteint avec `prefers-reduced-motion` sans classe dédiée.
 *
 * `primary` porte `border-primary-border` : une bordure encre en face claire
 * (le lime ne se détache pas du fond clair), transparente en face sombre.
 */
export const buttonVariants = cva(
	'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control border-(length:--border-width) font-body font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-fast ease-emphasized active:scale-[0.96] active:duration-instant active:ease-standard motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary: 'border-primary-border bg-primary text-primary-foreground hover:bg-primary-hover',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover',
				outline: 'border-input bg-transparent text-foreground hover:bg-muted',
				ghost: 'border-transparent bg-transparent text-foreground hover:bg-muted',
				link: 'border-transparent text-link underline decoration-[length:var(--border-width)] underline-offset-4 hover:decoration-2',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover'
			},
			size: {
				default: 'h-11 px-5 text-sm',
				sm: 'h-9 px-4 text-sm',
				lg: 'h-12 px-6 text-base',
				icon: 'size-11'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	}
);

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
