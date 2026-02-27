<script lang="ts">
	import TrainingNeurofeedback from '$lib/assets/training-neurofeedback.jpg?enhanced';
	import TrainingFotobiomodulation from '$lib/assets/training-fotobiomodulation.jpg?enhanced';
	import Check from '@tabler/icons-svelte-runes/icons/circle-check';
	import ArrowRight from '@tabler/icons-svelte-runes/icons/arrow-narrow-right';
	import type { Locale } from '$lib/i18n';

	const { locale }: { locale: Locale['home']['training'] } = $props();
</script>

<section class="bg-white py-24 dark:bg-slate-900/50" id="training">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 space-y-4 text-center">
			<h2 class="text-4xl font-bold md:text-5xl">{locale.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
				{locale.description}
			</p>
		</div>

		<!-- Neurofeedback -->
		<div class="grid items-stretch gap-12 lg:grid-cols-2">
			<div
				class="flex flex-col justify-center space-y-6 rounded-xl bg-background-light p-8 md:p-12 dark:bg-background-dark"
			>
				<h3 class="text-3xl font-bold">{locale.neurofeedback.title}</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					{locale.neurofeedback.description}
				</p>
				<ul class="space-y-4">
					{#each locale.neurofeedback.list as element}
						<li class="flex items-start gap-3">
							<Check class="mt-1 text-primary" />
							<span>{element}</span>
						</li>
					{/each}
				</ul>
				<a
					class="group flex w-fit items-center gap-2 font-bold text-primary transition-all hover:gap-4"
					href="/ambiti-di-intervento/neurofeedback"
				>
					{locale.neurofeedback.cta}
					<ArrowRight class="transition-transform group-hover:translate-x-1" />
				</a>
			</div>
			<div class="relative overflow-hidden rounded-xl">
				<enhanced:img
					class="h-full w-full object-cover"
					alt={locale.neurofeedback.img.alt}
					src={TrainingNeurofeedback}
				/>
				<div class="absolute inset-0 bg-linear-to-r from-background-dark/40 to-transparent"></div>
			</div>
		</div>

		<div class="pt-10"></div>

		<!-- Fotobiomodulazione -->
		<div class="grid items-stretch gap-12 lg:grid-cols-2">
			<div
				class="flex flex-col justify-center space-y-6 rounded-xl bg-background-light p-8 md:p-12 dark:bg-background-dark"
			>
				<h3 class="text-3xl font-bold">{locale.fotobiomodulation.title}</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					{locale.fotobiomodulation.description}
				</p>
				<ul class="space-y-4">
					{#each locale.fotobiomodulation.list as element}
						<li class="flex items-start gap-3">
							<Check class="mt-1 text-primary" />
							<span>{element}</span>
						</li>
					{/each}
				</ul>
				<a
					class="group flex w-fit items-center gap-2 font-bold text-primary transition-all hover:gap-4"
					href="/ambiti-di-intervento/fotobiomodulazione"
				>
					{locale.fotobiomodulation.cta}
					<ArrowRight class="transition-transform group-hover:translate-x-1" />
				</a>
			</div>
			<div class="relative overflow-hidden rounded-xl lg:order-first">
				<enhanced:img
					class="h-full w-full object-cover"
					alt={locale.fotobiomodulation.img.alt}
					src={TrainingFotobiomodulation}
				/>
				<div class="absolute inset-0 bg-linear-to-r from-background-dark/40 to-transparent"></div>
			</div>
		</div>
	</div>
</section>
