import './App.css'
import profilePic from './assets/profile.jpeg'


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
    </main>
  )
}

export default App
