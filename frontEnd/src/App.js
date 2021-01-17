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
import TheHusbandAndFather from './components/TheHusband&Father'
import HusbandAndFatherPage from './components/Husband&FatherPage'
import TheLegend from './components/TheLegend'
import LegendPage from './components/LegendPage'
import TheCoach from './components/TheCoach'

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
        <TheHusbandAndFather />
        <HusbandAndFatherPage />
        <TheLegend />
        <LegendPage />
        <TheCoach />
      </div>

    </div>
  )
}

export default App
