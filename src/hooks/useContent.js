import { useEffect, useState } from 'react'
import { sanityClient, isSanityEnabled } from '../lib/sanityClient'
import { fallbackContent } from '../lib/fallbackContent'

const query = `{
  "hero": *[_type == "hero"][0]{role, location, firstName, lastName, description, links[]{label, url, value}},
  "marqueeItems": *[_type == "marquee"][0].items[],
  "skills": *[_type == "skill"]|order(_createdAt asc){category, items},
  "experience": *[_type == "experience"]|order(startDate desc){company, role, period, bullets},
  "projects": *[_type == "project"]|order(order asc){title, label, description, tags, featured},
  "contact": *[_type == "contact"][0]{tagline, links[]{label, url, value}, ctaLines, ctaLink},
  "footer": *[_type == "footer"][0]{subtitle, builtWith}
}`

export function useContent() {
  const [content, setContent] = useState(fallbackContent)

  useEffect(() => {
    if (!isSanityEnabled) return

    sanityClient.fetch(query)
      .then((result) => {
        setContent({
          hero: result.hero || fallbackContent.hero,
          marqueeItems: result.marqueeItems || fallbackContent.marqueeItems,
          skills: result.skills || fallbackContent.skills,
          experience: result.experience || fallbackContent.experience,
          projects: result.projects || fallbackContent.projects,
          contact: result.contact ? {
            ...fallbackContent.contact,
            ...result.contact,
            ctaLines: result.contact.ctaLines || fallbackContent.contact.ctaLines,
          } : fallbackContent.contact,
          footer: result.footer || fallbackContent.footer,
        })
      })
      .catch((error) => {
        console.warn('Sanity fetch failed, using fallback content.', error)
        setContent(fallbackContent)
      })
  }, [])

  return content
}
