<script lang="ts">
	import { Skill } from './utils';
	import type { Content } from './utils';
	import {
		fileText,
		cog,
		graduationCap,
		userCircleO,
		tree,
		envelopeO,
		mapMarker,
		phone
	} from 'svelte-awesome/icons';
	import PageContent from './content/page_content.svelte';
	import Sidebar from './sidebar/sidebar.svelte';

	const contents: Content[] = [
		{
			name: 'About',
			icon: userCircleO,
			content: {
				top_content: `
				Proficient Full Stack Engineer with a particular appetite for data related subjects, 
				passionate about using technology to solve challenging problems. 
				I am a curious developper with proven communication and organisational skills.
					Looking for an exciting position where making the most impact would be the primary philosophy.
				`,
				image_file_name: 'hugo_cv_picture.jpeg',
				image_size: 200
			}
		},
		{
			name: 'Skills',
			icon: cog,
			content: [
				new Skill({ name: 'python', level: 100 }),
				new Skill({ name: 'NodeJS', level: 90 }),
				new Skill({ name: 'TypeScript', level: 100 }),
				new Skill({ name: 'SvelteJS', level: 100 }),
				new Skill({ name: 'ReactJS', level: 60 }),
				new Skill({ name: 'VueJS', level: 40 }),
				new Skill({ name: 'Rust', level: 30 }),
				new Skill({ name: 'Postgres', level: 90 }),
				new Skill({ name: 'Terraform', level: 60 }),
				new Skill({ name: 'Kubernetes', level: 60 }),
				new Skill({ name: 'GitHub Actions', level: 100 }),
				new Skill({ name: 'REST APIs', level: 90 }),
				new Skill({ name: 'GraphQL APIs', level: 80 }),
				new Skill({ name: 'Linux/Bash', level: 70 }),
				new Skill({ name: 'Docker', level: 90 }),
				new Skill({ name: 'HTML/CSS', level: 100 })
			]
		},
		{
			name: 'Experiences',
			icon: fileText,
			content: [
				{
					title: 'Enexflow',
					subtitle: 'Senior Software Engineer',
					place: 'Paris, France',
					logo: './favicon_enexflow.ico',
					date: 'September, 2020 - Today',
					tasks: [
						`Main fullstack developper on the flagship product, an EMS platform designed to 
						help Energy professionals mitigate operational and financial risks in their assets' operations, 
						by letting them monitor, analyze and optimize their portfolio.`,
						`Typical tasks include for example: 
						<ul><li>REST and GraphQL APIs development</li> 
							<li>Database design and management</li> 
							<li>Tasks design and assignation, scrum management along with the CTO</li> 
							<li>Frontend development</li> 
							<li>CI & CD pipelines setup (GitHub Actions, Docker, Kubernetes, Terraform, AWS, FluxCD)</li>
							<li>DevX improvement</li> 
							<li>Test implementation & automation (Mocha, Pytest, Selenium)</li>
						</ul>`,
						'Managed up to 2/3 interns',
						'Organised a recurrent conference to vulgarize tech subjects for all teams',
						'Actively took part in recruting'
					]
				},
				{
					title: 'HelloFresh',
					subtitle: 'Full stack Intern',
					place: 'Sydney, Australia (NSW)',
					logo: './hf_logo.png',
					date: 'Jan, 2019 - July 2019',
					tasks: [
						`Owner and manager of a custom ETL.`,
						`Full-stack development, Feature creation and improvement both on
front and back ends. (Python, VueJS, PostgreSql, AWS, Docker).`,
						`Responsible for the full database restructuration. Coordination with all the database's clients.`,
						`Example of feature development: Automatic email sending, forecasts and
discrepancies visualisation, automatic customer complaints management.`
					]
				},
				{
					title: 'Procter & Gamble',
					subtitle: 'Logistics Data Intern',
					place: 'Paris, France',
					logo: './pg_logo.png',
					date: 'Apr, 2018 - Sept 2018',
					tasks: [
						`Data processes automation within the logistics master-data team (Python Selenium, SAP scripting, VBA, Knime, Shell).`,
						`E.g: Automation of the promotional data transfer between two softwares.
Workload saving of 6h/week.`,
						`Change management and collaborators training on implemented automation
tools.`,
						`Shared resources creation for the whole Logistics Service, aiming at auto-training
in automation.`
					]
				}
			]
		},
		{
			name: 'Education',
			icon: graduationCap,
			content: [
				{
					title: 'MSc Energy Systems\xa0 & Data Analytics',
					place: 'UCL, London, UK',
					logo: './ucl_logo.png',
					date: 'September 2019 - September, 2020',
					tasks: [
						'Graduated with distinctions',
						`Main subjects:
						<ul>
							<li>Statistics and econometry</li>
							<li>Energy systems, politics and economics</li>
							<li>Data science</li>
							<li>Energy & transports</li>
							<li>Energy & the built environment</li>
							<li>Spatial data analysis</li>
						</ul>`,
						`Master Thesis (6 months): : Reinforcement Learning to run Power Networks. Implementation
and comparison of Reinforcement Learning algorithms (A3C, PPO, QRDQN) on a
Power Grid simulator. Collaboration with RTE. Best agent selection after behavioral
analysis. Agent’s performances improvement with heuristics and expert rules.
Performance analysis under high penetration of intermittent energy sources (solar
PV, wind).`
					]
				},
				{
					title: 'General Engineering',
					place: 'Centrale Nantes, Nantes, France',
					logo: './ecn_logo.jpg',
					date: 'September 2016 - August 2019',
					tasks: [
						`Main subjects: 
						<ul>
							<li>Computer Science</li>
							<li>Solid & Fluid Mechanics</li>
							<li>Manufacture</li>
							<li>Thermodynamics</li>
							<li>Economy, finance, project management</li>
							<li>Electronics</li>
						</ul>
					`,
						`Specialization in Industrial engineering`,
						`Involved in student associations: 
					<ul>
							<li>Student Union - Partnership manager</li>
							<li>School prom night - Logistics manager</li>
							<li>Humanitarian association - Building team</li>
						</ul>
					`
					]
				},
				{
					title: 'Preparatory class',
					place: 'Lycée Clemenceau, Nantes, France',
					logo: './clem_logo.png',
					date: 'September 2014 - July 2016',
					tasks: [
						'Intensive courses in mathematics, physics and chemistry for competitive exam to enter french engineering schools.'
					]
				}
			]
		},
		{
			name: 'Interests',
			icon: tree,
			content: [
				{ emoji: '🌳', interest: 'Nature' },
				{ emoji: '🏄‍♂️', interest: 'Surf' },
				{ emoji: '🏔️', interest: 'Mountain' },
				{ emoji: '🔨', interest: 'DIY' },
				{ emoji: '🏊‍♂️', interest: 'Swimming' },
				{ emoji: '⛵', interest: 'Sailing' },
				{ emoji: '🎸', interest: 'Guitare' },
				{ emoji: '💻', interest: 'Technologies' },
				{ emoji: '🔬', interest: 'Science' }
			]
		},
		{
			name: 'Contact',
			icon: envelopeO,
			content: [
				{ icon: envelopeO, title: 'Email', value: 'riou.hugo56@gmail.com' },
				{ icon: phone, title: 'Phone', value: '+33 6 40 95 84 72' },
				{ icon: mapMarker, title: 'Location', value: 'Paris 11' }
			]
		}
	];
</script>

<div class="d-flex" style="width: 100%">
	<Sidebar {contents} />
	<PageContent {contents} />
</div>
