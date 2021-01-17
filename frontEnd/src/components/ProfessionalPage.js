import React from 'react'
import ReactPlayer from 'react-player'


const ProfessionalPage = () => {
  return (
    <div className='professional-page slide'>
      <div className='LHS-container'>
        <ReactPlayer url='https://youtu.be/0P1wPmgz0Bk?t=32' controls={true} width='100%' height='80%' className='video-player'/>
      </div>
      <div className='RHS-container'>
        <div className='Top-RHS-container'>
          <div className='text-container'>
            <p>
              Debuts on the ATP tour in 1998. Highlights include facing off against Top 10 ranked, Agassi in Basel. Losing 3-6, 2-6.
            </p>
            <br />
          </div>
        </div>
        <div className='Bottom-RHS-container'>
          {/* <div className='text-container'>
            <p>
              Began playing Tennis at the age of 8
            </p>
            <br />
            <p>
              Idols growing up were Stefan Edberg, Boris Becker and Pete Sampras.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalPage
