import React, {useState} from 'react'

const CustomButton = ({children, href, ...props}) => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const Style = {
    background: 'var(--color-panel-bg)',
    color: isHover ? 'black' : "white",
    textDecoration: 'none'
  }

  return (
    <div className='btn'>
        <button
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} 
        >
          <a
           href={href}
           style={Style}
          >
            {children}
          </a>
        </button>
    </div>
  )
}

export default CustomButton