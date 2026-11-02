import Root from './date-picker.svelte';
import Calendar from './date-picker-calendar.svelte';
import Content from './date-picker-content.svelte';
import ContentStatic from './date-picker-content-static.svelte';
import Trigger from './date-picker-trigger.svelte';
import Arrow from './date-picker-arrow.svelte';
import Close from './date-picker-close.svelte';

// Parties partagées avec `calendar` et `date-field` (mêmes primitives bits-ui).
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
	YearSelect,
	Cell,
	Day
} from '../calendar/index.js';
import { Input, Label, Segment } from '../date-field/index.js';

export {
	Root,
	Calendar,
	Content,
	ContentStatic,
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
