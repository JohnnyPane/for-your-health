import React, { useState } from 'react'

import axios from "axios";
import setAxiosHeaders from "../AxiosHeaders";

function Blurb(props) {
  const { blurb } = props
  const path = `/api/v1/blurbs/${blurb.id}`;

  const handleChange = () => {
    updateBlurb();
  }
  
  const updateBlurb = () => {
    setAxiosHeaders();
    axios
      .put(this.path, {
        blurb: {
          title: "",
          body: ""
        }
      })
      .then(response => {})
      .catch(error => {
        console.log(error);
      });
  }

  const handleDestroy = () => {
    setAxiosHeaders();
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete(path)
        .then(response => {
          props.getBlurbs();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

    
  return (
    <tr className={'table-light'}>
      <td>
        <input
          type="text"
          defaultValue={blurb.title}
          className="form-control"
          id={`blurb__title-${blurb.id}`}
        />
      </td>
      <td className="text-right">
        <div>
          {blurb.body}
        </div>
        <button className="btn btn-outline-danger" onClick={handleDestroy}>Delete</button>
      </td>
    </tr>
  )
}

export default Blurb
