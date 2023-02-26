import React, { useState } from "react"
import ResourcePreview from "./ResourcePreview"

function UserResourceItem(props) {
  const { resource } = props
  let previewData = resource.preview_data
  let hasPreview = previewData && Object.keys(previewData).length > 0 ? true : false

  return (
    <div className="resource-item-wrapper">
      <header>{resource.title}</header>
      <div>{resource.body}</div>
      <div className="resource-preview">
      { hasPreview && 
        <ResourcePreview previewData={previewData} />
      }  
      </div>
    </div>
  )
}

export default UserResourceItem