<script>
	import '../app.css';
	import Navigation from '../components/Navigation/navigation.svelte';
</script>

<header>
	<Navigation />
</header>

<div class="template">
	<slot />
</div>

<style type="text/postcss">
	.template {
		padding-left: 117px;
	}
</style>
