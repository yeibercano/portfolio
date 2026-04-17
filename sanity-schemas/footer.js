// schemas/footer.js
export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g., Software Engineer · San Francisco, CA',
    },
    {
      name: 'builtWith',
      title: 'Built With Text',
      type: 'string',
      description: 'e.g., Built with React · Vite',
    },
  ],
}
