import React, { useState } from 'react'
import UserCategories from '../UserCategories/UserCategories'
import WellnessGroups from '../WellnessGroups/WellnessGroups'
import WellnessActivities from '../WellnessActivities/WellnessActivities'

function Profile() {

  return (
   <div className='user-categories-wrapper'>
    <UserCategories/>
    <WellnessGroups/>
    <WellnessActivities />
   </div>
  )
}

export default Profile