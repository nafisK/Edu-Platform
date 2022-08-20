import React from 'react'
import SideNav from '../Components/SideNav'
import underContruction from '../Assets/images/underConstruction.svg'

export default function Messages() {
  return (
    <div className='ml-[20%]'>
      <SideNav />
      <div className='h-screen w-screen  flex flex-col justify-center'>
        <img
          src={underContruction}
          alt='helloLogin'
          className='w-[50%] h-[50%] ml-[15%]'
        />
      </div>
    </div>
  )
}