import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Variants du `Badge` — §7.
 *
 * Organique (pills `rounded-full`) + motif Label (`font-mono`).
 * Aucune valeur brute.
 */
export const badgeVariants = cva(
	'inline-flex items-center gap-1 rounded-full border-2 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase tracking-[0.08em]',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-primary-foreground border-foreground',
				secondary: 'bg-secondary text-secondary-foreground border-foreground',
				outline: 'bg-transparent text-foreground border-foreground',
				destructive: 'bg-destructive text-destructive-foreground border-foreground'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
