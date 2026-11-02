import Root from './date-range-picker.svelte';
import Calendar from './date-range-picker-calendar.svelte';
import Content from './date-range-picker-content.svelte';
import Trigger from './date-range-picker-trigger.svelte';
import Arrow from './date-range-picker-arrow.svelte';
import Close from './date-range-picker-close.svelte';

// Parties partagées : `Grid`, `Header`, `Heading`… proviennent de `calendar`,
// `Cell`/`Day` de `range-calendar`, les segments de `date-field` et les champs
// début/fin de `date-range-field` (mêmes primitives bits-ui).
import {
	Grid,
	GridBody,
	GridHead,
	GridRow,
	HeadCell,
	Header,
	Heading,
	NextButton,
	PrevButton,
	MonthSelect,
	YearSelect
} from '../calendar/index.js';
import { Cell, Day } from '../range-calendar/index.js';
import { Input, Label } from '../date-range-field/index.js';
import { Segment } from '../date-field/index.js';

export {
	Root,
	Calendar,
	Content,
	Trigger,
	Arrow,
	Close,
	Grid,
	GridBody,
	GridHead,
	GridRow,
	HeadCell,
	Header,
	Heading,
	NextButton,
	PrevButton,
	MonthSelect,
	YearSelect,
	Cell,
	Day,
	Input,
	Label,
	Segment
};

export { Portal } from 'bits-ui';
