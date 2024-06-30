import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from "..//components/About"
import LatestEvents from "..//components/LatestEvents"
import SponsorAffiliations from '../components/SponsorAffiliations'
import Blogs from '../components/Blogs'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <LatestEvents/>
            <SponsorAffiliations/>
            <Blogs/>
        </div>
    )
}

export default HomePage
