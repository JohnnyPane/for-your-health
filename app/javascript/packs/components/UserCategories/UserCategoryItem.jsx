import React, { useState } from 'react'

function UserCategoryItem(props) {
  const { category } = props

  return (
   <div className='user-category'>
    {category.name}
   </div>
  )
}

export default UserCategoryItem