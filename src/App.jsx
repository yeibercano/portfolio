import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Welcome to my portfolio. I am a developer passionate about creating amazing web experiences.</p>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of project 1.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of project 2.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Get in touch: email@example.com</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}

export default App