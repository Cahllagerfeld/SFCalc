<script context="module">
	let counter = 0;
</script>

<script lang="ts">
	export let label: string;
	export let theme: string = 'primary';
	const id = label + counter++;

	const allowedThemes = ['primary', 'secondary', 'tertiary'];

	$: validatedTheme = allowedThemes.includes(theme) ? theme : 'primary';
</script>

<div style="position: relative;">
	<input placeholder="" class={`sf-input sf-input-${validatedTheme}`} {id} type="text" />
	<label class="sf-label " for={id}>{label}</label>
</div>

<style type="text/postcss">
	.sf-input {
		border: 2px solid white;
		border-radius: 1rem;
		font-family: inherit;
		font-size: inherit;
		outline: none;
		padding: 1.25rem;
		background: none;
		@apply relative h-full text-white;
	}

	.sf-label {
		font-size: 1.5rem;
		left: 1rem;
		top: 0.8rem;
		position: absolute;
		padding: 0 0.5rem;
		color: white;
		cursor: text;
		transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
		background-color: var(--dark);
	}

	.sf-input-primary:focus {
		border-color: var(--primary);
	}

	.sf-input-secondary:focus {
		border-color: var(--secondary);
	}
	.sf-input-tertiary:focus {
		border-color: var(--tertiary);
	}

	.sf-input-primary:focus ~ .sf-label,
	.sf-input-primary:not(:placeholder-shown).sf-input-primary:not(:focus) ~ .sf-label {
		top: -0.5rem;
		font-size: 0.9rem;
		left: 0.8rem;
		color: var(--primary);
	}
	.sf-input-secondary:focus ~ .sf-label,
	.sf-input-secondary:not(:placeholder-shown).sf-input-secondary:not(:focus) ~ .sf-label {
		top: -0.5rem;
		font-size: 0.9rem;
		left: 0.8rem;
		color: var(--secondary);
	}
	.sf-input-tertiary:focus ~ .sf-label,
	.sf-input-tertiary:not(:placeholder-shown).sf-input-tertiary:not(:focus) ~ .sf-label {
		top: -0.5rem;
		font-size: 0.9rem;
		left: 0.8rem;
		color: var(--tertiary);
	}
</style>
