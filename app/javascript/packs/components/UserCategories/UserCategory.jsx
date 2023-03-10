import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import UserResourceItem from "../UserResources/UserResourceItem"

function UserCategory() {
  const { categoryId } = useParams()
  const [userCategory, setUserCategory] = useState({})
  const [userResources, setUserResources] = useState([])
  
  const getUserCategory =  async () => {
    let response = await axios(`/api/v1/user_wellness_categories/${categoryId}`)
    let category = response.data.category
    let resources = response.data.resources
    setUserCategory(category)
    setUserResources(resources)
  }

  useEffect(() => {
    getUserCategory()
    console.log(userResources)
    console.log("YOU'VE GOT RESOURCES")
  }, [])

  return (
    <div className="page-content">
      <header>{userCategory.name}</header>
      {userResources && userResources.map(resource => (
        <UserResourceItem 
          key={resource.id}
          resource={resource}
        />
      ))}
    </div>
  )
}

export default UserCategory