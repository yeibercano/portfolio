# Sanity Schema Setup

These files contain the schema definitions for your portfolio content in Sanity.

## How to Set Up in Your Sanity Studio

1. Go to your Sanity project directory (if you have a separate Sanity studio setup)
2. Copy these schema files to your `schemas/` folder
3. Use them in your `sanity.config.ts` or `sanity.config.js`:

```javascript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  projectId: '70naj52f',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
```

## Document Types

### Hero
Edit your hero section (name, title, description, links)

### Marquee  
Manage the scrolling skills list

### Skill (Multiple)
Create 3 skill cards with categories and items

### Experience (Multiple)
Add work history entries

### Project (Multiple)
Create project entries with featured flag

### Contact
Edit tagline, links, and call-to-action

### Footer
Update footer subtitle and "Built with" text

## After Setup

1. Create one document for each type (hero, marquee, contact, footer)
2. Create multiple skill, experience, and project documents
3. The React frontend will automatically fetch and display all this content

Your Sanity project ID is: `70naj52f`
