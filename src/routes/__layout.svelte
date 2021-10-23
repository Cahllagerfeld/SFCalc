<script>
	import '../app.css';
	import Navigation from '../components/Navigation/navigation.svelte';
</script>

<Navigation />
<div class="template">
	<div class="w-full h-full">
		<slot />
	</div>
</div>

<style type="text/postcss">
	.template {
		background-image: url(/images/background.png);
		@apply ml-0 md:ml-navbar h-full bg-cover min-h-screen;
	}
</style>
