import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import Category from "./Category"

function Categories() {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  
  const getCategories = useCallback(async () => {
    let response = await axios("/api/v1/categories")
    setCategories(response.data)
  }, [])

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
    getCategories()
  }, [])

  return (
    <>
    <header>Categories</header>
      <div className="category-wrapper">
        {categories && categories.map(category => (
          <Category 
            key={category.id}
            category={category}
            selectCategories={selectCategories}
          />
        ))}
      </div>
    </>
  )
}

export default Categories