import React from 'react'
import hoverEffect from 'hover-effect'
import GrandSlamFed1 from '../images/1GrandSlamFed.jpg'
import GrandSlamFed2 from '../images/1GrandSlamFed2.jpg'

const ChampionPage1 = () => {

  const img = React.useRef(null)

  React.useEffect(() => {
    new hoverEffect({
      parent: img.current,
      intensity: 0.1,
      image1: GrandSlamFed1,
      image2: GrandSlamFed2,
      displacementImage: 'https://as1.ftcdn.net/jpg/02/00/44/38/500_F_200443802_QbtkkF5yzwmSke6Uw7ISHoM8kKDd9clQ.jpg',
    })
  })

  return (
    <div className='champion-page-1 slide'>
      <div ref={img} className='LHS-container'>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'></div>
        <div className='Bottom-RHS-container'>
          <div className='text-container'>
            <p>
            Wins his first Grand Slam, Wimbledon, in 2003, defeating legend, Pete Sampras, en route, and thus begins the era of Roger Federer…
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChampionPage1
