<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import type { ContentContact } from '../utils';

	export let content_contacts: ContentContact[];
</script>

<table class="table table-borderless">
	<thead>
		<tr>
			<td style="width: 35px" />
			<td />
		</tr>
	</thead>
	<tbody>
		{#each content_contacts as contact}
			<tr class="p-5">
				<td class="text-center align-middle social-links">
					<Icon data={contact.icon} style="color: #149ddd;" />
				</td>
				<td>
					<h4>{contact.title}</h4>
					<p class="mb-0">{contact.value}</p>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.social-links {
		font-size: 18px;
		display: inline-block;
		background: #dff3fc;
		color: #fff;
		line-height: 1;
		margin-top: 20px;
		margin-right: 20px;
		border-radius: 50%;
		text-align: center;
		width: 36px;
		height: 36px;
	}
</style>
