import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Button` — §7 (API `variant` / `size` façon shadcn).
 *
 * Structurel (coins nets) + ombre d'élévation (offset dur en light, glow en dark).
 * Aucune valeur brute : uniquement des utilitaires pointant vers le sémantique.
 */
export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-semibold transition-[box-shadow,transform,background-color,border-color,color] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary:
					'bg-primary text-primary-foreground border-2 border-foreground shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none',
				secondary:
					'bg-secondary text-secondary-foreground border-2 border-foreground shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none',
				outline:
					'bg-background text-foreground hover:bg-muted border-2 border-foreground shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none',
				ghost: 'bg-transparent text-foreground hover:bg-muted',
				link: 'text-foreground underline decoration-2 underline-offset-4 hover:bg-muted',
				destructive:
					'bg-destructive text-destructive-foreground border-2 border-foreground shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none'
			},
			size: {
				default: 'h-10 px-4 py-2 text-sm',
				sm: 'h-8 px-3 text-xs',
				lg: 'h-12 px-6 text-base',
				icon: 'size-10'
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
