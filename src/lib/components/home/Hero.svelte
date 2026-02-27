<script lang="ts">
	import Hero from '$lib/assets/hero.jpg?enhanced';
	import { scrollTo } from 'svelte-scrolling';
	import type { Locale } from '$lib/i18n';

	const { locale }: { locale: Locale['home']['hero'] } = $props();
</script>

<section
	class="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6"
	id="hero"
>
	<div class="absolute inset-0 z-0">
		<enhanced:img src={Hero} alt={locale.img.alt} />
		<div class="absolute inset-0 bg-white/60 dark:bg-black/30"></div>
		<div
			class="absolute right-0 bottom-0 left-0 h-32
         bg-linear-to-b from-transparent to-background-light
         dark:inset-0 dark:h-auto
         dark:from-background-dark/50 dark:via-transparent dark:to-background-dark"
		></div>
	</div>
	<div class="relative z-10 max-w-4xl text-center">
		<h1 class="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
			{locale.title[0]}
			<span class="text-primary-dark italic dark:text-primary">{locale.title[1]}</span>
		</h1>
		<p
			class="mb-10 text-xl leading-relaxed font-light text-slate-700 md:text-2xl dark:text-slate-300"
		>
			{locale.description}
		</p>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				class="w-full rounded-xl bg-primary px-10 py-4 text-lg font-bold text-background-dark transition-all hover:brightness-110 sm:w-auto"
				href="#filosofia"
				use:scrollTo={'#filosofia'}
			>
				{locale.buttons.primary}
			</a>
			<a
				class="w-full rounded-xl border border-primary/20 bg-primary/10 px-10 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-primary/20 sm:w-auto dark:text-slate-100"
				href="/contatti"
			>
				{locale.buttons.secondary}
			</a>
		</div>
	</div>
</section>
