import React from 'react'
import LandingPage from './components/LandingPage'
import TheBeginning from './components/TheBeginning'
import BeginningPage from './components/BeginningPage'

const App = () => {
  return (
    <div className='outer-wrapper'>
      <div className='wrapper'>
        <LandingPage />
        <TheBeginning />
        <BeginningPage />
        <div className='tennis-page slide'></div>
        <div className='the-professional slide'></div>
        <div className='professional-page slide'></div>
        <div className='the-philanthropist slide'></div>
        <div className='philanthropist-page slide'></div>
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
