import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders"
import WellnessActivities from "../WellnessActivities/WellnessActivities"
import WellnessActivityForm from "../WellnessActivities/WellnessActivityForm"

function WellnessGroup() {
  const { groupId } = useParams()
  const [wellnessGroup, setWellnessGroup] = useState()
  const [groupCategories, setGroupCategories] = useState()
  
  const getWellnessGroup =  async () => {
    let response = await axios.get("/api/v1/wellness_groups/" + groupId)
    let group = response.data.wellness_group
    let groupCategories = response.data.categories
    console.log(response.data)
    setWellnessGroup(group)
    setGroupCategories(groupCategories)
  }

  useEffect(() => {
    getWellnessGroup()
  }, [])

  return (
    <div>
      { wellnessGroup && 
        <>
          <header>{wellnessGroup.name}</header>
          <div className="group-activities-wrapper">
            <WellnessActivityForm categories={groupCategories} />
            <WellnessActivities />
          </div>
        </>
      }
    </div>
  )
}

export default WellnessGroup