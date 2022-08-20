import React from 'react'
import SideNav from '../Components/SideNav'
import { airplanes } from '../Assets/images/imageindex'
import GroupCard from '../Components/GroupCard'
import TeamCard from '../Components/TeamCard'
import Pagination from "../Components/Pagination/Pagination";
import persons from "../Assets/persons.json";

export default function Home() {

  // Pagination (captures user's page number)
  const [currentPage, setCurrentPage] = React.useState(1);

  // The current view of the team tiles.
  const tiles = 3;
  const viewTeamTiles = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * tiles;
    const lastPageIndex = firstPageIndex + tiles;
    return persons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]); // Change resume tiles when the currentPage changes.

  return (
    <div className='app'>
      <SideNav />
      <div className='home'>

        <h1 className='highlight'>Profile</h1>

        <h2>Dashboard → Profile</h2>

        {/* Purple Panel*/}
        <div className='homeRect'>
          <div className='homeRectPic round'>
            <img src="https://picsum.photos/300" alt='user pic'/>
          </div>

          <div className='homeRecth1'>
            <h3 className="white">
              <div class="scroller">
                <span>
                  Software Engineer<br/>
                  Programmer<br/>
                  Designer<br/>
                  User<br/>
                  Developer
                </span>
              </div>
            </h3>
          </div>
          
          <div className='homeRectBody'>
            <body className="white">User ID: cefd5b22-81ab-441e-af78-7de75e5428aa</body>
            <body className="white">Points: 1200</body>
          </div>

          <img className='homeRectImage' src={airplanes} alt='background with airplanes'/>
        </div>

        {/* Group Cards*/}
        <h1>Groups</h1>
        <div className='container'>
          <GroupCard 
            pic="https://picsum.photos/300?random=1000" 
            team="Unstoppable Force"
            members="10"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=1002" 
            team="The Avengers"
            members="23"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=1003" 
            team="Bacon Army"
            members="200"
          />
          <GroupCard 
            pic="https://picsum.photos/300?random=1004" 
            team="Lofi study and relax"
            members="30"
          />
        </div>

        {/* Purple Panel*/}
        <h1>Your Teammates</h1>
        <div className='container'>
          {viewTeamTiles.map((item) => {
            return (
              <TeamCard
                pic={"https://picsum.photos/300?random=" + item.pic}
                name={item.name}
                email={item.email}
                points={item.points * 100}
              />
            );
          })}
        </div>

        <Pagination
          className="paginationBar"
          currentPage={currentPage}
          totalCount={persons.length}
          pageSize={tiles}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}
