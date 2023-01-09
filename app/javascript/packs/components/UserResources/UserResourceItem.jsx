import React, { useState } from "react"

function UserResourceItem(props) {
  const { resource } = props
 
  return (
    <div className="resource-item-wrapper">
      <header>{resource.title}</header>
      <div>{resource.body}</div>
    </div>
  )
}

export default UserResourceItem