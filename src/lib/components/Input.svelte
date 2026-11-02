<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '../cn.js';

	type Props = Omit<HTMLInputAttributes, 'class' | 'value'> & {
		class?: string;
		value?: HTMLInputAttributes['value'];
	};

	let { class: className, value = $bindable(''), type, ...rest }: Props = $props();

	const classes = $derived(
		cn(
			'rounded-field flex h-10 w-full border-(length:--border-width) border-input bg-background px-3 py-2 font-body text-sm text-foreground transition-colors file:mr-3 file:border-0 file:bg-transparent file:font-semibold placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive',
			className
		)
	);
</script>

<!-- Structurel + bordure bordure `--border-width` + ring primary au focus ; `aria-invalid` = destructive — §5.
	`type="file"` ne supporte pas `bind:value` : branche dédiée. -->
{#if type === 'file'}
	<input {...rest} {type} class={classes} />
{:else}
	<input {...rest} {type} bind:value class={classes} />
{/if}
