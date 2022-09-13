export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude f the restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'longitude f the restaurant',
    },
    {
      name: 'adress',
      type: 'string',
      title: 'restaurant adress',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'enter a Rating from (1-5 stars)',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('please enter a Rating from (1-5 stars)'),
    },
    {
      name: 'type',
      type: 'string',
      title: 'category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
  ],
};
