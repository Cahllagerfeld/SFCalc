<script lang="ts">
	import type { NavItem } from '../../interfaces/Navigation';
	import { page } from '$app/stores';

	export let NavItem: NavItem;
	$: isActive =
		$page.path === '/' ? /\/$/.test(NavItem.path) : NavItem.path.indexOf($page.path) >= 0;
</script>

<li>
	<a href={NavItem.path} class:is-active={isActive}>{NavItem.label}</a>
</li>

<style type="text/postcss">
	li {
		min-height: 40px;
		letter-spacing: 2.5px;
		margin: 40px 0;
		transform: rotate(-90deg);
		@apply text-primary-text flex items-center justify-center uppercase font-bold font-primary;
	}

	a:hover {
		color: crimson;
	}

	.is-active {
		@apply text-primary hover:text-primary;
	}
</style>
