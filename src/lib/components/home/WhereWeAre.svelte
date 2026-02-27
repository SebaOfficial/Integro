<script lang="ts">
	import { google } from '$lib/data/google';
	import { practice } from '$lib/data/practice';
	import OpeningHoursFormatter from '$lib/utils/OpeningHoursFormatter';
	import type { Locale } from '$lib/i18n';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import ArrowRight from '@tabler/icons-svelte-runes/icons/arrow-narrow-right';

	const { locale }: { locale: Locale['home']['whereWeAre'] } = $props();

	const formatter = new OpeningHoursFormatter('it-IT');
</script>

<section class="bg-white py-24 dark:bg-slate-900/50">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="mb-12 text-center text-4xl font-extrabold md:text-5xl">{locale.title}</h2>

		<div class="flex flex-col gap-8 md:flex-row md:gap-8">
			<div class="w-full overflow-hidden rounded-2xl shadow-lg md:w-1/2">
				<GoogleMaps src={google.maps.iframe.src} title={locale.map.title} />
			</div>

			<div
				class="flex w-full flex-col justify-around rounded-2xl bg-background-light p-8 shadow-lg md:w-1/2 dark:bg-background-dark"
			>
				<div class="mb-6">
					<h3 class="mb-3 text-3xl font-bold">{locale.subtitle}</h3>

					<a class="block text-lg" href="geo:{practice.geo.latitude},{practice.geo.longitude}">
						{practice.address}
					</a>
				</div>

				<div class="mb-6">
					<div class="mb-6">
						<h4 class="mb-3 text-2xl font-bold">{locale.opeiningHours.title}</h4>
						<p>
							{#each formatter.groupDays(practice.openingHours) as group}
								{#if group.start === group.end}
									{formatter.getWeekday(group.start)}:
								{:else}
									{formatter.getWeekday(group.start)} - {formatter.getWeekday(group.end)}:
								{/if}

								{#if formatter.isClosed(group.hours)}
									{locale.opeiningHours.closed}
								{:else}
									{formatter.formatTime(group.hours.open)} – {formatter.formatTime(
										group.hours.close,
									)}
								{/if}
								<br />
							{/each}
						</p>
					</div>

					<a
						class="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-3"
						href={google.maps.directions.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{locale.directions}
						<ArrowRight class="h-6 w-6 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
