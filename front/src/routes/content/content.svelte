<script lang="ts">
	import {
		isContentArrayOfExperiences,
		isContentInterest,
		isContentArrayOfSkills,
		isContentWithImageProps
	} from '../utils';
	import ContentProgresses from './content_progresses.svelte';
	import ContentChronological from './content_chronological.svelte';
	import ContentWithImage from './content_with_image.svelte';
	import ContentWithInterests from './content_interests.svelte';
	import type { Content } from '../utils';

	export let content: Content;
</script>

{#if isContentArrayOfExperiences(content.content)}
	<ContentChronological professional_experiences={content.content} />
{:else if isContentArrayOfSkills(content.content)}
	<ContentProgresses skills={content.content} />
{:else if isContentWithImageProps(content.content)}
	<ContentWithImage content_with_image_props={content.content} />
{:else if isContentInterest(content.content)}
	<ContentWithInterests interests={content.content} />
{/if}
