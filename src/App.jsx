import './App.css'
import profilePic from './assets/profile.jpeg'


// links are stored as data so the list below can just loop over them
const links = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/gerardo-martinez-929a5a324/', description: 'Connect with me!' },
  { title: 'GitHub', url: 'https://github.com/Gerardo2106', description: 'My projects!' },
  { title: 'Portfolio', url: 'https://gerardo2106.github.io/portfolio/', description: 'Showcase of my journey as a developer!' },
  { title: 'Resume', url: 'https://gerardo2106.github.io/portfolio/Gerardo-Martinez-Resume.pdf', description: 'My experience and skills!' },
]

function App() {
  return (

    <main className="container">

      <section className="profile">
        <br />
        <img src={profilePic} alt="Gerardo Martinez" />
        <h1>Gerardo Martinez</h1>
        <h2>SWE @ CSUMB</h2>
        <p>Senior at CSUMB, ex-CodeDay intern, and Starbucks shift supervisor. I’m passionate about being part of making a difference in my community.</p>
      </section>


      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.title} <p>{link.description}</p>
            </a>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default App
