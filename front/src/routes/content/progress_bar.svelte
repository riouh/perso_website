<script lang="ts">
	import type { Skill } from '../utils';
	import { firstCharUpper } from '../utils';

	export let skill: Skill;
</script>

<span>{firstCharUpper(skill.name)}</span>
<div class="progress mb-3">
	<div class="progress-bar" role="progressbar" style={`width: ${skill.level}%`}>
		{`${skill.level}%`}
	</div>
</div>
