import { Stack } from '@mui/material'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

function History() {
  return (
    <div className='pb-5'>
      <h1 className='text-ce nter my-5'>Downloaded Resume History</h1>
      <Link to={'/user-form'} className='mx-5 float-end' style={{ marginTop: '-80px' }}>Back to Builder</Link>
      <Stack direction={'row'} spacing={2} sx={{ flexWrap: 'wrap' }}>
        <div className='shadow p-5 text-center'>
          <div className='d-flex mb-2 align-items-center'>
            <h5>Reaview at : Date & time</h5>
            <button className='btn text-danger fs-4'><MdDelete /></button>
          </div>

          <img width={'250px'} className='border' src="https://resumekraft.com/wp-content/uploads/2021/09/Senior-Full-Stack-Developer-CV-Template.jpg" alt="Resume template" />
        </div>
        <div className='shadow p-5 text-center'>
          <div className='d-flex mb-2 align-items-center'>
            <h5>Reaview at : Date & time</h5>
            <button className='btn text-danger fs-4'><MdDelete /></button>
          </div>

          <img width={'250px'} className='border' src="https://resumekraft.com/wp-content/uploads/2021/09/Senior-Full-Stack-Developer-CV-Template.jpg" alt="Resume template" />
        </div>
      </Stack>
    </div>
  )
}

export default History