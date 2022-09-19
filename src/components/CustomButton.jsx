import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const CustomButton = ({children, href: to}) => {

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
      <Link
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       to={to}
      >
        <button style={Style}>
            {children}
        </button>
          </Link>
    </div>
  )
}

export default CustomButton