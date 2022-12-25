<script lang="ts">
	import Content from './content.svelte';
	import Section from './section.svelte';
	import type { Content as ContentType, TransformedType } from '../utils';
	import { transformArrayToArrayOfTuples } from '../utils';

	export let contents: ContentType[];

	let transformed_contents: TransformedType<ContentType>;
	$: transformed_contents = transformArrayToArrayOfTuples(contents);
</script>

{#each transformed_contents as content}
	<div class="row">
		<Section class_="col" title={content[0].name} id={content[0].name}>
			<Content content={content[0]} />
		</Section>
		{#if content[1] != undefined}
			<Section class_="col" title={content[1].name} id={content[1].name}>
				<Content content={content[1]} />
			</Section>
		{/if}
	</div>
{/each}
