import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import AboutUsSection from '../components/AboutUsSection'
import ExpertTeamSection from '../components/ExpertTeamSection'

const AboutPage = () => {
    return (
        <>
            <Navbar />
          <AboutUsSection/>
          <ExpertTeamSection/>
            <Footer />
        </>
    )
}

export default AboutPage
