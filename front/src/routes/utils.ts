import type all from 'svelte-awesome/icons';

type Icon =
	| typeof all.fileText
	| typeof all.cog
	| typeof all.graduationCap
	| typeof all.userCircleO
	| typeof all.tree
	| typeof all.envelopeO
	| typeof all.mapMarker
	| typeof all.phone;

export interface ProfessionalExperiences {
	title: string;
	date: string;
	place: string;
	tasks: string[];
	logo?: string;
	subtitle?: string;
}

export class Skill {
	name: string;
	level: number;

	constructor(payload: { name: string; level: number }) {
		this.name = payload.name;
		if (payload.level < 0 || payload.level > 100) {
			throw new Error('Level should be a number between 0 and 100.');
		}
		this.level = Math.round(payload.level);
	}
}

export function firstCharUpper(str: string): string {
	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export type TransformedType<T> = T[][];

export function transformArrayToArrayOfTuples<T>(array: T[], n_cols = 2): TransformedType<T> {
	class Iter {
		i: number;
		max: number;
		constructor(max: number) {
			this.i = 0;
			this.max = max;
		}
		increment() {
			this.i = this.i < this.max - 1 ? this.i + 1 : 0;
		}
	}
	const i = new Iter(n_cols);
	const result: TransformedType<T> = [];
	for (const elem of array) {
		if (i.i === 0) {
			result.push([elem]);
		} else {
			result[result.length - 1].push(elem);
		}
		i.increment();
	}
	return result;
}

export interface ContentWithImageProps {
	top_content: string;
	image_content?: string;
	image_file_name: string;
	image_size: number;
}

export interface ContentContact {
	icon: Icon;
	title: string;
	value: string;
}

export type AnyContentType =
	| ContentWithImageProps
	| Skill[]
	| ProfessionalExperiences[]
	| Interest[]
	| ContentContact[];

export function isContentContact(content: AnyContentType): content is ContentContact[] {
	if (content instanceof Array) {
		const firstElem = content[0];
		if (firstElem == undefined) return true;
		return (
			firstElem.hasOwnProperty('icon') &&
			firstElem.hasOwnProperty('title') &&
			firstElem.hasOwnProperty('value')
		);
	}
	return false;
}

export function isContentWithImageProps(content: AnyContentType): content is ContentWithImageProps {
	if (content instanceof Array) return false;
	return (
		content.hasOwnProperty('top_content') &&
		content.hasOwnProperty('image_file_name') &&
		content.hasOwnProperty('image_size')
	);
}

export function isContentArrayOfSkills(content: AnyContentType): content is Skill[] {
	if (content instanceof Array) {
		const firstElem = content[0];
		if (firstElem == undefined) return true;
		return firstElem.hasOwnProperty('name') && firstElem.hasOwnProperty('level');
	}
	return false;
}

export function isContentArrayOfExperiences(
	content: AnyContentType
): content is ProfessionalExperiences[] {
	if (content instanceof Array) {
		const firstElem = content[0];
		if (firstElem == undefined) return true;
		return (
			firstElem.hasOwnProperty('title') &&
			firstElem.hasOwnProperty('date') &&
			firstElem.hasOwnProperty('place') &&
			firstElem.hasOwnProperty('tasks')
		);
	}
	return false;
}

export function isContentInterest(content: AnyContentType): content is Interest[] {
	if (content instanceof Array) {
		const firstElem = content[0];
		if (firstElem == undefined) return true;
		return firstElem.hasOwnProperty('interest');
	}
	return false;
}

export interface Content {
	name: 'About' | 'Skills' | 'Experiences' | 'Education' | 'Interests' | 'Contact';
	icon: Icon;
	content: AnyContentType;
}

export interface Interest {
	emoji: string | undefined;
	interest: string;
}

export function isMobileDevice(): boolean {
	return typeof window != 'undefined' && window.innerWidth <= 800;
}
