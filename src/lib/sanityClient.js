import SanityClient from '@sanity/client'

export const sanityClient = SanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === 'true',
  apiVersion: '2026-04-16',
})

export const isSanityEnabled = Boolean(import.meta.env.VITE_SANITY_PROJECT_ID)
