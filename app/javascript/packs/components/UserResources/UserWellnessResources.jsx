import React, { useState, useEffect } from "react"
import { Link, useOutletContext } from 'react-router-dom'
import axios from 'axios'
import UserResourceItem from "./UserResourceItem"

function UserWellnessResources(props) {
  const [UserWellnessResources, setUserResources] = useState([])
  
  const getUserWellnessResources =  async () => {
    let response = await axios.get("/api/v1/wellness_resources")
    let userResources = response.data
    setUserResources(userResources)
  }

  useEffect(() => {
    getUserWellnessResources()
  }, [])

  return (
    <>
    <header>Resources</header>
      <div className="category-wrapper">
        {UserWellnessResources && UserWellnessResources.map(resource => (
         // <Link to={`/user/${user.id}/categories/${category.id}`} >
            <UserResourceItem
              key={resource.wellness_resource.id}
              resource={resource.wellness_resource}
            />
         // </Link>
        ))}
      </div>
    </>
  )
}

export default UserWellnessResources