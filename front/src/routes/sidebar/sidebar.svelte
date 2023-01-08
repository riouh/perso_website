<script lang="ts">
	import SidebarContent from './sidebar_content.svelte';
	import SocialLinks from './social_links.svelte';
	import Hamburger from './hamburger.svelte';
	import type { Content } from '../utils';
	import { isMobileStore, classStore, sidebarOpened } from '../stores';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	export let contents: Content[];
</script>

{#if $isMobileStore && $sidebarOpened}
	<div
		id="sidebar-wrapper"
		class={$classStore.sidebar_wrapper(true)}
		in:fly={{ duration: 200, easing: linear, opacity: 100, x: -700 }}
		out:fly={{ duration: 200, opacity: 100, easing: linear, x: -700 }}
	>
		<div class="hamburger-opened">
			<Hamburger />
		</div>
		<div class="d-flex flex-column justify-content-center align-items-center">
			<img
				src="./hugo_cv_picture.jpeg"
				alt=""
				class="img-fluid rounded-circle py-4"
				style="width: 80%; pading: 20px; max-width: 150px"
			/>
			<h1 class="text-light text-center">
				<a href="index.html" style="text-decoration: none; color: white; font-size: 24px"
					>Hugo Riou</a
				>
			</h1>
			<SocialLinks />
			<SidebarContent {contents} />
		</div>
	</div>
{:else}
	<div id="sidebar-wrapper" class={$classStore.sidebar_wrapper($sidebarOpened)}>
		<div class="d-flex flex-column justify-content-center align-items-center">
			<img
				src="./hugo_cv_picture.jpeg"
				alt=""
				class="img-fluid rounded-circle py-4"
				style="width: 80%; pading: 20px; max-width: 150px"
			/>
			<h1 class="text-light text-center">
				<a href="index.html" style="text-decoration: none; color: white; font-size: 24px"
					>Hugo Riou</a
				>
			</h1>
			<SocialLinks />
			<SidebarContent {contents} />
		</div>
	</div>
{/if}
{#if $isMobileStore && !$sidebarOpened}
	<div class="hamburger-closed">
		<Hamburger />
	</div>
{/if}

<style lang="scss">
	#sidebar-wrapper {
		overflow-x: clip;
		position: fixed;
		height: 100%;
		z-index: 1; /* Stay on top */
		top: 0; /* Stay at the top */
		left: 0;
		background-color: black;
	}

	.text-light {
		--bs-text-opacity: 1;
		color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
	}

	.hamburger-opened {
		position: fixed;
		top: 0;
		right: 0;
	}

	.hamburger-closed {
		position: fixed;
		top: 0;
		left: 0;
	}

	.sidebar-closed {
		width: 0;
	}

	.sidebar-opened-mobile {
		width: 100%;
	}

	.sidebar-opened-not-mobile {
		width: 10%;
	}
</style>
