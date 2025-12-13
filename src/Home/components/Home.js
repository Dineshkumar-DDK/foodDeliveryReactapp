import React, { useContext, useEffect } from 'react'
import WorkExperience from './WorkExperience'
import copyRightsContext from '../../Utils/GlobalContext'
import recruiterContext  from '../../Utils/recruiterContext'
import CopyRightsContext from '../../Utils/GlobalContext'
import RecruiterContext from '../../Utils/recruiterContext'

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
  const {copyrightsData}  = useContext(CopyRightsContext);
  const{user,message} = copyrightsData;
  
  const {hrData,setHRData} =  useContext(RecruiterContext)
  const {name,hrCount} =hrData
  return (
    <div className="bg-red-100">
      <div>
        Hello HR {name}. Dinesh got almost {hrCount} visits.
      </div>
      <input
       onChange={(e)=>setHRData((prev)=>{
        return {...prev,name:e.target.value}
       })}
      />
      <Body />
      React
      Next
      Python
      DSA
      still loading...
      <hr/>
      <WorkExperience/>
      <div>
         {message + " " + user}
      </div>
    </div>
  )
}