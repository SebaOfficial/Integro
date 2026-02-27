<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();

	const locale = $derived(data.locale);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header locale={locale.header} />

{@render children()}

<Footer locale={locale.footer} />
