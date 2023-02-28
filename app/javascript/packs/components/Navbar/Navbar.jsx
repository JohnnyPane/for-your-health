import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"
import axios from 'axios'

import WellnessResourceForm from '../UserResources/WellnessResourceForm'
import WellnessActivityForm from '../WellnessActivities/WellnessActivityForm'
import UserWellnessResources from '../UserResources/UserWellnessResources'

function Navbar(props) {
  const location = useLocation()
  let onRootPath = location.pathname == '/'

  const [user, setUser] = useState()
  const [userCategories, setUserCategories] = useState([])
  const [addingResource, setAddingResource] = useState(false)
  const [addingActivity, setAddingActivity] = useState(false)

  useEffect(() => {
    getCurrentUser()
    getUserCategories()
  }, [])

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

  const toggleResourceForm = () => {
    setAddingResource(!addingResource)
  }

  const toggleActivityForm = () => {
    setAddingActivity(!addingActivity)
  }

  return (
    <>
      <div className='navbar-wrapper'>
        { user && 
          <div className='navbar-content'>
            <Link to={``} className="nav-link">
              Wellness App
              <i className="fa-solid fa-spa" style={{ paddingLeft: "5px" }}></i>
            </Link>
            <div className='navbar-links'>
              <Link to={`/user/${user.id}/groups`} className="nav-link">Groups</Link>
              <Link to={`/user/${user.id}`} className="nav-link">Profile</Link>
              <button className="form-toggle-button" onClick={toggleResourceForm}>Resource +</button>
              <button className="form-toggle-button" onClick={toggleActivityForm}>Activity +</button>
            </div>
          </div> 
        }
      </div>
      {/* <UserWellnessResources /> */}
      {
        addingResource && 
        <WellnessResourceForm 
          categories={userCategories}
          toggleResourceForm={toggleResourceForm}
        />
      }
      {
        addingActivity && 
        <WellnessActivityForm 
          categories={userCategories} 
          toggleActivityForm={toggleActivityForm} 
        />
      }
    
      <Outlet context={user} />
    </>
  )
}

export default Navbar