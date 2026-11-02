import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants d'`Alert` — feedback inline (`rounded-surface`, aplat).
 * Aucune valeur brute : uniquement des utilitaires sémantiques.
 */
export const alertVariants = cva(
	'relative grid w-full grid-cols-[auto_1fr] items-start gap-x-3 gap-y-1 rounded-surface border-(length:--border-width) p-4 font-body text-sm [&>svg]:mt-0.5 [&>svg]:size-4',
	{
		variants: {
			variant: {
				default: 'border-border-subtle bg-card text-card-foreground',
				success: 'border-transparent bg-success text-success-foreground',
				warning: 'border-transparent bg-warning text-warning-foreground',
				destructive: 'border-transparent bg-destructive text-destructive-foreground'
			}
		},
		defaultVariants: { variant: 'default' }
	}
);

export type AlertVariant = VariantProps<typeof alertVariants>['variant'];
