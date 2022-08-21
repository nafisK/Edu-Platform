import React from 'react'
import SideNav from '../Components/SideNav'
import Tabs from '../Components/TabComponents/Tabs'
import Video from '../Components/Video'

export default function VideoCall() {
  return (
    <div>
      <SideNav />
      <div className='box'>
        <Tabs />
        <Video />
      </div>
    </div>
  )
}
