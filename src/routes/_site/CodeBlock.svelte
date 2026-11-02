<script lang="ts">
	import { Icons, Button } from '#lib';

	type Props = { code: string; label?: string; wrap?: boolean };

	let { code, label = 'Copier', wrap = false }: Props = $props();
	let copied = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => (copied = false), 1600);
		} catch {
			/* presse-papiers indisponible : le code reste sélectionnable */
		}
	}
</script>

<div
	class="relative min-w-0 max-w-full border-2 border-border bg-sidebar text-sidebar-foreground shadow-md"
>
	<pre
		class="p-4 pr-32 font-mono text-sm leading-relaxed {wrap
			? 'whitespace-pre-wrap break-words'
			: 'overflow-x-auto'}"><code>{code}</code></pre>
	<Button
		variant="secondary"
		size="sm"
		class="absolute right-3 top-3"
		onclick={copy}
		aria-label={copied ? 'Copié' : label}
	>
		{#if copied}<Icons.Check />Copié{:else}<Icons.Copy />{label}{/if}
	</Button>
</div>
