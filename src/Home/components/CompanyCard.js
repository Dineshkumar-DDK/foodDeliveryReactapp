import { useEffect,useState } from "react"
const CompanyCard = ()=>{
    const [orgData,setOrgData] = useState(null);
    useEffect(()=>{
        fetchOrgBasedProfileInfo()
    },[])

    const fetchOrgBasedProfileInfo=async()=>{
     /*
     * @me todo - fetching data from back end to get company related profile
     * integrate with mongo db (mongoose orm) or supabase sql (prisma orm)
     * amazon s3 bucket to show images for the proof of joining or achievement if any
     */ 
      setOrgData(null);
    }

    return orgData==null ?
    (
        <>
          <div>
            to do api call 
          </div>
        </>
    )
    :(
        <div>
            <div>
                <h1>Company Name</h1>
                <p><span>from</span><span>to</span></p>
            </div>
            <div>
                <p>Skills earned ....</p>
            </div>
        </div>
    )
}

export default CompanyCard