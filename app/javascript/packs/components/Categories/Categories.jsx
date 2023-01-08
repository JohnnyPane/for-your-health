import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import Category from "./Category"

function Categories() {
  const [categories, setCategories] = useState([])

  const getCategories = useCallback(async () => {
    let response = await axios("/api/v1/categories")
    setCategories(response.data)
  }, [])

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
    <header>Categories</header>
      <div className="categories-wrapper">
        {categories && categories.map(category => (
          <Category 
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </>
  )
}

export default Categories