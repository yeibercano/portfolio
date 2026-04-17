import { useEffect, useRef } from 'react'
import { useContent } from './hooks/useContent'
import './App.css'

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const { hero, marqueeItems, skills, experience, projects, contact, footer } = useContent()

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`
    }

    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateRing()

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      <nav>
        <a href="#hero" className="nav-logo">YC</a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="hero-left">
          <p className="hero-tag">{hero.role} · {hero.location}</p>
          <h1 className="hero-name">
            {hero.firstName}
            <span>{hero.lastName}</span>
          </h1>
        </div>
        <div className="hero-right">
          <p className="hero-desc">{hero.description}</p>
          <div className="hero-meta">
            {hero.links.map((link) => (
              <a key={link.url} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noreferrer' : undefined}>
                {link.value}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-bg-text">FE</div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
          {marqueeItems.map((item, i) => (
            <span key={`dup-${i}`} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <section id="skills">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="skill-card reveal">
              <p className="skill-category">{skill.category}</p>
              <p className="skill-list">
                {skill.items.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < skill.items.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <div key={item.company + item.role} className="exp-item reveal">
              <div className="exp-left">
                <span className="exp-company">{item.company}</span>
                <span className="exp-role">{item.role}</span>
                <span className="exp-period">{item.period}</span>
              </div>
              <ul className="exp-bullets">
                {item.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className={`project-card ${project.featured ? 'featured' : ''} reveal`}>
              <span className="project-arrow">↗</span>
              <div>
                <p className="project-num">{project.label}</p>
                <h3 className="project-name">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-left">
          <div className="section-header reveal">
            <span className="section-num">04</span>
            <h2 className="section-title">Contact</h2>
          </div>
          <p className="contact-tagline reveal">{contact.tagline}</p>
          <div className="contact-links reveal">
            {contact.links.map((link) => (
              <a key={link.url} href={link.url} className="contact-link" target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-right reveal">
          <div className="avail-badge">
            <span className="avail-dot"></span>
            Available for new roles
          </div>
          <p className="contact-big">
            {contact.ctaLines.map((line, index) => (
              <span key={index}>
                {line.includes('great.') ? (
                  <a href={contact.ctaLink}>{line}</a>
                ) : (
                  line
                )}
                {index < contact.ctaLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Yeiber Cano</p>
        <p>{footer.subtitle}</p>
        <p>{footer.builtWith}</p>
      </footer>
    </>
  )
}

export default App