<script lang="ts">
	export let label: string;
	export let click: any;
</script>

<button on:click={click}>{label}</button>

<style type="text/postcss">
	button {
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		border: 2px solid var(--primary);
		@apply inline-block bg-dark text-primary text-center rounded-lg hover:bg-primary hover:text-dark hover:cursor-pointer;
	}
</style>
