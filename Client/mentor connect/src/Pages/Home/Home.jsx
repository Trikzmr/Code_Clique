import React from 'react'
import ExploreProject from './Components/ExploreProject'
import MyProjectSection from './Components/MyProjectSection'
import AddProjectSection from './Components/AddProjectSection'

const Home = () => {
  return (
    <div className='home md:px-10 mx-auto py-12  '>
        <div className="homeAddNewSection">
          <AddProjectSection/>
        </div>

        <div className="homeYourProjectSection">
          <MyProjectSection/>
        </div>

        <div className="homeExploreProjectSection">
            <ExploreProject/>
        </div>

        <div className="homeJoinUsSection">
        </div>
    </div>
  )
}

export default Home
