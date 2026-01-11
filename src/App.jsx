import React from 'react'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Expertise from './components/Expertise'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import EducationExperience from './components/EducationExperience'
import ContactMe from './components/ContactMe'

export default function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Expertise />
      <TechStack />
      <Projects />
      <EducationExperience />
      <ContactMe />
    </>
  )
}

