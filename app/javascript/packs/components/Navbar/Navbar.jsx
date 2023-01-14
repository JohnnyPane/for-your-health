import React, { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import axios from 'axios'

function Navbar(props) {
  let [user, setUser] = useState()

  const getCurrentUser =  async () => {
    let response = await axios.get("/api/v1/users/session_user")
    let currentUser = response.data
    setUser(currentUser)
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
   <div className='navbar-wrapper'>
    { user && 
      <div>
        <Link to={`/user/${user.id}/groups`}>Groups</Link>
        <Link to={`/user/${user.id}`}>Profile</Link>
      </div> 
    }
    <Outlet context={user} />
   </div>
  )
}

export default Navbar