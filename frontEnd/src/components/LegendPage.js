import React from 'react'
import hoverEffect from 'hover-effect'
import Legend1 from '../images/Legend1.jpg'
import Legend2 from '../images/Legend2.jpeg'

const LegendPage = () => {

  const img = React.useRef(null)

  React.useEffect(() => {
    new hoverEffect({
      parent: img.current,
      intensity: 0.1,
      image1: Legend1,
      image2: Legend2,
      displacementImage: 'https://as1.ftcdn.net/jpg/02/00/44/38/500_F_200443802_QbtkkF5yzwmSke6Uw7ISHoM8kKDd9clQ.jpg',
    })
  })

  return (
    <div className='legend-page slide'>
      <div ref={img} className='LHS-container'>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'></div>
        <div className='Bottom-RHS-container'>
          <div className='text-container'>
            <p>
            Win his 20th Grand Slam in Australian Open 2018, eclipsing previous record set by Pete Sampras and is widely regarded to be the best to have ever graced the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegendPage
