// schemas/contact.js
export default {
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    },
    {
      name: 'links',
      title: 'Contact Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'value', type: 'string', title: 'Display Value' },
          ],
        },
      ],
    },
    {
      name: 'ctaLines',
      title: 'Call-to-Action Text',
      type: 'array',
      of: [{ type: 'string' }],
      description: "e.g., ['Lets build', 'something', 'great.']",
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    },
  ],
}
