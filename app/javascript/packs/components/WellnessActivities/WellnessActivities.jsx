import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import setAxiosHeaders from "../AxiosHeaders"
import WellnessActivityItem from "./WellnessActivityItem"

function WellnessActivities() {
  const [wellnessActivities, setWellnessActivities] = useState([])
  const { userId, groupId } = useParams()
  let path = "/api/v1/wellness_activities/"
  if (userId && !groupId) {
      path += "user_activities/" + userId
    } else if (groupId) {
      path += "group_activities/" + groupId
    }
  
  const getWellnessActivities =  async () => {
    let response = await axios.get(path)
    let activities = response.data
    setWellnessActivities(activities)
  }

  useEffect(() => {
    getWellnessActivities()
  }, [])

  return (
    <>
    <header>Activities</header>
      <div className="wellness-activity-wrapper">
        {wellnessActivities && wellnessActivities.map(activity => (
          <WellnessActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </>
  )
}

export default WellnessActivities