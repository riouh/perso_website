<script lang="ts">
	import Contents from './contents.svelte';
	import { classStore } from '../stores';
	import type { Content } from '../utils';

	export let contents: Content[];
</script>

<div class={$classStore.page_content_wrapper}>
	<div class="intro" content="width=device-width;">
		<div style="height: 100vh;" class="d-flex align-items-center justify-content-center">
			<h1 class="p-3 m-5 bd-highlight text-center">Welcome to my Resume-Website!</h1>
		</div>
		<div class={$classStore.content_class}>
			<Contents {contents} />
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 24px;
		margin: 0;
		padding: 0;
		font-weight: 600;
		-moz-text-align-last: center;
		text-align-last: center;
		font-family: 'Poppins', sans-serif;
	}

	.page-content-wrapper-not-mobile {
		min-width: 0;
		margin-left: 10%;
		width: 100%;
	}

	.page-content-wrapper-mobile {
		min-width: 0;
		margin-left: 0%;
		width: 100%;
	}

	@media (min-width: 1024px) {
		.intro {
			background-attachment: fixed;
		}
	}

	.intro {
		width: 100%;
		height: 100vh;
		background: url(/la_trin.jpeg) top center;
		background-size: cover;
	}
</style>
