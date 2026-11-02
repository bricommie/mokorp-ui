/*
 * Blocs de documentation partagés par les pages MDX (`src/docs/**`).
 *
 * Les pages MDX sont rendues par React (addon-docs), même dans un projet Svelte :
 * ces blocs sont donc des composants React. Ils ne contiennent AUCUNE valeur
 * de design : tout est lu en direct dans les variables CSS du thème, dans un
 * conteneur `.light` et un conteneur `.dark` (les faces sont imbriquables).
 * Résultat : si un token change dans `themes/*.css`, la documentation suit.
 */
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Face = 'light' | 'dark';
const FACES: Face[] = ['light', 'dark'];
const FACE_LABEL: Record<Face, string> = { light: 'Clair', dark: 'Sombre' };

/* ─── Couleur : lecture et contraste ─────────────────────────────────────── */

type Rgb = [number, number, number];

let canvasCtx: CanvasRenderingContext2D | null = null;

/**
 * Résout une couleur CSS en [r, g, b] (0–255), ou `null` si elle est transparente.
 * Le navigateur résout `var()` et `color-mix()` ; le canvas convertit ensuite
 * n'importe quel espace (oklch, srgb…) en pixels sRGB.
 */
function resolveRgb(probe: HTMLElement, cssColor: string): Rgb | null {
	probe.style.color = cssColor;
	const computed = getComputedStyle(probe).color;
	canvasCtx ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
	if (!canvasCtx) return null;
	canvasCtx.clearRect(0, 0, 1, 1);
	canvasCtx.fillStyle = computed;
	canvasCtx.fillRect(0, 0, 1, 1);
	const [r, g, b, a] = canvasCtx.getImageData(0, 0, 1, 1).data;
	return a === 0 ? null : [r, g, b];
}

function luminance([r, g, b]: Rgb) {
	const lin = (c: number) => {
		const s = c / 255;
		return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
	};
	return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Ratio de contraste WCAG 2.x entre deux couleurs. */
function contrast(a: Rgb, b: Rgb) {
	const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (l1 + 0.05) / (l2 + 0.05);
}

function toHex([r, g, b]: Rgb) {
	return '#' + [r, g, b].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');
}

/** Lit une variable dans une face donnée, après le montage. */
function useFaceReader<T>(read: (probe: HTMLElement) => T, deps: unknown[]) {
	const refs = useRef<Partial<Record<Face, HTMLSpanElement | null>>>({});
	const [values, setValues] = useState<Partial<Record<Face, T>>>({});
	useEffect(() => {
		const next: Partial<Record<Face, T>> = {};
		for (const face of FACES) {
			const probe = refs.current[face];
			if (probe) next[face] = read(probe);
		}
		setValues(next);
	}, deps);
	const probes = FACES.map((face) => (
		<span key={face} className={face} style={{ display: 'none' }}>
			<span ref={(el) => void (refs.current[face] = el)} />
		</span>
	));
	return { values, probes };
}

/* ─── Styles communs (uniquement des variables du thème) ─────────────────── */

const table: CSSProperties = {
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: 14,
	margin: '16px 0 32px'
};
const th: CSSProperties = {
	textAlign: 'left',
	padding: '8px 12px',
	borderBottom: '1.5px solid var(--border-subtle)',
	fontWeight: 600,
	whiteSpace: 'nowrap'
};
const td: CSSProperties = {
	padding: '10px 12px',
	borderBottom: '1px solid var(--border-subtle)',
	verticalAlign: 'middle'
};
const code: CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 13 };

function Ratio({ value, min }: { value: number | null; min: number }) {
	if (value === null) return <span style={{ color: 'var(--muted-foreground)' }}>—</span>;
	const ok = value >= min;
	return (
		<span style={{ ...code, fontWeight: 600 }} title={`Seuil visé : ${min}:1`}>
			{value.toFixed(2)}:1 {ok ? '✓' : '✗'}
		</span>
	);
}

/* ─── Tokens de couleur ──────────────────────────────────────────────────── */

export type ColorTokenSpec = {
	/** Nom sans `--`, ex. `primary`. */
	name: string;
	/** À quoi sert le token (la seule chose qui compte pour un consommateur). */
	usage: ReactNode;
	/** Token mesuré contre celui-ci pour le contraste (ex. `primary-foreground`). */
	against?: string;
	/** Seuil WCAG : 4.5 pour du texte, 3 pour une bordure ou un indicateur. */
	min?: number;
};

/**
 * Tableau de tokens : nuancier clair + sombre lus en direct, rôle, et ratio
 * de contraste calculé contre le token associé dans chaque face.
 */
export function ColorTokens({ tokens }: { tokens: ColorTokenSpec[] }) {
	const { values, probes } = useFaceReader(
		(probe) =>
			tokens.map((t) => {
				const color = resolveRgb(probe, `var(--${t.name})`);
				const other = t.against ? resolveRgb(probe, `var(--${t.against})`) : null;
				return {
					hex: color ? toHex(color) : 'transparent',
					ratio: color && other ? contrast(color, other) : null
				};
			}),
		[tokens]
	);

	return (
		<>
			{probes}
			<table style={table}>
				<thead>
					<tr>
						<th style={th}>Token</th>
						{FACES.map((f) => (
							<th key={f} style={th}>
								{FACE_LABEL[f]}
							</th>
						))}
						<th style={th}>Rôle</th>
						<th style={th}>Contraste (clair / sombre)</th>
					</tr>
				</thead>
				<tbody>
					{tokens.map((t, i) => (
						<tr key={t.name}>
							<td style={td}>
								<code style={code}>--{t.name}</code>
								<div style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)' }}>
									bg-{t.name} · text-{t.name}
								</div>
							</td>
							{FACES.map((f) => (
								<td key={f} style={td}>
									<div className={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										<span
											aria-hidden
											style={{
												width: 40,
												height: 40,
												borderRadius: 'var(--radius-item)',
												background: `var(--${t.name})`,
												border: '1.5px solid var(--border-subtle)',
												flexShrink: 0
											}}
										/>
									</div>
									<div style={{ ...code, fontSize: 12, marginTop: 4 }}>
										{values[f]?.[i]?.hex ?? '…'}
									</div>
								</td>
							))}
							<td style={td}>{t.usage}</td>
							<td style={td}>
								{t.against ? (
									<>
										<div style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)' }}>
											vs --{t.against}
										</div>
										<Ratio value={values.light?.[i]?.ratio ?? null} min={t.min ?? 4.5} />
										{' / '}
										<Ratio value={values.dark?.[i]?.ratio ?? null} min={t.min ?? 4.5} />
									</>
								) : (
									<span style={{ color: 'var(--muted-foreground)' }}>décoratif</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

/* ─── Aperçu côte à côte des deux faces ──────────────────────────────────── */

/** Rend le même contenu dans une zone `.light` et une zone `.dark`. */
export function FacePair({ render }: { render: (face: Face) => ReactNode }) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
				gap: 16,
				margin: '16px 0 32px'
			}}
		>
			{FACES.map((face) => (
				<div
					key={face}
					className={face}
					style={{
						background: 'var(--background)',
						color: 'var(--foreground)',
						border: '1.5px solid var(--border-subtle)',
						borderRadius: 'var(--radius-surface)',
						padding: 20,
						fontFamily: 'var(--font-body)'
					}}
				>
					<div
						style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 12 }}
					>
						.{face} — {FACE_LABEL[face]}
					</div>
					{render(face)}
				</div>
			))}
		</div>
	);
}

/* ─── Espacements ────────────────────────────────────────────────────────── */

const SPACING_STEPS: { step: string; usage: string }[] = [
	{ step: '0.5', usage: 'Écart intérieur minuscule (icône collée à un texte)' },
	{ step: '1', usage: 'Entre un libellé et sa valeur' },
	{ step: '1.5', usage: 'Padding vertical d’une option de menu' },
	{ step: '2', usage: 'Gap d’un groupe d’icônes, padding d’un item' },
	{ step: '3', usage: 'Padding horizontal d’un champ, gap de formulaire serré' },
	{ step: '4', usage: 'Gap par défaut entre contrôles' },
	{ step: '5', usage: 'Padding horizontal d’un bouton' },
	{ step: '6', usage: 'Padding d’une carte, d’un dialogue' },
	{ step: '8', usage: 'Séparation entre blocs d’une section' },
	{ step: '12', usage: 'Séparation entre sections' },
	{ step: '16', usage: 'Respiration d’une page (héros, marges)' }
];

export function SpacingScale() {
	const { values, probes } = useFaceReader(
		(probe) => getComputedStyle(probe).getPropertyValue('--spacing').trim(),
		[]
	);
	const base = values.light || '0.25rem';
	return (
		<>
			{probes}
			<table style={table}>
				<thead>
					<tr>
						<th style={th}>Utilitaire</th>
						<th style={th}>Valeur</th>
						<th style={th}>Aperçu</th>
						<th style={th}>Usage typique</th>
					</tr>
				</thead>
				<tbody>
					{SPACING_STEPS.map(({ step, usage }) => {
						const px = Number(step) * 4;
						return (
							<tr key={step}>
								<td style={td}>
									<code style={code}>
										p-{step} · gap-{step}
									</code>
								</td>
								<td style={{ ...td, ...code }}>
									{px}px
									<div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>
										{step} × {base}
									</div>
								</td>
								<td style={td}>
									<span
										aria-hidden
										style={{
											display: 'block',
											height: 16,
											width: `calc(var(--spacing) * ${step})`,
											background: 'var(--secondary)',
											borderRadius: 2
										}}
									/>
								</td>
								<td style={td}>{usage}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

/* ─── Rayons ─────────────────────────────────────────────────────────────── */

const RADII: { role: string; usage: string }[] = [
	{ role: 'surface', usage: 'Cartes, alertes, menus, popovers, dialogues, tableau' },
	{ role: 'field', usage: 'Input, Textarea, Select (déclencheur), champs de date, PinInput' },
	{ role: 'item', usage: 'Option de menu, jour de calendrier, Checkbox, Kbd, Tooltip' },
	{ role: 'control', usage: 'Button, déclencheur de Collapsible' },
	{ role: 'pill', usage: 'Badge, Avatar, Switch, Slider, Toggle, Progress, Meter, Radio' }
];

export function RadiusScale() {
	const { values, probes } = useFaceReader(
		(probe) =>
			RADII.map((r) => getComputedStyle(probe).getPropertyValue(`--radius-${r.role}`).trim()),
		[]
	);
	return (
		<>
			{probes}
			<table style={table}>
				<thead>
					<tr>
						<th style={th}>Rôle</th>
						<th style={th}>Valeur</th>
						<th style={th}>Aperçu</th>
						<th style={th}>Utilisé par</th>
					</tr>
				</thead>
				<tbody>
					{RADII.map((r, i) => (
						<tr key={r.role}>
							<td style={td}>
								<code style={code}>rounded-{r.role}</code>
								<div style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)' }}>
									--radius-{r.role}
								</div>
							</td>
							<td style={{ ...td, ...code }}>{values.light?.[i] ?? '…'}</td>
							<td style={td}>
								<span
									aria-hidden
									style={{
										display: 'block',
										width: 96,
										height: 48,
										borderRadius: `var(--radius-${r.role})`,
										border: 'var(--border-width) solid var(--border)',
										background: 'var(--muted)'
									}}
								/>
							</td>
							<td style={td}>{r.usage}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

/* ─── Ombres ─────────────────────────────────────────────────────────────── */

const SHADOWS = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export function ShadowScale() {
	return (
		<FacePair
			render={() => (
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
					{SHADOWS.map((s) => (
						<div key={s} style={{ textAlign: 'center' }}>
							<div
								style={{
									height: 56,
									borderRadius: 'var(--radius-item)',
									background: 'var(--card)',
									border: '1.5px solid var(--border-subtle)',
									boxShadow: `var(--shadow-${s})`
								}}
							/>
							<code style={{ ...code, fontSize: 12 }}>shadow-{s}</code>
						</div>
					))}
				</div>
			)}
		/>
	);
}

/* ─── Mouvement ──────────────────────────────────────────────────────────── */

const DURATIONS: { name: string; usage: string }[] = [
	{ name: 'instant', usage: 'Retour immédiat : pression d’un bouton, case cochée' },
	{
		name: 'fast',
		usage: 'Changement d’état local : survol, couleur, chevron (défaut de transition-*)'
	},
	{ name: 'base', usage: 'Entrée / sortie d’une surface : popover, menu, panneau' },
	{ name: 'slow', usage: 'Déplacement important : changement de mois, de page' }
];
const EASINGS: { name: string; usage: string }[] = [
	{ name: 'standard', usage: 'Par défaut, ce qui change sur place' },
	{ name: 'enter', usage: 'Décélère : ce qui ARRIVE à l’écran' },
	{ name: 'exit', usage: 'Accélère : ce qui QUITTE l’écran' },
	{ name: 'emphasized', usage: 'Léger dépassement : retour « vivant » (relâchement, pop)' }
];

export function MotionTokens() {
	const { values, probes } = useFaceReader((probe) => {
		const cs = getComputedStyle(probe);
		return {
			d: DURATIONS.map((x) => cs.getPropertyValue(`--duration-${x.name}`).trim()),
			e: EASINGS.map((x) => cs.getPropertyValue(`--ease-${x.name}`).trim())
		};
	}, []);
	return (
		<>
			{probes}
			<table style={table}>
				<thead>
					<tr>
						<th style={th}>Durée</th>
						<th style={th}>Valeur actuelle</th>
						<th style={th}>Usage</th>
					</tr>
				</thead>
				<tbody>
					{DURATIONS.map((x, i) => (
						<tr key={x.name}>
							<td style={td}>
								<code style={code}>duration-{x.name}</code>
								<div style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)' }}>
									--duration-{x.name}
								</div>
							</td>
							<td style={{ ...td, ...code }}>{values.light?.d[i] ?? '…'}</td>
							<td style={td}>{x.usage}</td>
						</tr>
					))}
				</tbody>
			</table>
			<table style={table}>
				<thead>
					<tr>
						<th style={th}>Courbe</th>
						<th style={th}>Valeur</th>
						<th style={th}>Usage</th>
					</tr>
				</thead>
				<tbody>
					{EASINGS.map((x, i) => (
						<tr key={x.name}>
							<td style={td}>
								<code style={code}>ease-{x.name}</code>
								<div style={{ ...code, fontSize: 12, color: 'var(--muted-foreground)' }}>
									--ease-{x.name}
								</div>
							</td>
							<td style={{ ...td, ...code, fontSize: 12 }}>{values.light?.e[i] ?? '…'}</td>
							<td style={td}>{x.usage}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

/* ─── Petits éléments de mise en page ───────────────────────────────────── */

/** Encadré « À faire / À éviter ». */
export function DoDont({ doThis, dontThis }: { doThis: ReactNode; dontThis: ReactNode }) {
	const box = (accent: string, title: string, body: ReactNode) => (
		<div
			style={{
				borderRadius: 'var(--radius-surface)',
				border: '1.5px solid var(--border-subtle)',
				borderTop: `4px solid var(--${accent})`,
				padding: '12px 16px',
				background: 'var(--card)'
			}}
		>
			<strong style={{ color: `var(--${accent})` }}>{title}</strong>
			<div style={{ marginTop: 6 }}>{body}</div>
		</div>
	);
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
				gap: 16,
				margin: '16px 0 24px'
			}}
		>
			{box('success', 'À faire', doThis)}
			{box('destructive', 'À éviter', dontThis)}
		</div>
	);
}

/**
 * Carte de navigation vers une autre page Storybook.
 * `path` = chemin Storybook, ex. `/docs/demarrer-installation--docs`.
 * Le lien vise la fenêtre principale (`_top`) : la page Docs vit dans une iframe.
 */
export function LinkCard({
	path,
	title,
	children
}: {
	path: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<a
			href={`./?path=${path}`}
			target="_top"
			style={{
				display: 'block',
				textDecoration: 'none',
				color: 'var(--foreground)',
				background: 'var(--card)',
				border: '1.5px solid var(--border-subtle)',
				borderRadius: 'var(--radius-surface)',
				padding: '16px 20px'
			}}
		>
			<strong style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>{title} →</strong>
			<div style={{ marginTop: 6, color: 'var(--muted-foreground)', fontSize: 14 }}>{children}</div>
		</a>
	);
}

export function CardGrid({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
				gap: 16,
				margin: '16px 0 32px'
			}}
		>
			{children}
		</div>
	);
}
