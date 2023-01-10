import React, { useState } from 'react'
import UserCategories from '../UserCategories/UserCategories'
import WellnessGroups from '../WellnessGroups/WellnessGroups'

function Profile() {

  return (
   <div className='user-categories-wrapper'>
    <UserCategories/>
    <WellnessGroups/>
   </div>
  )
}

export default Profile