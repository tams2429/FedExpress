import React from 'react'
import LandingPage from './components/LandingPage'
import TheBeginning from './components/TheBeginning'
import BeginningPage from './components/BeginningPage'
import JuniorPage from './components/JuniorPage'
import TheProfessional from './components/TheProfessional'
import ProfessionalPage from './components/ProfessionalPage'
import ThePhilanthropist from './components/ThePhilanthropist'
import PhilanthropistPage from './components/PhilanthropistPage'

const App = () => {
  return (
    <div className='outer-wrapper'>
      <div className='wrapper'>
        <LandingPage />
        <TheBeginning />
        <BeginningPage />
        <JuniorPage />
        <TheProfessional />
        <ProfessionalPage />
        <ThePhilanthropist />
        <PhilanthropistPage />
        <div className='the-champion slide'></div>
        <div className='champion-page slide'></div>
        <div className='the-husband-and-father slide'></div>
        <div className='husband-and-father-page slide'></div>
        <div className='the-legend slide'></div>
        <div className='legend-page slide'></div>

      </div>

    </div>
  )
}

export default App
