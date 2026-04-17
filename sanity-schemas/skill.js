// schemas/skill.js
export default {
  name: 'skill',
  title: 'Skill Card',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Languages, Web Platform, Tools & More',
    },
    {
      name: 'items',
      title: 'Skill Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of individual skills in this category',
    },
  ],
}
