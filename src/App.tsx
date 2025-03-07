import React from 'react'
import { motion } from 'framer-motion'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Intro />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </motion.div>
    </>
  )
}

export default App 