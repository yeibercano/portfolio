// schemas/hero.js
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'e.g., Software Engineer',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., San Francisco, CA',
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'links',
      title: 'Links',
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
  ],
}
