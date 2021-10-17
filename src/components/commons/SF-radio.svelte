<div>
	<input id="baui" type="radio" name="test" />
	<label for="baui">Baui</label>
</div>
<div>
	<input id="test2" type="radio" name="test" />
	<label for="test2">Baui</label>
</div>

<style type="text/postcss">
	.form {
		display: flex;
	}
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		border-radius: 0;
		font-size: 1em;
		width: 100%;
	}

	input[type='radio'] {
		width: auto;
		float: left;
		margin-right: 0.75em;
		background: transparent;
		border: none;
		margin-top: 5px;
	}

	input[type='radio']:checked,
	input[type='radio']:not(:checked) {
		background: var(--dark);
		position: relative;
		visibility: hidden;
		margin: 0;
		padding: 0;
	}

	input[type='radio'] + label {
		cursor: pointer;
		font-size: 1.5rem;
	}

	input[type='radio']:checked + label::before,
	input[type='radio']:not(:checked) + label::before {
		content: ' ';
		display: inline-block;
		width: 34px;
		height: 34px;
		position: relative;
		border: 2px solid #bbb;
		background: var(--dark);
		margin-right: 1em;
		box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.1);
	}

	input[type='radio']:checked + label::before,
	input[type='radio']:not(:checked) + label::before {
		border-radius: 30px;
	}

	input[type='radio']:hover + label::before {
		background: rgba(255, 228, 0, 0.5);
		box-shadow: inset 0 0 0 7px var(--dark);
	}

	input[type='radio']:checked + label::before {
		background: var(--primary);
		box-shadow: inset 0 0 0 7px var(--dark);
	}
</style>
