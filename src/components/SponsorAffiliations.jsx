import React from 'react'
import SponsorCarousal from './SponsorCarousal'
import AffiliationCarousal from './AffiliationCarousal'

const SponsorAffiliations = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black text-white px-10'>
            <div>
                <div>
                    <p className='text-5xl font-semibold pt-10 flex justify-center items-center mb-8'>Affiliations</p>
                </div>
                <div>
                    <AffiliationCarousal/>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-5xl font-semibold pt-10 flex justify-center items-center mb-8'>Sponsors</p>
                </div>
                <div>
                    <SponsorCarousal />
                </div>
            </div>

        </div>
    )
}

export default SponsorAffiliations
