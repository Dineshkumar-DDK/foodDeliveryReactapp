import React from 'react'
import WorkExperience from './WorkExperience'

const styledCard = {
    backgroundColor: '#f0f0f0'
}
const RestroCard = () => {
  return (
    <div className="res-card" style={styledCard}>
      <img className="res-logo" src="https://expressinnindia.com/wp-content/uploads/2022/08/ASTER-2-scaled.jpg" />
      <h3>Stande Foods</h3>
      <h4>North Indian, Chinese</h4>
      <h4>45 mins</h4>
      <h4>4.2 stars</h4>
      
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search comming soon..</div>
      {/* restro card container  */}
      <div className="res-container">
        <RestroCard />
      </div>
    </div>
  )
}
export const Home = () => {
  return (
    <div>
      <Body />
      React
      Next
      Python
      DSA
      still loading...
      <hr/>
      <WorkExperience/>
    </div>
  )
}