<script lang="ts">
	import { CalendarDate, Time } from '@internationalized/date';
	import type { DateValue } from '@internationalized/date';
	import type { SegmentPart, TimeSegmentPart } from 'bits-ui';
	import {
		Checkbox,
		Combobox,
		DateCalendar,
		DateField,
		DatePickerField,
		DateRangeCalendar,
		DateRangePickerField,
		Input,
		Label,
		PinInput,
		RadioGroup,
		RatingGroup,
		Select,
		Slider,
		Switch,
		Textarea,
		TimeField
	} from '#lib';
	import Plate from '../Plate.svelte';

	// Champs
	let name = $state('mokorp-ui');
	let slug = $state('mokorp ui!');
	const slugInvalid = $derived(/[^a-z0-9-]/.test(slug));
	let notes = $state('');

	// Choix
	let channels = $state<string[]>(['email']);
	let plan = $state('team');
	let digest = $state(true);
	let beta = $state(false);

	// Select + combobox
	const regions = [
		{ value: 'par', label: 'Paris (eu-west-3)' },
		{ value: 'fra', label: 'Francfort (eu-central-1)' },
		{ value: 'iad', label: 'Virginie (us-east-1)' },
		{ value: 'sin', label: 'Singapour (ap-southeast-1)' }
	];
	let region = $state('par');
	let priority = $state('normale');
	const priorities = [
		{ value: 'basse', label: 'Basse' },
		{ value: 'normale', label: 'Normale' },
		{ value: 'haute', label: 'Haute' },
		{ value: 'critique', label: 'Critique' }
	];
	const frameworks = ['Svelte', 'SvelteKit', 'Solid', 'Vue', 'Nuxt', 'Astro', 'Remix'];
	let search = $state('');
	let framework = $state('');
	const filtered = $derived(
		search === ''
			? frameworks
			: frameworks.filter((f) => f.toLowerCase().includes(search.toLowerCase()))
	);

	// Curseurs, notes, code
	let budget = $state<number[]>([20, 65]);
	let rating = $state(4);
	let pin = $state('');

	// Dates
	let launch = $state<DateValue | undefined>(new CalendarDate(2026, 11, 14));
	let birthday = $state<DateValue | undefined>(new CalendarDate(1990, 4, 2));
	let slot = $state<Time | undefined>(new Time(10, 30));
	let period = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2026, 11, 9),
		end: new CalendarDate(2026, 11, 13)
	});
	let day = $state<DateValue | undefined>(new CalendarDate(2026, 11, 18));
	let week = $state<{ start: DateValue | undefined; end: DateValue | undefined }>({
		start: new CalendarDate(2026, 11, 23),
		end: new CalendarDate(2026, 11, 27)
	});
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-12">
	<Plate
		class="md:col-span-5"
		caption="Label, Input et Textarea : l’erreur passe par aria-invalid, pas par une classe."
	>
		<div class="grid gap-2">
			<Label for="f-name">Nom du projet</Label>
			<Input id="f-name" bind:value={name} placeholder="mon-projet" />
		</div>
		<div class="grid gap-2">
			<Label for="f-slug">Identifiant</Label>
			<Input
				id="f-slug"
				bind:value={slug}
				aria-invalid={slugInvalid}
				aria-describedby="f-slug-msg"
			/>
			<p
				id="f-slug-msg"
				class="text-xs {slugInvalid ? 'font-semibold text-destructive' : 'text-muted-foreground'}"
			>
				{slugInvalid
					? 'Utilisez uniquement des minuscules, des chiffres et des tirets.'
					: 'Identifiant valide.'}
			</p>
		</div>
		<div class="grid gap-2">
			<Label for="f-notes">Notes de version</Label>
			<Textarea id="f-notes" bind:value={notes} placeholder="Ce qui change dans cette version…" />
		</div>
	</Plate>

	<Plate
		class="md:col-span-4"
		caption="Checkbox, RadioGroup et Switch : indicateurs carrés, ronds, puis en pilule."
	>
		<Checkbox.Group bind:value={channels} aria-labelledby="f-channels">
			<Checkbox.GroupLabel id="f-channels">Canaux d’alerte</Checkbox.GroupLabel>
			{#each [['email', 'E-mail'], ['slack', 'Slack'], ['sms', 'SMS']] as [v, l] (v)}
				<label class="flex cursor-pointer items-center gap-2 text-sm">
					<Checkbox.Root value={v} />{l}
				</label>
			{/each}
		</Checkbox.Group>
		<RadioGroup.Root bind:value={plan} aria-label="Formule">
			{#each [['solo', 'Solo'], ['team', 'Équipe'], ['org', 'Organisation']] as [v, l] (v)}
				<label class="flex cursor-pointer items-center gap-2 text-sm">
					<RadioGroup.Item value={v} />{l}
				</label>
			{/each}
		</RadioGroup.Root>
		<div class="grid gap-3">
			<label class="flex cursor-pointer items-center justify-between gap-3 text-sm">
				Résumé hebdomadaire <Switch.Root bind:checked={digest}><Switch.Thumb /></Switch.Root>
			</label>
			<label class="flex cursor-pointer items-center justify-between gap-3 text-sm">
				Canal bêta <Switch.Root bind:checked={beta}><Switch.Thumb /></Switch.Root>
			</label>
		</div>
	</Plate>

	<Plate
		class="md:col-span-3"
		caption="Select et Combobox : coche sur la valeur choisie, recherche instantanée."
	>
		<div class="grid gap-2">
			<Label>Région</Label>
			<Select.Root type="single" bind:value={region} items={regions}>
				<Select.Trigger aria-label="Région"
					><Select.Value placeholder="Choisir une région" /></Select.Trigger
				>
				<Select.Portal>
					<Select.Content>
						{#each regions as r (r.value)}<Select.Item value={r.value} label={r.label} />{/each}
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
		<div class="grid gap-2">
			<Label>Priorité</Label>
			<Select.Root type="single" bind:value={priority} items={priorities}>
				<Select.Trigger aria-label="Priorité"><Select.Value placeholder="Choisir" /></Select.Trigger
				>
				<Select.Portal>
					<Select.Content>
						<Select.Group>
							<Select.GroupHeading>Standard</Select.GroupHeading>
							<Select.Item value="basse" label="Basse" />
							<Select.Item value="normale" label="Normale" />
						</Select.Group>
						<Select.Group>
							<Select.GroupHeading>Urgent</Select.GroupHeading>
							<Select.Item value="haute" label="Haute" />
							<Select.Item value="critique" label="Critique" disabled />
						</Select.Group>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
		<div class="grid gap-2">
			<Label for="f-fw">Framework</Label>
			<Combobox.Root
				type="single"
				bind:value={framework}
				onOpenChange={(o) => o && (search = '')}
				inputValue={search}
			>
				<div class="flex">
					<Combobox.Input
						id="f-fw"
						placeholder="Rechercher…"
						oninput={(e) => (search = e.currentTarget.value)}
						defaultValue={framework}
					/>
					<Combobox.Trigger aria-label="Afficher les frameworks" />
				</div>
				<Combobox.Portal>
					<Combobox.Content>
						{#each filtered as f (f)}<Combobox.Item value={f} label={f} />{:else}
							<p class="px-2 py-3 text-center font-serif text-sm italic text-muted-foreground">
								Aucun framework ne correspond.
							</p>
						{/each}
					</Combobox.Content>
				</Combobox.Portal>
			</Combobox.Root>
		</div>
	</Plate>

	<Plate class="md:col-span-5" caption="Slider (plage), RatingGroup et PinInput.">
		<div class="grid gap-3">
			<div class="flex items-baseline justify-between">
				<Label id="f-budget">Budget mensuel</Label>
				<span class="font-display text-lg font-bold tabular-nums">{budget[0]} à {budget[1]} k€</span
				>
			</div>
			<Slider.Root type="multiple" bind:value={budget} min={0} max={100} step={5}>
				<Slider.Range />
				<Slider.Thumb index={0} aria-labelledby="f-budget" />
				<Slider.Thumb index={1} aria-labelledby="f-budget" />
			</Slider.Root>
		</div>
		<div class="grid gap-2">
			<Label id="f-rating">Satisfaction : {rating} sur 5</Label>
			<RatingGroup.Root bind:value={rating} max={5} aria-labelledby="f-rating">
				{#each [0, 1, 2, 3, 4] as i (i)}<RatingGroup.Item
						index={i}
						aria-label={`${i + 1} étoile${i > 0 ? 's' : ''}`}
					/>{/each}
			</RatingGroup.Root>
		</div>
		<div class="grid gap-2">
			<Label id="f-pin">Code de vérification</Label>
			<PinInput.Root maxlength={6} bind:value={pin} aria-labelledby="f-pin">
				{#snippet children({ cells })}
					{#each cells as cell, i (i)}<PinInput.Cell {cell}>{cell.char}</PinInput.Cell>{/each}
				{/snippet}
			</PinInput.Root>
		</div>
	</Plate>

	<Plate
		class="md:col-span-7"
		caption="DatePickerField, DateRangePickerField, DateField et TimeField : segments éditables au clavier."
	>
		<div class="grid gap-5 sm:grid-cols-2">
			<DatePickerField label="Date de mise en ligne" bind:value={launch} />
			<DateRangePickerField label="Période de gel" bind:value={period} />
			<DateField.Root bind:value={birthday} locale="fr-FR">
				<div class="grid gap-1.5">
					<DateField.Label>Date de naissance</DateField.Label>
					<DateField.Input>
						{#snippet children({ segments }: { segments: { part: SegmentPart; value: string }[] })}
							{#each segments as { part, value }, i (i)}<DateField.Segment {part}
									>{value}</DateField.Segment
								>{/each}
						{/snippet}
					</DateField.Input>
				</div>
			</DateField.Root>
			<TimeField.Root bind:value={slot} locale="fr-FR">
				<div class="grid gap-1.5">
					<TimeField.Label>Heure de bascule</TimeField.Label>
					<TimeField.Input>
						{#snippet children({
							segments
						}: {
							segments: { part: TimeSegmentPart; value: string }[];
						})}
							{#each segments as { part, value }, i (i)}<TimeField.Segment {part}
									>{value}</TimeField.Segment
								>{/each}
						{/snippet}
					</TimeField.Input>
				</div>
			</TimeField.Root>
		</div>
	</Plate>

	<Plate
		class="md:col-span-12"
		caption="DateCalendar et DateRangeCalendar : début et fin pleins, jours intermédiaires en muted, jours hors mois atténués."
	>
		<div class="flex flex-wrap items-start gap-8">
			<DateCalendar bind:value={day} class="w-[19.5rem]" />
			<DateRangeCalendar bind:value={week} class="w-[19.5rem]" />
			<div class="grid max-w-xs content-start gap-2 text-sm">
				<p class="font-display text-lg font-bold">Sélection</p>
				<p>Jour : <span class="font-semibold">{day ? day.toString() : 'aucun'}</span></p>
				<p>
					Plage : <span class="font-semibold">
						{week.start && week.end
							? `${week.start.toString()} → ${week.end.toString()}`
							: 'incomplète'}
					</span>
				</p>
				<p class="font-serif italic text-muted-foreground">
					Les valeurs remontent au parent via bind:value, comme sur tous les composants racine.
				</p>
			</div>
		</div>
	</Plate>
</div>
