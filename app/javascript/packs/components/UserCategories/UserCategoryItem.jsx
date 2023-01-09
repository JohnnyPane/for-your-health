import React, { useState } from 'react'

function Category(props) {
  const { category } = props

  return (
   <div className='user-category'>
    {category.name}
   </div>
  )
}

export default Category