import React from 'react'
import hoverEffect from 'hover-effect'
import TennisKidFed from '../images/TennisKidFed.jpg'
import YoungFed from '../images/YoungFed.jpg'

const BeginningPage = () => {

  const img = React.useRef(null)

  React.useEffect(() => {
    new hoverEffect({
      parent: img.current,
      intensity: 0.1,
      image1: YoungFed,
      image2: TennisKidFed,
      displacementImage: 'https://as1.ftcdn.net/jpg/02/00/44/38/500_F_200443802_QbtkkF5yzwmSke6Uw7ISHoM8kKDd9clQ.jpg',
    })
  })

  return (
    <div className='beginning-page slide'>
      <div ref={img} className='LHS-container'>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'></div>
        <div className='Bottom-RHS-container'>
          <div className='text-container'>
            <p>
            Born on 8th August 1981, in the town of Basel, Switzerland.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginningPage
