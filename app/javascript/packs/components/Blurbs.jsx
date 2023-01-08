import React, { useState } from "react"

function Blurbs(props) {
  
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col" className="text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{props.children}</tbody>
        </table>
      </div>
    </>
  )
}

export default Blurbs