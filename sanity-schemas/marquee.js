// schemas/marquee.js
export default {
  name: 'marquee',
  title: 'Marquee Section',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Skills/Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of skills separated by dots in the scrolling marquee',
    },
  ],
}
