<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import Brain from '@tabler/icons-svelte-runes/icons/brain';

	const { locale }: { locale: Locale['header'] } = $props();
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80"
>
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
				<Brain class="text-primary" />
			</div>
			<h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
				{locale.title}
			</h1>
		</div>
		<nav class="hidden items-center gap-10 md:flex">
			<a class="text-sm font-medium transition-colors hover:text-primary" href="/">
				{locale.links.home}
			</a>
			<a class="text-sm font-medium transition-colors hover:text-primary" href="/contatti">
				{locale.links.contact}
			</a>
			<a class="text-sm font-medium transition-colors hover:text-primary" href="/blog">
				{locale.links.blog}
			</a>
			<a class="text-sm font-medium transition-colors hover:text-primary" href="/faqs">
				{locale.links.faq}
			</a>
			<a
				class="text-sm font-medium transition-colors hover:text-primary"
				href="/ambiti-di-intervento/"
			>
				{locale.links.areas}
			</a>
		</nav>
		<div class="flex items-center gap-4">
			<a
				href="/contatti?type=appuntamento"
				class="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-background-dark transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
			>
				{locale.cta}
			</a>
		</div>
	</div>
</header>
