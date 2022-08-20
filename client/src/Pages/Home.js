import React from 'react'
import SideNav from '../Components/SideNav'
import { airplanes } from '../Assets/images/imageindex'
import GroupCard from '../Components/GroupCard'
import TeamCard from '../Components/TeamCard'
import Pagination from "../Components/Pagination/Pagination";

export default function Home() {

  // Pagination (captures user's page number)
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className='app'>
      <SideNav />
      <div className='home'>

        <h1 className='highlight'>Profile</h1>

        <h2>Dashboard → Profile</h2>

        {/* Purple Panel*/}
        <div className='homeRect'>
          <div className='homeRectPic round'>
            <img src="https://picsum.photos/300"/>
          </div>

          <div className='homeRecth1'><h3 className="white">UserName</h3></div>
          <div className='homeRectBody'>
            <body className="white">User ID: joihegh-joiengioj- hoihni-joijio </body>
            <body className="white">Points: 1200</body>
          </div>

          <span class="dot"></span>
          <img className='homeRectImage' src={airplanes} />
        </div>

        {/* Group Cards*/}
        <h1>Groups</h1>
        <div className='container'>
          <GroupCard 
            pic="https://picsum.photos/300?random=1" 
            team="Unstoppable Force"
            members="10"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=2" 
            team="The Avengers"
            members="23"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=3" 
            team="Bacon Army"
            members="200+"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=4" 
            team="Lofi study and relax"
            members="30"
          />
        </div>

        {/* Purple Panel*/}
        <h1>Your Teammates</h1>
        <div className='container'>
          <TeamCard 
            pic="https://picsum.photos/300?random=5" 
            name="Allison Wonderland"
            email="allisonwonderland@gmail.com"
            points="1200"
          />
          <TeamCard 
            pic="https://picsum.photos/300?random=6" 
            name="Adrien Agreste"
            email="catnoir@gmail.com"
            points="2300"
          />
          <TeamCard 
            pic="https://picsum.photos/300?random=7" 
            name="Marinette Dupain-Cheng"
            email="ladybug@gmail.com"
            points="3000"
          />
        </div>

        <Pagination
          className="paginationBar"
          currentPage={currentPage}
          totalCount="100"
          pageSize={4}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}
