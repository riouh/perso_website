<script lang="ts">
	import type { ProfessionalExperiences } from '../utils';
	import { Icon } from 'svelte-awesome';
	import { mapMarker } from 'svelte-awesome/icons';

	export let professional_experiences: ProfessionalExperiences[];
</script>

{#each professional_experiences as exp}
	<div class="resume-item">
		<h4>{exp.title}</h4>
		<h5>{exp.date}</h5>
		<p>
			<Icon scale={2} data={mapMarker} style="color: #FF0000; padding-right: 5px" /><em
				>{exp.place}</em
			>
		</p>
		<ul>
			{#each exp.tasks as task}
				<li>
					{@html task}
				</li>
			{/each}
		</ul>
	</div>
{/each}

<style>
	.resume-item {
		box-sizing: border-box;
		padding: 0 0 20px 20px;
		margin-top: -2px;
		border-left: 2px solid #1f5297;
		position: relative;
	}

	.resume-item::before {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50px;
		left: -9px;
		top: 0;
		background: #fff;
		border: 2px solid #1f5297;
	}
</style>
