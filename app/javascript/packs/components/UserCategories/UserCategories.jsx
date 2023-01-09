import React, { useState, useEffect } from "react"
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import UserCategoryItem from "./UserCategoryItem"

function UserCategories() {
  const [userCategories, setUserCategories] = useState([])
  
  const getUserCategories =  async () => {
    let response = await axios("/api/v1/user_wellness_categories")
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
          <UserCategoryItem
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </>
  )
}

export default UserCategories