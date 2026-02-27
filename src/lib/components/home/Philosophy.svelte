<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import Philosophy from '$lib/assets/philosophy.jpg?enhanced';
	import LeafIcon from '@tabler/icons-svelte-runes/icons/plant-2';
	import ToolIcon from '@tabler/icons-svelte-runes/icons/tool';

	const { locale }: { locale: Locale['home']['philosophy'] } = $props();

	const cardIcons = [LeafIcon, ToolIcon];
</script>

<section class="mx-auto max-w-7xl px-6 py-24" id="filosofia">
	<div class="flex flex-col items-center gap-16 lg:flex-row">
		<div class="flex-1 space-y-8">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold tracking-widest text-primary-dark uppercase dark:text-primary"
			>
				{locale.subtitle}
			</div>
			<h2 class="text-4xl leading-tight font-bold md:text-5xl">
				{locale.title}
			</h2>
			<p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
				{locale.description}
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div
					class="rounded-xl border border-primary/10 bg-white p-6 transition-colors hover:border-primary/30 dark:bg-background-dark"
				>
					<LeafIcon class="mb-4 text-3xl text-primary" />
					<h3 class="mb-2 text-xl font-bold">{locale.cards[0].title}</h3>
					<p class="text-sm text-slate-600 dark:text-slate-400">
						{locale.cards[0].description}
					</p>
				</div>
				<div
					class="rounded-xl border border-primary/10 bg-white p-6 transition-colors hover:border-primary/30 dark:bg-background-dark"
				>
					<ToolIcon class="mb-4 text-3xl text-primary" />
					<h3 class="mb-2 text-xl font-bold">{locale.cards[1].title}</h3>
					<p class="text-sm text-slate-600 dark:text-slate-400">
						{locale.cards[1].description}
					</p>
				</div>
			</div>
		</div>
		<div class="w-full flex-1">
			<div class="group relative aspect-square overflow-hidden rounded-xl shadow-2xl">
				<enhanced:img
					alt={locale.img.alt}
					src={Philosophy}
					class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
				<div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
			</div>
		</div>
	</div>
</section>
