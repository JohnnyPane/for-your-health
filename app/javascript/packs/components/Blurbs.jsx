import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import Blurb from './Blurb'
import BlurbForm from './BlurbForm';

function Blurbs(props) {
  const [blurbs, setBlurbs] = useState([])

  const getBlurbs = useCallback(async () => {
    let response = await axios("/api/v1/blurbs")
    setBlurbs(response.data)
  }, [])

  useEffect(() => {
    getBlurbs()
  }, [])

  const createBlurb = (blurb) => {
    const newBlurbs = [blurb, blurbs];
    setBlurbs({ newBlurbs });
  }
  
  return (
    <>
    <div> <BlurbForm createBlurb={createBlurb} /></div>
     
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
          <tbody>  
            { blurbs && blurbs.map(blurb => (
              <Blurb 
                key={blurb.id} 
                blurb={blurb} 
                getBlurbs={getBlurbs}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Blurbs