import React, { useState, useEffect } from "react"
import { Link, useOutletContext } from 'react-router-dom'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import UserCategoryItem from "./UserCategoryItem"

function UserCategories(props) {
  const user = useOutletContext()
  const [userCategories, setUserCategories] = useState([])
  
  const getUserCategories =  async () => {
    let response = await axios.get("/api/v1/user_wellness_categories")
    let user_categories = response.data
    setUserCategories(user_categories)
  }

  useEffect(() => {
    getUserCategories()
  }, [])

  return (
    <>
      <header>Categories</header>
      <div className="category-wrapper">
        {userCategories && userCategories.map(category => (
        <Link to={`/user/${user.id}/categories/${category.id}`} key={category.id} >
            <UserCategoryItem
              key={category.id}
              category={category}
            />
        </Link>
        ))}
      </div>
    </>
  )
}

export default UserCategories