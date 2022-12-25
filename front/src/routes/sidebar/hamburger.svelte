<script lang="ts">
	import { sidebarOpened } from '../stores';
</script>

<button
	class="btn my-2 mx-1"
	class:opened={$sidebarOpened}
	on:click={() => {
		$sidebarOpened = !$sidebarOpened;
	}}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="24" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: grey;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 1000;
		border: none;
	}

	.opened svg {
		transform: scale(0.7);
	}

	.opened #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.opened #middle {
		opacity: 0;
	}

	.opened #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
