// schemas/project.js
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., 01 — Featured, 02, 03',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'tags',
      title: 'Technology Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Shows as a larger card',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
