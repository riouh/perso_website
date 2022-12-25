<script lang="ts">
	import { isMobileDevice, type Interest as InteresType } from '../utils';
	import Interest from './interest.svelte';
	import { transformArrayToArrayOfTuples } from '../utils';

	export let interests: InteresType[];

	const nCols = isMobileDevice() ? 2 : 3;

	$: transformedInterests = transformArrayToArrayOfTuples(interests, nCols);
</script>

{#each transformedInterests as interests_row}
	<div class="row flex-row justify-content-center align-items-center">
		{#if interests_row[0] !== undefined}
			<div class="col">
				<Interest interest={interests_row[0]} />
			</div>
		{:else}
			<div class="col">&nbsp;</div>
		{/if}

		{#if interests_row[1] !== undefined}
			<div class="col">
				<Interest interest={interests_row[1]} />
			</div>
		{:else}
			<div class="col">&nbsp;</div>
		{/if}

		{#if nCols === 3}
			{#if interests_row[2] !== undefined}
				<div class="col">
					<Interest interest={interests_row[2]} />
				</div>
			{:else}
				<div class="col">&nbsp;</div>
			{/if}
		{/if}
	</div>
{/each}
