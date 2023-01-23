import React, { useState } from "react"

function ResourcePreview(props) {
  const { previewData } = props

  return (
    <div className="resource-preview-wrapper">
      <div className="resource-image-wrapper">
        <img className="resource-preview-image" src={previewData.image} />
      </div>
      <div className="resource-preview-text">
        <div className="resource-preview-title">{previewData.title}</div>
        <div className="resource-preview-description">{previewData.description}</div>
        <div className="resource-preview-author">By: {previewData.author}</div>
      </div>
    </div>
  )
}

export default ResourcePreview