<script lang="ts">
	import ProgressBar from './progress_bar.svelte';
	import { transformArrayToArrayOfTuples, type Skill, type TransformedType } from '../utils';

	export let skills: Skill[];

	let transformed_skills: TransformedType<Skill>;
	$: transformed_skills = transformArrayToArrayOfTuples(skills);
</script>

{#each transformed_skills as skill_couple}
	<div class="row">
		<div class="col-6">
			<ProgressBar skill={skill_couple[0]} />
		</div>
		<div class="col-6">
			{#if skill_couple[1] != undefined}
				<ProgressBar skill={skill_couple[1]} />
			{/if}
		</div>
	</div>
{/each}
