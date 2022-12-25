<script lang="ts">
	import SocialLinks from '../sidebar/social_links.svelte';
	import SidebarContents from '../sidebar/sidebar_content.svelte';
	import type { Content } from '../utils';

	export let contents: Content[];
</script>

<header id="header">
	<div class="profile">
		<img src="./hugo_cv_picture.jpeg" alt="" class="img-fluid rounded-circle" />
		<h1 class="text-light"><a href="index.html">Hugo Riou</a></h1>
		<SocialLinks />
	</div>

	<SidebarContents {contents} />
</header>

<style>
	#header {
		position: fixed;
		/* top: 0;
		left: 0;
		bottom: 0; */
		width: 300px;
		transition: all ease-in-out 0.5s;
		padding: 0 15px;
		background: #040b14;
		overflow-y: auto;
	}

	#header .profile h1 {
		font-size: 24px;
		margin: 0;
		padding: 0;
		font-weight: 600;
		-moz-text-align-last: center;
		text-align-last: center;
		font-family: 'Poppins', sans-serif;
	}

	.text-light {
		--bs-text-opacity: 1;
		color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
	}

	#header .profile h1 a,
	#header .profile h1 a:hover {
		color: #fff;
		text-decoration: none;
	}

	#header .profile img {
		margin: 15px auto;
		display: block;
		width: 120px;
		border: 8px solid #2c2f3f;
	}

	.rounded-circle {
		border-radius: 50% !important;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}
</style>
