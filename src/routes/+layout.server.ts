import locales from '$lib/i18n';

export const prerender = true;
export const ssr = true;
export const csr = true;

export const load = () => {
	return {
		locale: locales.it,
	};
};
