import { writable, derived } from 'svelte/store';
import type { Content } from './utils';

export const section_store = writable<Content['name'] | undefined>(undefined);

export const isMobileStore = writable<boolean>(false);

const base_classes = {
	sidebar_wrapper: 'd-flex flex-column justify-content-between align-items-center '
};

export const classStore = derived(isMobileStore, ($isMobileStore) => {
	return {
		content_class: $isMobileStore ? 'bg-white p-3' : 'bg-white p-5',
		sidebar_wrapper: (opened: boolean): string => {
			if ($isMobileStore) {
				return opened
					? base_classes.sidebar_wrapper + 'sidebar-opened-mobile'
					: 'd-flex flex-column justify-content-between align-items-center sidebar-closed';
			}
			return opened
				? base_classes.sidebar_wrapper + 'sidebar-opened-not-mobile'
				: 'd-flex flex-column justify-content-between align-items-center sidebar-closed';
		},
		page_content_wrapper: $isMobileStore
			? 'page-content-wrapper-mobile'
			: 'page-content-wrapper-not-mobile'
	};
});

export const sidebarOpened = writable(false);
