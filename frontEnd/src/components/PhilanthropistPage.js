import React from 'react'
import hoverEffect from 'hover-effect'
import FedFoundation from '../images/FedFoundation.jpg'
import FedFoundation2 from '../images/FedFoundation2.jpg'


const PhilanthropistPage = () => {

  const img = React.useRef(null)

  React.useEffect(() => {
    new hoverEffect({
      parent: img.current,
      intensity: 0.1,
      image1: FedFoundation,
      image2: FedFoundation2,
      displacementImage: 'https://as1.ftcdn.net/jpg/02/00/44/38/500_F_200443802_QbtkkF5yzwmSke6Uw7ISHoM8kKDd9clQ.jpg',
    })
  }

  )

  return (
    <div className='philanthropist-page slide'>
      <div ref={img} className='LHS-container'>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'></div>
        <div className='Bottom-RHS-container'>
          <div className='text-container'>
            <p>
            Founded the ‘Roger Federer Foundation’ in 2003 which has invested over 28.5 million in educational programs in Africa and Switzerland, reaching out to 650,000 children.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhilanthropistPage
