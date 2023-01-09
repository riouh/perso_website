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
				top_content: `<ul>
					<li>Proficient full-stack developer with experience in languages such as Python, Node and frameworks such as React and SvelteJS.</li>
					<li>Experience in database design and management.</li>
					<li>Excellent communicator with a special talent for explaining and teaching technical concepts.</li>
					<li>Experience in managing other developers within Agile frameworks.</li>
					<li>Passionate about using technology and data to solve problems, particularly in the fields of energy and the environment.</li>
					<li>Highly organized, able to prioritize and manage multiple tasks and projects effectively.</li>
					</ul>`,
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
					title: 'Enexflow - Senior Software Engineer',
					place: 'Paris, France',
					logo: './favicon_enexflow.ico',
					date: 'September, 2020 - Today',
					tasks: [
						`Main fullstack developper on the flagship product, an EMS platform designed to 
						help Energy professionals mitigate operational and financial risks while operating their assets, 
						by giving them the ability to monitor, analyze and optimize their portfolio.`,
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
						'Organised a recurrent conference to vulgarize tech subjects for all teams'
					]
				},
				{
					title: 'HelloFresh - Full stack Intern',
					place: 'Sydney, Australia (NSW)',
					logo: './hf_logo.png',
					date: 'Jan, 2019 - July 2019 (6 months)',
					tasks: [
						`Owner and manager of an in-house ETL.`,
						`Full-stack development, Feature creation and improvement both on
front and back ends. (Python, VueJS, PostgreSql, AWS, Docker).`,
						`Responsible for the full database restructuration. Coordination with all the database's clients.`,
						`Example of feature development: Automatic email sending, forecasts and
discrepancies visualisation, automatic customer complaints management.`
					]
				},
				{
					title: 'Procter & Gamble - Logistics Data Intern',
					place: 'Paris, France',
					logo: './pg_logo.png',
					date: 'Apr, 2018 - Sept 2018 (6 months)',
					tasks: [
						`Data processes automation within the logistics master-data team (Python Selenium, SAP scripting, VBA, Knime).`,
						`E.g: Automation of the promotional data transfer between two softwares.
Workload saving of 6h/week.`,
						`Change management and collaborators training on implemented automation
tools.`,
						`Shared resources creation for the whole Logistics Service, aiming at auto-training
in automation (KNIME, SAP Scripting, Python and Shell tutorials).`
					]
				}
			]
		},
		{
			name: 'Education',
			icon: graduationCap,
			content: [
				{
					title: 'MSc Energy Systems & Data Analytics',
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
							<li>Automatisation</li>
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
				{ icon: mapMarker, title: 'Location', value: 'Paris' }
			]
		}
	];
</script>

<div class="d-flex" style="width: 100%">
	<Sidebar {contents} />
	<PageContent {contents} />
</div>
