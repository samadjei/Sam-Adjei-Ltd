export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		// {
		// 	name: 'slug',
		// 	title: 'Slug',
		// 	type: 'string',
		// },
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'string',
		},
		{
			name: 'mainImage',
			title: 'mainImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},

		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [
				{
					name: 'tag',
					title: 'Tag',
					type: 'string',
				},
			],
		},
		// {
		// 	name: 'categories',
		// 	title: 'Categories',
		// 	type: 'array',
		// 	of: [
		// 		{
		// 			name: 'categories',
		// 			title: 'Categories',
		// 			type: 'string',
		// 		},
		// 	],
		// },
	],
};
