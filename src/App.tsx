import './App.css'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Blog', 'Contact']

const SKILLS: Record<string, string[]> = {
  Languages: ['Python', 'TypeScript', 'Java', 'C++', 'SQL'],
  Frameworks: ['React', 'Node.js', 'FastAPI', 'Spring Boot'],
  Tools: ['Git', 'Docker', 'PostgreSQL', 'Linux', 'Figma'],
  'Interests': ['Machine Learning', 'Distributed Systems', 'Web Dev'],
}

const PROJECTS = [
  {
    title: 'Health Tracker App',
    description: 'A personal health and fitness tracking app built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: '#',
  },
  {
    title: 'ML Research Project',
    description: 'Applying deep learning to healthcare data for predictive analytics.',
    tags: ['Python', 'PyTorch', 'Pandas'],
    link: '#',
  },
  {
    title: 'Distributed Cache',
    description: 'A distributed caching system implementing consistent hashing for scalable storage.',
    tags: ['Java', 'Distributed Systems'],
    link: '#',
  },
]

const POSTS = [
  {
    date: 'March 15, 2026',
    title: 'Getting Started with Distributed Systems',
    excerpt: 'An introduction to the core concepts behind distributed systems and why they matter.',
    tags: ['Systems', 'Architecture'],
  },
  {
    date: 'February 28, 2026',
    title: 'My First Semester as a CS Grad Student',
    excerpt: 'Reflections on transitioning from undergrad to graduate-level computer science coursework.',
    tags: ['Personal', 'Academia'],
  },
  {
    date: 'January 10, 2026',
    title: 'Why I Chose to Pursue a Masters in CS',
    excerpt: 'The story behind my decision to go back to school and what I hope to achieve.',
    tags: ['Personal'],
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">BB</a>
      <ul className="nav-links">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <span className="hero-badge">CS Masters Student</span>
      <h1 className="hero-title">
        Hi, I&apos;m <span className="accent">Brooke Brocker</span>
      </h1>
      <p className="hero-sub">
        I build things for the web, study distributed systems, and write about
        my journey in computer science.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <p className="section-label">About Me</p>
      <div className="about-grid">
        <div className="about-avatar" aria-hidden="true">BB</div>
        <div className="about-text">
          <p>
            I&apos;m a Computer Science graduate student passionate about building
            reliable, scalable software. My research interests span distributed
            systems, machine learning, and full-stack web development.
          </p>
          <p>
            When I&apos;m not coding or studying, I enjoy hiking, reading sci-fi,
            and contributing to open source projects. Always looking for
            opportunities to collaborate on interesting problems.
          </p>
          <div className="link-row">
            <a href="#" className="pill-link">Resume ↗</a>
            <a href="https://github.com" className="pill-link">GitHub ↗</a>
            <a href="https://linkedin.com" className="pill-link">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">Skills</p>
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <ul>
              {items.map(item => (
                <li key={item}><span className="skill-tag">{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Projects</p>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <a href={p.link} key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="section" id="blog">
      <p className="section-label">Blog</p>
      <div className="blog-list">
        {POSTS.map(post => (
          <a href="#" key={post.title} className="blog-post">
            <div className="blog-meta">
              <time>{post.date}</time>
              <div className="tag-row">
                {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label">Contact</p>
      <div className="contact-card">
        <p>
          Have a project in mind, want to collaborate, or just want to say hi?
          My inbox is always open.
        </p>
        <a href="mailto:brooke@example.com" className="btn btn-primary">
          brooke@example.com
        </a>
        <div className="link-row">
          <a href="https://github.com" className="pill-link">GitHub</a>
          <a href="https://linkedin.com" className="pill-link">LinkedIn</a>
          <a href="https://twitter.com" className="pill-link">Twitter</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Brooke Brocker · Built with React &amp; TypeScript</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
