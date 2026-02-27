const it = {
	code: 'it',
	header: {
		title: 'Integro',
		links: {
			home: 'Home',
			contact: 'Contatti',
			blog: 'Blog',
			faq: 'FAQs',
			areas: "Ambiti d'Intervento",
		},
		cta: 'Fissa Appuntamento',
	},
	footer: {
		site: {
			name: 'Integro',
			description: 'Sudio di psicoterapia e training della mente a Piossasco',
		},
		sections: [
			{
				title: 'Link Utili',
				links: [
					{
						label: 'Home',
						href: '/',
					},
					{
						label: 'Contatti',
						href: '/contatti',
					},
					{
						label: 'Blog',
						href: '/blog/',
					},
					{
						label: 'FAQs',
						href: '/faqs/',
					},
				],
			},
			{
				title: 'Legali',
				links: [
					{
						label: 'Privacy Policy',
						href: '/privacy-policy',
					},
				],
			},
		],
		copyright: 'Tutti i diritti riservati.',
		attribution:
			'Sito sviluppato da <a class="text-primary hover:underline" href="https://racca.me/it/">Sebastiano Racca</a>.',
		vatNumber: 'P.IVA {{vatNumber}}',
	},
	home: {
		hero: {
			title: ['Integrità della', 'Mente e del Corpo'],
			subtitle: 'Studio di Psicoterapia e Training della Mente a Piossasco',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			buttons: {
				primary: 'Inizia il tuo percorso',
				secondary: 'Contattaci',
			},
			img: {
				alt: 'Una foresta',
			},
		},
		philosophy: {
			title: "Coltivare l'equilibrio attraverso cure basate su evidenze.",
			subtitle: 'La Filosofia Integro',
			description:
				"In Integro, crediamo che la vera guarigione avvenga all'intersezione tra consapevolezza biologica e intuizione psicologica. La nostra pratica si basa sulle fondamenta dell''integrità'—lo stato di essere integri e indivisibili.",
			cards: [
				{
					title: 'Mente & Corpo',
					description: 'Trattiamo la persona come un sistema interconnesso di mente e corpo',
				},
				{
					title: 'Strumenti Clinici',
					description: 'Strumenti e tecniche cliniche che supportano il processo terapeutico.',
				},
			],
			img: {
				alt: 'Arte del Kintsugi',
			},
		},
		training: {
			title: 'Training della Mente',
			description:
				'Sfruttare il potere della plasticità cerebrale per ottimizzare le prestazioni mentali e la stabilità emotiva.',
			neurofeedback: {
				title: "Cos'è il Neurofeedback?",
				description:
					'NeuroFeedback è un sistema di addestramento non invasivo e privo di farmaci che ti aiuta a riorganizzare i tuoi schemi cerebrali. Fornendo feedback biologico in tempo reale, il tuo cervello impara a regolarsi in modo più efficiente.',
				list: [
					'Migliora la concentrazione e la chiarezza cognitiva',
					'Ridurre le risposte di ansia e stress',
					'Ottimizzare i modelli di sonno e il recupero',
				],
				cta: 'Scopri di più sul Neurofeedback',
				img: {
					alt: 'Allenare il cervello con il Neurofeedback',
				},
			},
			fotobiomodulation: {
				title: "Cos'è Il NIR?",
				description:
					"La fotobiomodulazione è una terapia non invasiva che utilizza la luce a bassa intensità per stimolare i processi di guarigione e rigenerazione del corpo. A livello cerebrale, può migliorare la funzione mitocondriale, ridurre l'infiammazione e promuovere la neuroplasticità.",
				list: [
					'Stimola la rigenerazione cellulare e la guarigione',
					"Riduce l'infiammazione e il dolore",
					'Promuove la neuroplasticità e la funzione cognitiva',
				],
				cta: 'Scopri di più sulla Fotobiomodulazione',
				img: {
					alt: 'Allenare il cervello con la Fotobiomodulazione',
				},
			},
		},
		team: {
			title: 'Chi Siamo',
			people: {
				img: {
					alt: 'Foto di {{person.name}}',
				},
				data: [
					{
						slug: 'aurora-lisi',
						role: 'Psicoterapeuta Clinica',
						description:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						catchPhrase: 'La salute mentale è un diritto fondamentale.',
					},
				],
			},
		},
		whereWeAre: {
			title: 'Vieni in Studio',
			subtitle: 'Dove Siamo',
			opeiningHours: {
				title: 'Orari di Apertura',
				closed: 'Chiuso',
			},
			directions: 'Indicazioni Stradali',
			map: {
				title: 'Dove Trovarci',
			},
		},
	},
};

export default it;
