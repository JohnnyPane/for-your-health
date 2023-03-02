import React, { useState } from 'react'
import UserCategories from '../UserCategories/UserCategories'
import WellnessGroups from '../WellnessGroups/WellnessGroups'
import WellnessActivities from '../WellnessActivities/WellnessActivities'
import UserActivityRadar from '../WellnessActivities/UserActivityRadar'

function Profile() {

  return (
    <div>
      <div className='user-categories-wrapper'>
        <UserActivityRadar />
        <UserCategories/>
        <WellnessGroups/>
        <WellnessActivities />
      </div>
    </div>
  )
}

export default Profile