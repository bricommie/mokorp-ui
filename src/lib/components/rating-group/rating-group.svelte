<script lang="ts">
	import { RatingGroup as RatingGroupPrimitive } from 'bits-ui';
	import { cn } from '../../cn.js';

	type Props = RatingGroupPrimitive.RootProps;

	let { class: className, ...rest }: Props = $props();
</script>

<!-- Structurel (coins nets) — rangée d'étoiles — §4 -->
<RatingGroupPrimitive.Root {...rest} class={cn('inline-flex items-center gap-1', className)} />
