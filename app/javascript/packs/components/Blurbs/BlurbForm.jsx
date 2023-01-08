import React, { useState } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders";

function BlurbForm(props)  {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleTitleInput = (event) => {
    event.persist();
    setTitle(event.target.value);
  };

  const handleBodyInput = (event) => {
    event.persist();
    setBody(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setAxiosHeaders()
    axios
      .post('/api/v1/blurbs', {
        blurb: {
          title: title,
          body: body,
        },
      })
      .then(response => {
        const blurb = response.data
        props.createBlurb(blurb)
      })
      .catch(error => {
        console.log(error)
      })
    setTitle("")
    setBody("")
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
            placeholder="Blurb Title..."
          />
          <input
            type="text"
            name="title"
            value={body}
            required
            className="form-control"
            onChange={handleBodyInput}
            id="title"
            placeholder="What's on your mind?"
          />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-outline-success btn-block">
            Add Blurb
          </button>
        </div>
      </div>
    </form>
  )
}

export default BlurbForm

// BlurbForm.propTypes = {
//   createBlurb: PropTypes.func.isRequired,
// }