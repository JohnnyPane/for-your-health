import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"
import axios from 'axios'

import WellnessResourceForm from '../UserResources/WellnessResourceForm'
import UserWellnessResources from '../UserResources/UserWellnessResources'

function Navbar(props) {
  const location = useLocation()
  let onRootPath = location.pathname == '/'

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
    <>
      <div className='navbar-wrapper'>
        { user && 
          <div className='navbar-links'>
            <Link to={``} className="nav-link">
              Wellness App
              <i class="fa-solid fa-spa" style={{ paddingLeft: "5px" }}></i>
            </Link>
            <Link to={`/user/${user.id}/groups`} className="nav-link">Groups</Link>
            <Link to={`/user/${user.id}`} className="nav-link">Profile</Link>
          </div> 
        }
      </div>
      <UserWellnessResources />
      <WellnessResourceForm categories={userCategories} />
      <Outlet context={user} />
    </>
  )
}

export default Navbar