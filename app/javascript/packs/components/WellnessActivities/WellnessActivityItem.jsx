import React, { useState } from 'react'

function WellnessActivityItem(props) {
  const { activity } = props

  return (
   <div className='activity-item'>
    {activity.name}
   </div>
  )
}

export default WellnessActivityItem