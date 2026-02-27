<script lang="ts">
	import Hero from '$lib/assets/hero.jpg?enhanced';
	import { scrollTo } from 'svelte-scrolling';
	import IconChevronCompactDown from '@tabler/icons-svelte-runes/icons/chevron-compact-down';
	import type { Locale } from '$lib/i18n';

	const { locale }: { locale: Locale['home']['hero'] } = $props();
</script>

<section class="relative flex h-screen items-center justify-center overflow-hidden" id="hero">
	<div class="absolute inset-0 z-0">
		<enhanced:img
			src={Hero}
			alt={locale.img.alt}
			class="h-full w-full object-cover"
			sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 2560px"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-white/60 dark:bg-black/60"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
		<span class="mb-6 block text-xs font-bold tracking-[0.4em] text-primary-dark dark:text-primary uppercase">
			{locale.subtitle}
		</span>
		<h1 class="notranslate text-charcoal mb-8 font-serif text-6xl leading-tight md:text-8xl">
			{locale.title}
		</h1>
		<p
			class="text-charcoal/80 mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-medium md:text-xl"
		>
			{locale.description}
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				class="w-full rounded-lg bg-primary px-10 py-4 text-center font-bold shadow-lg transition-transform hover:scale-105 sm:w-auto"
				use:scrollTo={'filosofia'}
				href="#filosofia"
			>
				{locale.buttons.primary}
			</a>
			<a
				class="w-full rounded-lg border border-primary/20 bg-white/20 dark:bg-black/20 px-10 py-4 text-center font-bold shadow-sm transition-all hover:bg-stone-50/10 sm:w-auto"
				href="/contatti"
			>
				{locale.buttons.secondary}
			</a>
		</div>
	</div>
	<a
		class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary"
		use:scrollTo={'about'}
		aria-label="Scorri in basso"
		href="#about"
	>
		<IconChevronCompactDown class="text-4xl font-extralight" size={48} />
	</a>
</section>
