import React, { useState } from 'react'

function WellnessGroupItem(props) {
  const { group } = props

  return (
   <div className='user-category'>
    {group.name}
   </div>
  )
}

export default WellnessGroupItem