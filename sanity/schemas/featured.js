export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Menu category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Feature category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Sort Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'restaurant',
            },
          ],
        },
      ],
    },
  ],
};
