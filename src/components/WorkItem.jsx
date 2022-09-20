import React from 'react'

const WorkItem = ({children, img}) => {
  return (
    <div>
        <div className="work__logo">
            <img src={img} alt='work_item'/>
        </div>

        {children}
    </div>
  )
}

export default WorkItem