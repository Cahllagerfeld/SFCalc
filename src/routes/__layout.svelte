<script>
	import '../app.css';
	import Navigation from '../components/Navigation/navigation.svelte';
</script>

<header>
	<Navigation />
</header>

<div class="template">
	<div class="w-full h-screen">
		<slot />
	</div>
</div>

<style type="text/postcss">
	.template {
		margin-left: 117px;
	}
</style>
