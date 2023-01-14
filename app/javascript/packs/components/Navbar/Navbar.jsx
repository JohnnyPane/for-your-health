import React, { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom"
import axios from 'axios'

function Navbar(props) {
  let [user, setUser] = useState()

  const getCurrentUser =  async () => {
    let response = await axios.get("/api/v1/users/session_user")
    console.log("AYO")
    console.log(response)
    let currentUser = response.data
    setUser(currentUser)
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
   <div className='navbar-wrapper'>
    <Link to={"/user/1"}>Profile</Link>
    <Outlet context={user} />
   </div>
  )
}

export default Navbar