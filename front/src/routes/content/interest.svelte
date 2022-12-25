<script lang="ts">
	import type { Interest } from '../utils';

	export let interest: Interest;
</script>

<div class="row py-2">
	{#if interest.emoji != undefined}
		<div class="col-2">{interest.emoji}</div>
	{:else}
		<div class="col-2">&nbsp;</div>
	{/if}
	<div class="ps-2 col">{interest.interest}</div>
</div>
