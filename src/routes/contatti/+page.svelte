<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(page.url.searchParams.get('type') || 'no type');
	});
</script>
