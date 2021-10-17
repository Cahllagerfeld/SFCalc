<script context="module">
	let counter = 0;
</script>

<script lang="ts">
	export let label: string;
	export let name: string = undefined;

	const id = label + counter++;
</script>

<label for={id} class="radio">
	<input type="radio" {name} {id} class="radio__input" />
	<div class="radio__radio" />
	{label}
</label>

<style type="text/postcss">
	.radio {
		margin-right: 10px;
		font-size: 1.5rem;
		@apply inline-flex items-center cursor-pointer;
	}

	.radio__input {
		display: none;
	}

	.radio__radio {
		width: 1.25em;
		height: 1.25em;
		border: 2px solid white;
		box-sizing: border-box;
		padding: 4px;
		@apply rounded-full mr-2;
	}

	.radio__radio::after {
		content: '';
		background: var(--primary);
		transform: scale(0);
		transition: transform 0.15s;
		@apply w-full h-full block rounded-full;
	}

	.radio__input:checked + .radio__radio::after {
		transform: scale(1);
	}
</style>
