import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Badge` — §7.
 *
 * Organique (`rounded-pill`), en casse normale. `highlight` étiquette une catégorie
 * (lilas, distinct du lime qui signale l'action). Un badge d'état (`success`,
 * `warning`, `destructive`) doit toujours porter un libellé explicite : la
 * couleur seule ne suffit pas (WCAG 1.4.1). Aucune valeur brute.
 */
export const badgeVariants = cva(
	'inline-flex items-center gap-1 rounded-pill border-(length:--border-width) px-2.5 py-0.5 font-body text-xs font-semibold',
	{
		variants: {
			variant: {
				primary: 'border-primary-border bg-primary text-primary-foreground',
				secondary: 'border-transparent bg-secondary text-secondary-foreground',
				outline: 'border-input bg-transparent text-foreground',
				highlight: 'border-transparent bg-highlight text-highlight-foreground',
				success: 'border-transparent bg-success text-success-foreground',
				warning: 'border-transparent bg-warning text-warning-foreground',
				destructive: 'border-transparent bg-destructive text-destructive-foreground'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
