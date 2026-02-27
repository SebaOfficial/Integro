<script lang="ts">
	type Props = {
		src: string;
		title: string;
		width?: number;
		height?: number;
	};

	const { src, title, width = 600, height = 450 }: Props = $props();
</script>

<iframe
	{src}
	{width}
	{height}
	style="border:0;"
	allowfullscreen={false}
	loading="lazy"
	referrerpolicy="no-referrer-when-downgrade"
	{title}
></iframe>
