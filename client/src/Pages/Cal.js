import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-datepicker'
import SideNav from '../Components/SideNav'
import 'react-datepicker/dist/react-datepicker.css'
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
    <div className='calendar flex ml-[20%] items-center h-screen w-screen '>
      <SideNav />
      <div class='p-4 ml-20 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8'>
        <form class='space-y-6' action='#'>
          <h5 class='text-xl font-medium text-gray-900 '>Add A New Event!</h5>
          <div>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Add Title
              </label>
              <input
                onChange={e =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                value={newEvent.title}
                type='email'
                name='email'
                id='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='UI Design Meeting for..'
                required
              />
            </div>
            <div>
              <label
                for='start'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Starting Date
              </label>
              <DatePicker
                placeholderText='Start Date'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                selected={newEvent.start}
                id='start'
                onChange={start => setNewEvent({ ...newEvent, start })}
              />
            </div>

            <div>
              <label
                for='end'
                class='block mb-2 text-sm font-medium text-gray-900 '
              >
                Ending Date
              </label>
              <DatePicker
                placeholderText='End Date'
                id='end'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                selected={newEvent.end}
                onChange={end => setNewEvent({ ...newEvent, end })}
              />
            </div>
          </div>

          <button
            type='submit'
            onClick={handleAddEvent}
            class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Create New Event
          </button>
        </form>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        className='m-[50px]'
        style={{ height: 800, width: 900, margin: '50px' }}
      />
    </div>
  )
}
export default Cal
