<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
	import github from 'svelte-awesome/icons/github';
</script>

<div class="social-links mt-3 text-center">
	<a href="https://www.linkedin.com/in/hugo-riou/" target="_blank" rel="noopener noreferrer">
		<Icon data={linkedinSquare} />
	</a>
	<a href="https://github.com/riouh" target="_blank" rel="noopener noreferrer">
		<Icon data={github} />
	</a>
</div>

<style>
	.social-links a {
		font-size: 18px;
		display: inline-block;
		background: #212431;
		color: #fff;
		line-height: 1;
		padding: 8px 0;
		margin-right: 4px;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
		transition: 0.3s;
	}
</style>
