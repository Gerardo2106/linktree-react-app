import './App.css'
import profilePic from './assets/profile.jpeg'
import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


// links are stored as data so the list below can just loop over them
// icon adds app icons and emoji to the links associated with them
const links = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/gerardo-martinez-929a5a324/', description: 'Connect with me!', icon: <FaLinkedin /> },
  { title: 'GitHub', url: 'https://github.com/Gerardo2106', description: 'My projects!', icon: <FaGithub /> },
  { title: 'Portfolio', url: 'https://gerardo2106.github.io/portfolio/', description: 'Showcase of my journey as a developer!', icon: '💼' },
  { title: 'Resume', url: 'resume.pdf', description: 'My experience and skills!', icon: '📄' },
]


// picks a greeting based on the visitor's local time
function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}


function App() {

  // load the saved theme, or default to dark on a first visit
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')


  // the class goes on <body> so the CSS color variables switch for the whole page
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : ''
    localStorage.setItem('theme', theme)
  }, [theme])


  const [showIntro, setShowIntro] = useState(true)
  // hide the intro greeting after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // keep the if statement below the useState/useEffect lines or React will throw an error
  if (showIntro) {
    return (
      <div className="intro">
        <h1>{getGreeting()}</h1>
      </div>
    )
  }
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
              <span className="icon">{link.icon}</span> {link.title} <p>{link.description}</p>
            </a>
          </li>
        ))}
      </ul>

      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>

    </main>
  )
}

export default App
