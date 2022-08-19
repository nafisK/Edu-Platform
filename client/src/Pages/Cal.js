import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import SideNav from '../Components/SideNav'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Group Meeting',
    allDay: true,
    start: new Date(2022, 8, 30),
    end: new Date(2022, 8, 31),
  },
]

function Cal() {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' })
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div className='calendar ml-[20%]'>
      <SideNav />

      <h1>Calendar</h1>
      <h2>Add an Event:</h2>
      <div>
        <input
          type='text'
          placeholder='Add Title'
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText='Start Date'
          style={{ marginRight: '10px' }}
          selected={newEvent.start}
          onChange={start => setNewEvent({ ...newEvent, start })}
        />

        <DatePicker
          placeholderText='End Date'
          selected={newEvent.end}
          onChange={end => setNewEvent({ ...newEvent, end })}
        />

        <button style={{ marginTop: '10px' }} onClick={handleAddEvent}>
          Submit New Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}
export default Cal
