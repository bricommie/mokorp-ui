import Root from './tooltip.svelte';
import Trigger from './tooltip-trigger.svelte';
import Content from './tooltip-content.svelte';
import Arrow from './tooltip-arrow.svelte';
import Provider from './tooltip-provider.svelte';

export { Root, Trigger, Content, Arrow, Provider };

// `Portal` ne se wrappe jamais : on réexporte celui de bits-ui — §7
export { Portal } from 'bits-ui';
