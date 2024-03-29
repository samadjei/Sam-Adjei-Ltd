import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	// projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	projectId: '7sontfqh',
	// dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);
