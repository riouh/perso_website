<script lang="ts">
	import type { Content } from '../utils';

	export let title: string;
	export let class_ = '';
	export let id: Content['name'];

	const style = 'margin-left: 10px; margin-right: 10px; border-radius: 10px; min-width: 300px; ';

	$: div_class = 'py-5 ps-5 pe-3 ' + class_;
</script>

<div class={div_class} {style} {id}>
	<h2 class="title">{title}</h2>
	<slot />
</div>

<style>
	.title {
		font-size: 32px;
		font-weight: bold;
		margin-bottom: 20px;
		padding-bottom: 20px;
		position: relative;
		color: #173b6c;
		line-height: 1.2;
		display: block;
	}

	.title::after {
		content: '';
		position: absolute;
		display: block;
		width: 50px;
		height: 3px;
		background: #149ddd;
		bottom: 0;
		left: 0;
	}
</style>
