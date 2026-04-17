import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity-schemas'

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Portfolio Studio',

  projectId: '70naj52f',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})