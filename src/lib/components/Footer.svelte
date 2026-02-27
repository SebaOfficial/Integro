<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import Brain from '@tabler/icons-svelte-runes/icons/brain';
	import GoogleMaps from './GoogleMaps.svelte';
	import { google } from '$lib/data/google';
	import { practice } from '$lib/data/practice';

	const { locale }: { locale: Locale['footer'] } = $props();
</script>

<footer class="border-t border-primary/10 bg-background-light px-6 py-12 dark:bg-background-dark">
	<div class="mx-auto mb-12 flex max-w-7xl flex-row flex-wrap justify-between gap-12">
		<div class="col-span-2 space-y-6">
			<div class="flex items-center gap-3">
				<div class="flex h-8 w-8 items-center justify-center rounded bg-primary">
					<Brain class="text-background-dark" />
				</div>
				<span class="text-xl font-bold">{locale.site.name}</span>
			</div>
			<p class="max-w-sm text-slate-600 dark:text-slate-400">
				{locale.site.description}
			</p>
		</div>
		{#each locale.sections as section}
			<div>
				<h4 class="mb-4 font-bold">{section.title}</h4>
				<ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
					{#each section.links as link}
						<li>
							<a class="transition-colors hover:text-primary" href={link.href}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-primary/5 pt-8 text-xs tracking-widest text-slate-500 uppercase md:flex-row"
	>
		<p>
			&copy; {new Date().getFullYear()}
			{locale.site.name}. {locale.copyright}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html locale.attribution}
		</p>
		<div class="flex gap-8">
			<p>{locale.vatNumber.replace('{{vatNumber}}', practice.vatNumber)}</p>
		</div>
	</div>
</footer>
