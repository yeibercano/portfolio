import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

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

    // Scroll reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

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
          <p className="hero-tag">Frontend Engineer · San Francisco, CA</p>
          <h1 className="hero-name">Yeiber<span>Cano</span></h1>
        </div>
        <div className="hero-right">
          <p className="hero-desc">
            Building high-performance web platforms that drive growth — specializing in SEO, Core Web Vitals, and experimentation-driven optimization.
          </p>
          <div className="hero-meta">
            <a href="mailto:yeibercano@gmail.com">yeibercano@gmail.com</a>
            <a href="tel:4156453617">(415) 645-3617</a>
            <a href="https://github.com/yeibercano" target="_blank" rel="noreferrer">github.com/yeibercano</a>
            <a href="https://linkedin.com/in/yeiber" target="_blank" rel="noreferrer">linkedin.com/in/yeiber</a>
          </div>
        </div>
        <div className="hero-bg-text">FE</div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {['JavaScript', '·', 'TypeScript', '·', 'React', '·', 'Core Web Vitals', '·', 'Node.js', '·', 'SEO', '·', 'Performance', '·', 'Adobe'].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
          {['JavaScript', '·', 'TypeScript', '·', 'React', '·', 'Core Web Vitals', '·', 'Node.js', '·', 'SEO', '·', 'Performance', '·', 'Adobe'].map((item, i) => (
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
          <div className="skill-card reveal">
            <p className="skill-category">Languages</p>
            <p className="skill-list">JavaScript (ES6+)<br/>TypeScript<br/>React<br/>Redux<br/>Node.js</p>
          </div>
          <div className="skill-card reveal">
            <p className="skill-category">Web Platform</p>
            <p className="skill-list">HTML5 & CSS3<br/>Performance Optimization<br/>Core Web Vitals<br/>Accessibility<br/>Real-Time Systems</p>
          </div>
          <div className="skill-card reveal">
            <p className="skill-category">Tools & More</p>
            <p className="skill-list">Git · GitHub Actions<br/>AWS S3 · AEM<br/>SEO · Tailwind · Webpack<br/>AI-Assisted Dev<br/>Design Systems</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-list">
          <div className="exp-item reveal">
            <div className="exp-left">
              <span className="exp-company">Adobe</span>
              <span className="exp-role">Senior Software Engineer</span>
              <span className="exp-period">2017 — Present</span>
            </div>
            <ul className="exp-bullets">
              <li>Contributed to Edge Delivery (Milo) architecture, improving page speed, SEO, and rendering performance across marketing surfaces.</li>
              <li>Led Color SEO revamp, increasing discoverability and aligning frontend architecture with growth and acquisition goals.</li>
              <li>Led frontend performance optimizations improving Core Web Vitals (LCP) and reducing load times across high-traffic experiences.</li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-left">
              <span className="exp-company">Spigit</span>
              <span className="exp-role">Front End Engineer</span>
              <span className="exp-period">2016 — 2017</span>
            </div>
            <ul className="exp-bullets">
              <li>Improved performance and resolved critical frontend issues in AngularJS applications during a framework transition.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          <div className="project-card featured reveal">
            <span className="project-arrow">↗</span>
            <div>
              <p className="project-num">01 — Featured</p>
              <h3 className="project-name">Adobe Edge Delivery</h3>
            </div>
            <p className="project-desc">Core contributor to Adobe's Edge Delivery architecture powering marketing surfaces at scale.</p>
            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">AEM</span>
              <span className="tag">SEO</span>
              <span className="tag">Performance</span>
            </div>
          </div>

          <div className="project-card reveal">
            <span className="project-arrow">↗</span>
            <div>
              <p className="project-num">02</p>
              <h3 className="project-name">Global Events Platform</h3>
            </div>
            <p className="project-desc">High-traffic event platform supporting tens of thousands of concurrent users.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Real-Time</span>
              <span className="tag">Node.js</span>
            </div>
          </div>

          <div className="project-card reveal">
            <span className="project-arrow">↗</span>
            <div>
              <p className="project-num">03</p>
              <h3 className="project-name">Color SEO Revamp</h3>
            </div>
            <p className="project-desc">Led a full SEO revamp for Adobe Color, aligning frontend architecture with growth goals.</p>
            <div className="project-tags">
              <span className="tag">SEO</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact-left">
          <div className="section-header reveal">
            <span className="section-num">04</span>
            <h2 className="section-title">Contact</h2>
          </div>
          <p className="contact-tagline reveal">Open to new opportunities and interesting conversations.</p>
          <div className="contact-links reveal">
            <a href="mailto:yeibercano@gmail.com" className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">yeibercano@gmail.com</span>
            </a>
            <a href="https://github.com/yeibercano" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">github.com/yeibercano</span>
            </a>
            <a href="https://linkedin.com/in/yeiber" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">linkedin.com/in/yeiber</span>
            </a>
            <a href="tel:4156453617" className="contact-link">
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">(415) 645-3617</span>
            </a>
          </div>
        </div>
        <div className="contact-right reveal">
          <div className="avail-badge">
            <span className="avail-dot"></span>
            Available for new roles
          </div>
          <p className="contact-big">
            Let's build<br/>something<br/><a href="mailto:yeibercano@gmail.com">great.</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Yeiber Cano</p>
        <p>Frontend Engineer · San Francisco, CA</p>
        <p>Built with React · Vite</p>
      </footer>
    </>
  )
}

export default App