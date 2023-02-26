import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders";

function WellnessActivityForm(props)  {
  const { categories } = props
  const { userId, groupId } = useParams()

  const [name, setName] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [activityDate, setActivitiyDate] = useState("")
  const [activityCategory, setCategory] = useState()
  const [activityType, setActivitiyType] = useState()  

  const handleNameInput = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleCategoryInput = (event) => {
    event.persist();
    setCategory(event.target.value);
  };

  const handlActivityTypeInput = (event) => {
    event.persist();
    setActivitiyType(event.target.value);
  };


  const handleDateInput = (event) => {
   setActivitiyDate(event.target.value);
  }

  const handleStartTimeInput = (event) => {
    event.persist();
    setStartTime(event.target.value);
  }

  const handleEndTimeInput = (event) => {
    event.persist();
    setEndTime(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAxiosHeaders()
    axios
      .post('/api/v1/wellness_activities', {
        activity: {
          name: name,
          category_id: activityCategory,
          date: activityDate,
          start_time: startTime,
          end_time: endTime,
          group_id: groupId ? groupId : null
        },
      })
      .then(response => {
        const activity = response.data
        console.log("CREATED ACTIVITY")
        console.log(activity)
        // props.createActivity(activity)
      })
      .catch(error => {
        console.log(error)
      })
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="form-row">
        <div className="form-group col-md-8">
          <input
            type="text"
            name="name"
            value={name}
            required
            className="form-control"
            onChange={handleNameInput}
            id="title"
            placeholder="Acitivity Name..."
          />
          {categories &&
            <>
              <label>Choose a Category:</label>

              <select name="categories" onChange={handleCategoryInput}>
                <option value="">{}</option>
                {categories.map(category => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </>
          }
          <label>Date</label>
          <input
            type="date"
            name="activity-date"
            value={activityDate}
            required
            className="form-control"
            onChange={handleDateInput}
          />
          <label>Start Time</label>
          <input
            type="time"
            name="start-time"
            value={startTime}
            required
            className="form-control"
            onChange={handleStartTimeInput}
            placeholder="StartTime"
          />
          <label>End Time</label>
          <input
            type="time"
            name="end-time"
            value={endTime}
            required
            className="form-control"
            onChange={handleEndTimeInput}
            placeholder="00:00"
          />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-outline-success btn-block">
            Add Activity
          </button>
        </div>
      </div>
    </form>
  )
}

export default WellnessActivityForm