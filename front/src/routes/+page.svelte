<script lang="ts">
	import { Skill } from './utils';
	import type { Content } from './utils';
	import { fileText, cog, graduationCap, userCircleO, tree } from 'svelte-awesome/icons';
	import PageContent from './content/page_content.svelte';
	import Sidebar from './sidebar/sidebar.svelte';

	const contents: Content[] = [
		{
			name: 'About',
			icon: userCircleO,
			content: {
				top_content: 'Here is about me',
				image_content: 'I love to do ...',
				image_file_name: 'hugo_cv_picture.jpeg',
				image_size: 200
			}
		},
		{
			name: 'Skills',
			icon: cog,
			content: [
				new Skill({ name: 'python', level: 100 }),
				new Skill({ name: 'NodeJS', level: 80 }),
				new Skill({ name: 'SvelteJS', level: 100 }),
				new Skill({ name: 'ReactJS', level: 70 }),
				new Skill({ name: 'VueJS', level: 50 })
			]
		},
		{
			name: 'Experiences',
			icon: fileText,
			content: [
				{
					title: 'Senior Software Engineer',
					place: 'Paris, France',
					date: 'September, 2020 - Today',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				},
				{
					title: 'Full stack Intern',
					place: 'Sydney, Australia (NSW)',
					date: 'Jan, 2019 - July 2019 (6 months)',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				},
				{
					title: 'Logistics Data Intern',
					place: 'Paris, France',
					date: 'Apr, 2018 - Sept 2018 (6 months)',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				}
			]
		},
		{
			name: 'Education',
			icon: graduationCap,
			content: [
				{
					title: 'Senior Software Engineer',
					place: 'Paris, France',
					date: 'September, 2020 - Today',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				},
				{
					title: 'Full stack Intern',
					place: 'Sydney, Australia (NSW)',
					date: 'Jan, 2019 - July 2019 (6 months)',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				},
				{
					title: 'Logistics Data Intern',
					place: 'Paris, France',
					date: 'Apr, 2018 - Sept 2018 (6 months)',
					tasks: ['Organised the Kaigi', 'Main developper (fullstack) on the main product']
				}
			]
		},
		{
			name: 'Interests',
			icon: tree,
			content: [
				{ emoji: '🌳', interest: 'Nature' },
				{ emoji: '🏄‍♂️', interest: 'Surf' },
				{ emoji: '🏔️', interest: 'Mountain sports' },
				{ emoji: '🔨', interest: 'DIY\xa0& Handcrafting' },
				{ emoji: '🏊‍♂️', interest: 'Swimming' },
				{ emoji: '⛵', interest: 'Sailing' },
				{ emoji: '🎸', interest: 'Guitare' },
				{ emoji: '💻', interest: 'Technologies' },
				{ emoji: '🔬', interest: 'Science' }
			]
		}
	];
</script>

<div class="d-flex" style="width: 100%">
	<Sidebar {contents} />
	<PageContent {contents} />
</div>
