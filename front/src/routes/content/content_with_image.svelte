<script lang="ts">
	import type { ContentWithImageProps } from '../utils';

	export let content_with_image_props: ContentWithImageProps;
</script>

<div class="mb-3">{@html content_with_image_props.top_content}</div>
{#if content_with_image_props.image_content != undefined}
	<div class="d-flex flex-row">
		<img
			src={`./${content_with_image_props.image_file_name}`}
			class="img-fluid me-3"
			style={`height: ${content_with_image_props.image_size}px !important;`}
			alt={content_with_image_props.image_file_name}
		/>

		<div class="ms-3">{@html content_with_image_props.image_content}</div>
	</div>
{/if}
