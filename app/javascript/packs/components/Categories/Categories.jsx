import React, { useState, useEffect, useCallback } from "react"
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import Category from "./Category"

function Categories() {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  
  const getCategories = useCallback(async () => {
    let response = await axios("/api/v1/categories")
    setCategories(response.data)
  }, [])

  const getUserCategories =  async () => {
    let response = await axios("api/v1/user_wellness_categories")
    let user_categories = response.data.map(userCategory => userCategory.id)
    setSelectedCategories(user_categories)
  }

  const selectCategories = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(function(category) { 
        return category !== categoryId 
      }));
    } else {
      setSelectedCategories([categoryId, ...selectedCategories])
    }
  }

  useEffect(() => {
    getUserCategories()
    getCategories()
  }, [])

  const createUserCategories = (e) => {
    e.preventDefault()
    setAxiosHeaders()
    axios
      .post('/api/v1/categories', {
        category_ids: selectedCategories,
        select_categories: true
      })
      .then(response => {
        console.log("Created Categories!")
      })
  }

  return (
    <div className="page-content">
      <header>Categories</header>
      <div className="category-wrapper">
        {categories && categories.map(category => (
          <Category 
            key={category.id}
            category={category}
            selectCategories={selectCategories}
            preSelected={selectedCategories.includes(category.id)}
          />
        ))}
      </div>
      <button className="btn btn-outline-success btn-block" onClick={createUserCategories}>
          Save Categories
      </button>
    </div>
  )
}

export default Categories