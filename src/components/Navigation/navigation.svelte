<script lang="ts">
	import type { NavItem } from '../../interfaces/Navigation';

	let navbarItems: NavItem[] = [{ key: 1, label: 'Mission', path: '/' }];
	import NavigationItem from './navigation-item.svelte';
</script>

<nav class="nav">
	<div class="nav__block">
		<ul>
			{#each navbarItems as navItem}
				<NavigationItem NavItem={navItem} />
			{/each}
		</ul>
	</div>
</nav>

<style type="text/postcss">
	.nav {
		width: 117px;
		background-color: #2c2c2c;
		@apply top-0 block h-full invisible min-h-screen relative float-left sm:visible;
	}

	.nav__block {
		left: calc(50% - 35px);
		@apply block h-full;
	}
</style>
