<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import Philosophy from '$lib/components/home/Philosophy.svelte';
	import Team from '$lib/components/home/Team.svelte';
	import Training from '$lib/components/home/Training.svelte';
	import WhereWeAre from '$lib/components/home/WhereWeAre.svelte';

	const { data } = $props();
	const locale = $derived(data.locale.home);
</script>

<Hero locale={locale.hero} />

<main>
	<Philosophy locale={locale.philosophy} />
	<Training locale={locale.training} />
	<Team locale={locale.team} />
	<WhereWeAre locale={locale.whereWeAre} />
</main>
