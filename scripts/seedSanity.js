import dotenv from 'dotenv'
import SanityClient from '@sanity/client'

dotenv.config()

const client = SanityClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2026-04-16',
})

const documents = [
  {
    _type: 'hero',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    firstName: 'Yeiber',
    lastName: 'Cano',
    description: 'Building high-performance web platforms that drive growth — specializing in SEO, Core Web Vitals, and experimentation-driven optimization.',
    links: [
      { label: 'Email', url: 'mailto:yeibercano@gmail.com', value: 'yeibercano@gmail.com' },
      { label: 'GitHub', url: 'https://github.com/yeibercano', value: 'github.com/yeibercano' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yeiber', value: 'linkedin.com/in/yeiber' },
    ],
  },
  {
    _type: 'marquee',
    items: ['JavaScript', '·', 'TypeScript', '·', 'React', '·', 'Core Web Vitals', '·', 'Node.js', '·', 'SEO', '·', 'Performance', '·', 'Adobe'],
  },
  {
    _type: 'skill',
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Node.js'],
  },
  {
    _type: 'skill',
    category: 'Web Platform',
    items: ['HTML5 & CSS3', 'Performance Optimization', 'Core Web Vitals', 'Accessibility', 'Real-Time Systems'],
  },
  {
    _type: 'skill',
    category: 'Tools & More',
    items: ['Git · GitHub Actions', 'AWS S3 · AEM', 'SEO · Tailwind · Webpack', 'AI-Assisted Dev', 'Design Systems'],
  },
  {
    _type: 'experience',
    company: 'Adobe',
    role: 'Senior Software Engineer',
    startDate: '2017-01-01',
    period: '2017 — Present',
    bullets: [
      'Contributed to Edge Delivery (Milo) architecture, improving page speed, SEO, and rendering performance across marketing surfaces.',
      'Led Color SEO revamp, increasing discoverability and aligning frontend architecture with growth and acquisition goals.',
      'Led frontend performance optimizations improving Core Web Vitals (LCP) and reducing load times across high-traffic experiences.',
    ],
  },
  {
    _type: 'experience',
    company: 'Spigit',
    role: 'Front End Engineer',
    startDate: '2016-01-01',
    period: '2016 — 2017',
    bullets: ['Improved performance and resolved critical frontend issues in AngularJS applications during a framework transition.'],
  },
  {
    _type: 'project',
    title: 'Adobe Edge Delivery',
    label: '01 — Featured',
    description: 'Core contributor to Adobe Edge Delivery architecture powering marketing surfaces at scale.',
    tags: ['JavaScript', 'AEM', 'SEO', 'Performance'],
    featured: true,
    order: 1,
  },
  {
    _type: 'project',
    title: 'Global Events Platform',
    label: '02',
    description: 'High-traffic event platform supporting tens of thousands of concurrent users.',
    tags: ['React', 'Real-Time', 'Node.js'],
    featured: false,
    order: 2,
  },
  {
    _type: 'project',
    title: 'Color SEO Revamp',
    label: '03',
    description: 'Led a full SEO revamp for Adobe Color, aligning frontend architecture with growth goals.',
    tags: ['SEO', 'TypeScript', 'Performance'],
    featured: false,
    order: 3,
  },
  {
    _type: 'contact',
    tagline: 'Open to new opportunities and interesting conversations.',
    links: [
      { label: 'Email', url: 'mailto:yeibercano@gmail.com', value: 'yeibercano@gmail.com' },
      { label: 'GitHub', url: 'https://github.com/yeibercano', value: 'github.com/yeibercano' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yeiber', value: 'linkedin.com/in/yeiber' },
    ],
    ctaLines: ["Let's build", 'something', 'great.'],
    ctaLink: 'mailto:yeibercano@gmail.com',
  },
  {
    _type: 'footer',
    subtitle: 'Software Engineer · San Francisco, CA',
    builtWith: 'Built with React · Vite',
  },
]

async function createDocuments() {
  try {
    console.log('Creating documents in portfolio dataset...')
    for (const doc of documents) {
      const created = await client.create(doc)
      console.log(`✓ Created ${doc._type}: ${created._id}`)
    }
    console.log('✓ All documents created successfully!')
  } catch (error) {
    console.error('Error creating documents:', error)
    process.exit(1)
  }
}

createDocuments()
