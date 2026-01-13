import React from 'react'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import EducationExperience from './components/EducationExperience'
import ContactMe from './components/ContactMe'
import Certifications from './components/Certifications'

export default function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <EducationExperience />
      <Certifications />
      <Projects />
      <TechStack />
      <ContactMe />
    </>
  )
}

