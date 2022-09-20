import React from 'react'
import Logo from '../public/img/logo.jpg'
import CustomButton from '../components/CustomButton'

const HomePage = () => {
  return (
    <div>
      <div className="mainPanel">
        Hello, I'm an indie back-end developer based Russia!
      </div>

      <div className="info">
        <div className='info__text'>
          <div className="info__name">Daniel Sopriko</div>
          Java/Kotlin(in future)/Js developer
        </div>
        <div className="info__img">
          <img src={Logo} alt='Logo'/>
        </div>
      </div>

      <div className="p__name">Work</div>

      <div className="container">
        Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. 
        Earum nihil consequuntur, quibusdam,
        tempora amet praesentium sit fugit 
        dolore facere at magni neque dolorem 
        blanditiis odit veritatis. Asperiores 
        enim illo earum.

        Lorem, ipsum dolor sit amet 
        consectetur adipisicing elit.
        Ad id porro, sit suscipit reprehenderit 
        quibusdam ipsa consectetur soluta incidunt
        nihil eveniet corporis maxime, reiciendis 
        rem sequi nam quae? Placeat aliquid magnam 
        illo repudiandae tempora exercitationem 
        fugiat consectetur eius quia dolores?
      </div>

      <CustomButton href="works">
        Works
      </CustomButton>

      <div className="p__name">Bio</div>
      
      <div className="container">
        Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. 
        Earum nihil consequuntur, quibusdam,
        tempora amet praesentium sit fugit 
        dolore facere at magni neque dolorem 
        blanditiis odit veritatis. Asperiores 
        enim illo earum.
      </div>

      <div className="p__name">I ♥</div>

      <div className="container">
        Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Architecto quod nesciunt totam ut error 
        consequuntur fugiat a. Molestias suscipit quae,
        laudantium consequuntur 
        amet tenetur quis ipsam ipsum quas odio eius!  
      </div>       

    </div>
  )
}

export default HomePage