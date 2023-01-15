import React, { useState } from "react"

function UserResourceItem(props) {
  const { resource } = props
  console.log(resource)
  console.log(resource.preview_data)
  let previewData = resource.preview_data
  let hasPreview = Object.keys(previewData).length > 0 ? true : false

 
  return (
    <div className="resource-item-wrapper">
      <header>{resource.title}</header>
      <div>{resource.body}</div>
      <div className="resource-preview">
      { hasPreview && 
        <>
          <div>{previewData.title}</div>
          <img src={previewData.image} />
          <div>{previewData.description}</div>
          <div>{previewData.author}</div>
          {/* <div>{previewData.root_url}</div> */}
        </>
      }  
      </div>
    </div>
  )
}

export default UserResourceItem