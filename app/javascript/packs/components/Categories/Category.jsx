import React, { useState } from 'react'

function Category(props) {
  const { category, selectCategories, preSelected } = props
  const [selected, setSelected] = useState(preSelected)

  const selectCategory = () => {
    setSelected(!selected)
    selectCategories(category.id)
  }

  return (
   <div className={selected ? 'category-display-name' : 'category-name'} onClick={selectCategory}>
    {category.name}
   </div>
  )
}

export default Category