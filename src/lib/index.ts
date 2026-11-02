// Point d'entrée de la bibliothèque — §7.

export { cn } from './cn.js';

// Composants mono-partie (racine de `components/`).
export { default as Label } from './components/Label.svelte';
export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Badge } from './components/Badge.svelte';
export { default as Input } from './components/Input.svelte';
export { default as AspectRatio } from './components/AspectRatio.svelte';
export { default as Meter } from './components/Meter.svelte';
export { default as Progress } from './components/Progress.svelte';
export { default as Separator } from './components/Separator.svelte';
export { default as Toggle } from './components/Toggle.svelte';
export { default as Textarea } from './components/Textarea.svelte';
export { default as Alert } from './components/Alert.svelte';
export { default as Kbd } from './components/Kbd.svelte';
export { default as Skeleton } from './components/Skeleton.svelte';
export { default as DateCalendar } from './components/DateCalendar.svelte';
export { default as DateRangeCalendar } from './components/DateRangeCalendar.svelte';
export { default as DatePickerField } from './components/DatePickerField.svelte';
export { default as DateRangePickerField } from './components/DateRangePickerField.svelte';
export { default as ThemeToggle } from './components/ThemeToggle.svelte';
export { default as CardHeader } from './components/CardHeader.svelte';
export { default as CardTitle } from './components/CardTitle.svelte';
export { default as CardDescription } from './components/CardDescription.svelte';
export { default as CardContent } from './components/CardContent.svelte';
export { default as CardFooter } from './components/CardFooter.svelte';

// Variants (CVA) + types — §7.
export { buttonVariants, type ButtonVariant, type ButtonSize } from './components/button.js';
export { badgeVariants, type BadgeVariant } from './components/badge.js';
export { toggleVariants, type ToggleVariant, type ToggleSize } from './components/toggle.js';
export { alertVariants, type AlertVariant } from './components/alert.js';

// État du thème (light / dark) — §9.6.
export { theme, type Theme } from './theme.svelte.js';

// Composants multi-parties (namespaces `X.Root`, `X.Item`, `X.Trigger`…).
export * as Accordion from './components/accordion/index.js';
export * as AlertDialog from './components/alert-dialog/index.js';
export * as Avatar from './components/avatar/index.js';
export * as Calendar from './components/calendar/index.js';
export * as Checkbox from './components/checkbox/index.js';
export * as Collapsible from './components/collapsible/index.js';
export * as Combobox from './components/combobox/index.js';
export * as Command from './components/command/index.js';
export * as ContextMenu from './components/context-menu/index.js';
export * as DateField from './components/date-field/index.js';
export * as DatePicker from './components/date-picker/index.js';
export * as DateRangeField from './components/date-range-field/index.js';
export * as DateRangePicker from './components/date-range-picker/index.js';
export * as Dialog from './components/dialog/index.js';
export * as DropdownMenu from './components/dropdown-menu/index.js';
export * as LinkPreview from './components/link-preview/index.js';
export * as Menubar from './components/menubar/index.js';
export * as NavigationMenu from './components/navigation-menu/index.js';
export * as Pagination from './components/pagination/index.js';
export * as PinInput from './components/pin-input/index.js';
export * as Popover from './components/popover/index.js';
export * as RadioGroup from './components/radio-group/index.js';
export * as RangeCalendar from './components/range-calendar/index.js';
export * as RatingGroup from './components/rating-group/index.js';
export * as ScrollArea from './components/scroll-area/index.js';
export * as Select from './components/select/index.js';
export * as Slider from './components/slider/index.js';
export * as Switch from './components/switch/index.js';
export * as Tabs from './components/tabs/index.js';
export * as TimeField from './components/time-field/index.js';
export * as TimeRangeField from './components/time-range-field/index.js';
export * as ToggleGroup from './components/toggle-group/index.js';
export * as Toolbar from './components/toolbar/index.js';
export * as Table from './components/table/index.js';
export * as Tooltip from './components/tooltip/index.js';

// Icônes internes (traits carrés, `currentColor`).
export * as Icons from './components/icons/index.js';
