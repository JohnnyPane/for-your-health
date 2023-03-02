import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function UserActivityRadar(props) {
  const [activityLabels, setActivityLabels] = useState([])
  const [activityData, setActivityData] = useState([])
  const { userId } = useParams()

  const data = {
    labels: activityLabels,
    datasets: [
      {
        label: 'Activities by Category',
        data: activityData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
     scale: {
        ticks: {
            beginAtZero: true,

        }
      }
  }

  let path = "/api/v1/wellness_activities/user_activities_by_category/" + userId

  const getWellnessActivities =  async () => {
    let response = await axios.get(path)
    let activities_by_category = response.data.activities
    let categories = []
    let activity_counts = []
    console.log("WOOOOOOOOO")
    console.log(activities_by_category)
    Object.keys(activities_by_category).forEach((category) => {
      categories.push(category)
      activity_counts.push(activities_by_category[category].length)
    })
    setActivityLabels(categories)
    setActivityData(activity_counts)
  }

  useEffect(() => {
    getWellnessActivities()
  }, [])

  return (
    <div className='activity-radar-wrapper'>
      <Radar data={data} options={options} />
    </div>
  )
}

export default UserActivityRadar