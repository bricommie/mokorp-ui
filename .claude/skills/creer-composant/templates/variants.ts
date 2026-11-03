import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Composant`.
 *
 * __Expliquer les choix de tokens : rôle de rayon, couples de couleurs,
 * durée et courbe de transition, et pourquoi.__
 */
export const composantVariants = cva(
	'inline-flex items-center gap-2 rounded-ROLE border-(length:--border-width) font-body text-sm transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
	{
		variants: {
			variant: {
				primary: 'border-primary-border bg-primary text-primary-foreground',
				secondary: 'border-transparent bg-secondary text-secondary-foreground'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export type ComposantVariant = VariantProps<typeof composantVariants>['variant'];
