// schemas/experience.js
export default {
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'period',
      title: 'Period Display',
      type: 'string',
      description: 'e.g., 2017 — Present',
    },
    {
      name: 'bullets',
      title: 'Accomplishments',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'List of achievements at this company',
    },
  ],
}
