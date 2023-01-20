<script lang="ts">
	import type { Content } from '../utils';
	import { isMobileStore, section_store, sidebarOpened } from '../stores';
	import { Icon } from 'svelte-awesome';
	import { download } from 'svelte-awesome/icons';

	export let contents: Content[];

	function scrollIntoView(id: Content['name']) {
		const el = document.getElementById(id);
		if (!el) return;
		$section_store = id;
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		});
	}
</script>

<nav id="navbar" class="nav-menu navbar">
	<ul>
		{#each contents as content}
			<li class="m-4 my-1">
				<a
					href={`#${content.name}`}
					class="nav-link scrollto active"
					style="display: table"
					on:click|preventDefault={() => {
						scrollIntoView(content.name);
						if ($isMobileStore) $sidebarOpened = false;
					}}
				>
					<Icon data={content.icon} />
					<span style="display:table-cell; vertical-align:middle; padding-left: 20px"
						>{content.name}</span
					>
				</a>
			</li>
		{/each}
		<li class="m-4 my-1">
			<a
				href="/"
				class="nav-link scrollto active"
				style="display: table"
				on:click|preventDefault={() => {
					if (typeof window != 'undefined') window.open('CV.pdf');
				}}
			>
				<Icon data={download} />
				<span style="display:table-cell; vertical-align:middle; padding-left: 20px"
					>PDF Version</span
				>
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		overflow: hidden;
	}

	.nav-menu {
		padding: 20px 0 0 0;
		position: fixed;
	}

	.nav-menu * {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav-menu > ul > li {
		position: relative;
		white-space: nowrap;
	}

	.nav-menu a:hover,
	.nav-menu .active,
	.nav-menu .active:focus,
	.nav-menu li:hover > a {
		text-decoration: none;
		color: #fff;
	}

	.nav-menu a,
	.nav-menu a:focus {
		align-items: center;
		color: #a8a9b4;
		padding: 12px 15px;
		margin-bottom: 8px;
		transition: 0.3s;
		font-size: 18px;
	}

	.navbar {
		position: relative;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
	}
</style>
