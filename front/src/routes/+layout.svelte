<script lang="ts">
	import { isMobileStore, sidebarOpened } from './stores';

	export const prerender = true;

	let innerWidth = 0;

	$: isMobileStore.set(innerWidth <= 800);
	$: $sidebarOpened = $isMobileStore ? false : true;
</script>

<slot />

<svelte:head>
	<title>Hugo Riou</title>
</svelte:head>

<svelte:window bind:innerWidth />

<style lang="scss" global>
	@import './node_modules/bootstrap/scss/bootstrap';

	body {
		font-family: 'Poppins', sans-serif;
		color: #272829;
		font-size: 18px;
	}
</style>
