import React, { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import axios from 'axios'

import WellnessResourceForm from '../UserResources/WellnessResourceForm'
import UserWellnessResources from '../UserResources/UserWellnessResources'

function Navbar(props) {
  const [user, setUser] = useState()
  const [userCategories, setUserCategories] = useState([])
  
  const getCurrentUser =  async () => {
    let response = await axios.get("/api/v1/users/session_user")
    let currentUser = response.data
    setUser(currentUser)
  }

  const getUserCategories =  async () => {
    let response = await axios.get("/api/v1/user_wellness_categories")
    let user_categories = response.data
    setUserCategories(user_categories)
  }

  useEffect(() => {
    getCurrentUser()
    getUserCategories()
  }, [])

  return (
   <div className='navbar-wrapper'>
    { user && 
      <div>
        <Link to={`/user/${user.id}/groups`}>Groups</Link>
        <Link to={`/user/${user.id}`}>Profile</Link>
      </div> 
    }
    <UserWellnessResources />
    <WellnessResourceForm categories={userCategories} />
    <Outlet context={user} />
   </div>
  )
}

export default Navbar