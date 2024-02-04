import { defineConfig } from 'astro/config';
import db, { defineCollection, defineWritableCollection, field } from '@astrojs/db';

const Author = defineCollection({
	fields: {
		name: field.text(),
	},
});

const Themes = defineWritableCollection({
	fields: {
		name: field.text(),
	},
});

// https://astro.build/config
export default defineConfig({
	integrations: [db()],
	db: {
		studio: true,
		collections: { Author, Themes },
		data({ seed }) {
			seed(Author, [
				{ name: 'Ben' },
				{ name: 'Nate' },
				{ name: 'Erika' },
				{ name: 'Bjorn' },
				{ name: 'Sarah' },
			]);
		},
	},
});
