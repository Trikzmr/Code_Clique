import React from 'react'
import ExploreProject from './Components/ExploreProject'

const Home = () => {
  return (
    <div className='home md:px-10 mx-auto py-12  '>
        <div className="homeAddNewSection">
        </div>

        <div className="homeYourProjectSection">

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
