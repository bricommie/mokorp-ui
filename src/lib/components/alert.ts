import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants d'`Alert` — feedback inline (structurel, coins nets).
 * Aucune valeur brute : uniquement des utilitaires sémantiques.
 */
export const alertVariants = cva(
	'relative grid w-full grid-cols-[auto_1fr] items-start gap-x-3 gap-y-1 border-2 p-4 font-body text-sm [&>svg]:mt-0.5 [&>svg]:size-4',
	{
		variants: {
			variant: {
				default: 'border-border bg-card text-card-foreground shadow-sm',
				destructive: 'border-border bg-destructive text-destructive-foreground shadow-sm'
			}
		},
		defaultVariants: { variant: 'default' }
	}
);

export type AlertVariant = VariantProps<typeof alertVariants>['variant'];
