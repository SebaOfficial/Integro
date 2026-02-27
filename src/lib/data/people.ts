import type { Person } from '$lib/types/Person';

export const getImage = (slug: string) =>
	Object.entries(
		import.meta.glob(
			'/src/lib/assets/people/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
			{
				eager: true,
				query: {
					enhanced: true,
				},
			},
		),
	)
		.map(([path, module]) => {
			const fileName = path.split('/').pop()!;
			const slug = fileName.replace(/\.[^/.]+$/, '');
			return {
				slug,
				image: (module as { default: string }).default,
			};
		})
		.find((img) => img.slug === slug)!.image;

export const people: Person[] = [
	{
		name: 'Aurora Lisi',
		contacts: {
			email: 'aurora.lisi@example.com',
			phone: '+39 0123456789',
		},
		slug: 'aurora-lisi',
	},
];
