<script lang="ts">
	import '../app.css';
	import { Tooltip } from '#lib';

	let { children } = $props();
</script>

<!-- Un seul fournisseur de tooltips pour toute la page -->
<Tooltip.Provider delayDuration={150}>
	{@render children()}
</Tooltip.Provider>
