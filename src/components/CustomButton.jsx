import React from 'react'

const CustomButton = ({children}) => {
  return (
    <div className='btn'>
        <button>{children}</button>
    </div>
  )
}

export default CustomButton