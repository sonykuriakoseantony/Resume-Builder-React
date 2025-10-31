import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoDownload } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <>
      <div className='my-5' >
        <h1 className='text-center mb-5'>Create a Job-Winning Resume in minutes</h1>
        <div className="container">
          <div className="row justify-content-between">
              <p className=''></p>
            <div className="col-md-5 rounded shadow p-5 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.6' }}>
              <FaRegFileAlt size={30} color='blue'/>
              <h4 className='my-2'>Add your Information</h4>
              <p>Add pre-written examples to each section</p>
              <h5>Step 1</h5>
            </div>
            <div className="col-md-5 rounded shadow p-5 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.6' }}>
              <IoDownload size={30} color='red'/>
              <h4 className='my-2'>Download your Resume</h4>
              <p>Download and start applying</p>
              <h5>Step 2</h5>
            </div>
          </div>
          <div className="row justify-conent-center mt-5">
            <Link to={'/user-form'} className='btn text-light mx-auto text-uppercase' style={{ backgroundColor: 'purple', width : '200px' }}>Let's Start</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume