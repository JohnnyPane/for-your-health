import React, { useState, useEffect } from "react"
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import WellnessGroupItem from "./WellnessGroupItem"

function WellnessGroups() {
  const [wellnessGroups, setWellnessGroups] = useState([])
  
  const getWellnessGroups =  async () => {
    let response = await axios.get("/api/v1/wellness_groups/index_user_wellness_groups")
    let groups = response.data
    setWellnessGroups(groups)
  }

  useEffect(() => {
    getWellnessGroups()
  }, [])

  return (
    <>
    <header>Groups</header>
      <div className="wellness-group-wrapper">
        {wellnessGroups && wellnessGroups.map(group => (
          <WellnessGroupItem
            key={group.id}
            group={group}
          />
        ))}
      </div>
    </>
  )
}

export default WellnessGroups