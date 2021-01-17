import React from 'react'
import ReactPlayer from 'react-player'

const ChampionPage2 = () => {
  return (
    <div className='champion-page-2 slide'>
      <div className='LHS-container'>
        <ReactPlayer url='https://youtu.be/pEPdLJhq6-k' controls={true} width='100%' height='80%' className='video-player'/>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'>
          <div className='text-container'>
          </div>
        </div>
        <div className='Bottom-RHS-container'>
        </div>
      </div>
    </div>
  )
}

export default ChampionPage2
