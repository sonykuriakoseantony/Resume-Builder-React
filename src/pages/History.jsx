import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function History() {

  React.useEffect(()=>{
    getAllResumes();
  },[])
  const [allResumes, setAllResume] = useState([])

  const getAllResumes = async () => {
    try{
      const result = await getHistoryAPI()
      console.log(result);
      if(result.status == 200){
        setAllResume(result.data)
      }
    }
    catch(err){
      console.log(err);
      
    }
  }

  const deleteFromHistory = async (id) => {
    try{
      await removeHistoryAPI(id)
      getAllResumes();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className='pb-5'>
      <h1 className='text-ce nter my-5'>Downloaded Resume History</h1>
      <Link to={'/user-form'} className='mx-5 float-end' style={{ marginTop: '-80px' }}>Back to Builder</Link>
      <Stack direction={'row'} spacing={2} sx={{ flexWrap: 'wrap' }}>
        {
          allResumes?.length>0 ?
          allResumes?.map(item=>(
            <div key={item?.id} className='shadow p-5 text-center'>
          <div className='d-flex mb-2 align-items-center'>
            <h5>{item?.timestamp}</h5>
            <button className='btn text-danger fs-4' onClick={()=>deleteFromHistory(item?.id)}><MdDelete /></button>
          </div>

          <img width={'250px'} className='border' src={item?.imageURL} alt="Resume template" />
        </div>))
        :
        <p>No resumes to display</p>
          
        
        }
        
        {/* <div className='shadow p-5 text-center'>
        <div className='d-flex mb-2 align-items-center'>
            <h5>Reaview at : Date & time</h5>
            <button className='btn text-danger fs-4'><MdDelete /></button>
         </div>

          <img width={'250px'} className='border' src="https://resumekraft.com/wp-content/uploads/2021/09/Senior-Full-Stack-Developer-CV-Template.jpg" alt="Resume template" />
       </div> */}
       
      </Stack>
    </div>
  )
}

export default History