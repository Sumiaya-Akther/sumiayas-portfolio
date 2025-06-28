

import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {


  return (
    <>
      <section className='bg-gray-200'>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App
