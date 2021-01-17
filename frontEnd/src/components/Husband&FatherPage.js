import React from 'react'
import hoverEffect from 'hover-effect'
import FedFam from '../images/FedFam.jpg'
import FedFam2 from '../images/FedFam2.jpg'




const HusbandAndFatherPage = () => {

  const img = React.useRef(null)

  React.useEffect(() => {
    new hoverEffect({
      parent: img.current,
      intensity: 0.1,
      image1: FedFam2,
      image2: FedFam,
      displacementImage: 'https://as1.ftcdn.net/jpg/02/00/44/38/500_F_200443802_QbtkkF5yzwmSke6Uw7ISHoM8kKDd9clQ.jpg',
    })
  }

  )

  return (
    <div className='champion-page-1 slide'>
      <div ref={img} className='LHS-container'>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'></div>
        <div className='Bottom-RHS-container'>
          <div className='text-container'>
            <p>
            Married his wife, Mirka Vavrinec in 2009 and became a father of four to his two sets of twins -- Myla and Charlene born July 23, 2009 and Leo and Lenny born May 6, 2014
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HusbandAndFatherPage
