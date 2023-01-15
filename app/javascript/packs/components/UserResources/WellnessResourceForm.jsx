import React, { useState } from 'react'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders";

function WellnessResourceForm(props)  {
  const { categories } = props
  const [title, setTitle] = useState("")
  const [resourceUrl, setResourceUrl] = useState("")
  const [resourceBody, setResourceBody] = useState("")
  const [resourceCategory, setResourceCategory] = useState()

  const handleTitleInput = (event) => {
    event.persist();
    setTitle(event.target.value);
  };

  const handleUrlInput = (event) => {
    event.persist();
    setResourceUrl(event.target.value);
  };

  const handleBodyInput = (event) => {
    event.persist();
    setResourceBody(event.target.value);
  };

  const handleCategoryInput = (event) => {
    event.persist();
    setResourceCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setAxiosHeaders()
    axios
      .post('/api/v1/wellness_resources', {
        title: title, 
        url: resourceUrl,
        body: resourceBody, 
        category_id: resourceCategory
      })
      .then(response => {
        const activity = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            type="text"
            name="title"
            value={title}
            required
            className="form-control"
            onChange={handleTitleInput}
            id="title"
            placeholder="Title..."
          />
          {categories &&
            <>
              <label>Choose a Category:</label>

              <select name="categories" onChange={handleCategoryInput}>
                <option value="" key="0">{}</option>
                {categories.map(category => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))}
              </select>
            </>
          }
          <input
            type="text"
            name="resourceUrl"
            value={resourceUrl}
            required
            className="form-control"
            onChange={handleUrlInput}
            id="url"
            placeholder="Url for Resource"
          />
          <input
            type="text"
            name="resourceBody"
            value={resourceBody}
            required
            className="form-control"
            onChange={handleBodyInput}
            id="body"
            placeholder="Any notes you would like to add?"
          />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-outline-success btn-block">
            Add Resource
          </button>
        </div>
      </div>
    </form>
  )
}

export default WellnessResourceForm