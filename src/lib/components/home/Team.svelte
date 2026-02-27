<script lang="ts">
	import { getImage, people as peopleMetadata } from '$lib/data/people';
	import type { Locale } from '$lib/i18n';
	import type { Person } from '$lib/types/Person';
	import Mail from '@tabler/icons-svelte-runes/icons/mail';
	import Phone from '@tabler/icons-svelte-runes/icons/phone';

	const { locale }: { locale: Locale['home']['team'] } = $props();

	const people = $derived(
		Array.from(
			[...locale.people.data, ...peopleMetadata]
				.reduce((acc, item) => {
					const existing = acc.get(item.slug) ?? {};
					acc.set(item.slug, { ...existing, ...item });
					return acc;
				}, new Map<string, any>())
				.values(),
		),
	) as ((typeof locale.people.data)[number] & Person)[];
</script>

<section class="mx-auto max-w-7xl px-6 py-24" id="team">
	<h1 class="text-center text-4xl font-bold">{locale.title}</h1>
	<div
		class="flex flex-col gap-16 rounded-xl bg-background-light p-8 md:p-16 dark:bg-background-dark"
	>
		{#each people as person, index}
			<div
				class="flex flex-col items-center gap-12 md:flex-row"
				class:md:flex-row-reverse={index % 2 !== 0}
			>
				<!-- Image -->
				<div class="w-full md:w-1/3">
					<div
						class="aspect-3/4 overflow-hidden rounded-xl border-4 border-white shadow-xl dark:border-slate-800"
					>
						<enhanced:img
							class="h-full w-full object-cover"
							alt={locale.people.img.alt.replace('{{person.name}}', person.name)}
							src={getImage(person.slug)}
						/>
					</div>
				</div>

				<!-- Text -->
				<div class="w-full space-y-6 md:w-2/3">
					<div class="space-y-2">
						<h2 class="text-4xl font-bold">{person.name}</h2>
						<p class="text-lg font-medium tracking-wide text-primary uppercase">
							{person.role}
						</p>
					</div>

					<p class="text-xl leading-relaxed text-slate-700 italic dark:text-slate-300">
						"{person.catchPhrase}"
					</p>

					<p class="text-slate-600 dark:text-slate-400">
						{person.description}
					</p>

					<div class="flex gap-4 pt-4">
						<a
							class="rounded-full bg-primary/20 p-3 text-background-dark transition-all hover:bg-primary/30 dark:text-slate-100"
							href="mailto:{person.contacts.email}"
						>
							<Mail class="h-5 w-5" />
						</a>

						<a
							class="rounded-full bg-primary/20 p-3 text-background-dark transition-all hover:bg-primary/30 dark:text-slate-100"
							href="tel:{person.contacts.phone.replaceAll(' ', '')}"
						>
							<Phone class="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
