import React from 'react'
import LandingPage from './components/LandingPage'
import TheBeginning from './components/TheBeginning'
import BeginningPage from './components/BeginningPage'
import JuniorPage from './components/JuniorPage'
import TheProfessional from './components/TheProfessional'
import ProfessionalPage from './components/ProfessionalPage'
import ThePhilanthropist from './components/ThePhilanthropist'
import PhilanthropistPage from './components/PhilanthropistPage'
import TheChampion from './components/TheChampion'
import ChampionPage1 from './components/ChampionPage1'
import ChampionPage2 from './components/ChampionPage2'

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
        <TheChampion />
        <ChampionPage1 />
        <ChampionPage2 />
        <div className='the-husband-and-father slide'></div>
        <div className='husband-and-father-page slide'></div>
        <div className='the-legend slide'></div>
        <div className='legend-page slide'></div>

      </div>

    </div>
  )
}

export default App
