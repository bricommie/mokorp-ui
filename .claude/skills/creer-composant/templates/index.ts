import Root from './composant.svelte';
import Trigger from './composant-trigger.svelte';
import Content from './composant-content.svelte';

// Seulement si la primitive a un `Portal` : il ne se wrappe jamais, on réexporte celui de Bits UI.
export { Portal } from 'bits-ui';
export { Root, Trigger, Content };
