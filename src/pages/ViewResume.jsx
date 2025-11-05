import React from 'react'
import Preview from '../components/Preview'
import { FaBackward, FaFileDownload } from 'react-icons/fa'
import { MdEditDocument } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI'
import { resume } from 'react-dom/server'

function ViewResume() {
    React.useEffect(()=>{
        getResumeData();
    },[])
    const [resumeDetails, setResumeDetails] = React.useState(null);
    const getResumeData = async () => {
        const resumeId = window.location.pathname.split('/')[2];
        if(!resumeId){
            alert("No Resume Id is available!")
        }
        else{
            try{
                const response = await getResumeAPI(resumeId)
                if(response.status >= 200 && response.status < 300){
                    setResumeDetails(response.data);
                }
            }
            catch(err){
                console.log(err);
            }
        }
        
    }
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-md-1"></div>
            <div className="col-md-10 text-center">
                <h1>View Resume</h1>
                <button className='btn text-primary fs-2 me-2'>
                    <FaFileDownload />
                </button>
                <button className='btn text-warning fs-2 me-2'>
                    <MdEditDocument />
                </button>
                <button className='btn text-danger fs-2 me-2'>
                    <IoReload />
                </button>
                <Link to={'/resume'} className='btn text-dark fs-2 me-2'>
                    <FaBackward />
                </Link>
                <Preview resumeData={resumeDetails}/>
            </div>
            <div className="col-md-1"></div>
        </div>
        
        
    </div>
  )
}

export default ViewResume