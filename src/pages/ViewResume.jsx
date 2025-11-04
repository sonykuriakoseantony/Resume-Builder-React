import React from 'react'
import Preview from '../components/Preview'
import { FaBackward, FaFileDownload } from 'react-icons/fa'
import { MdEditDocument } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function ViewResume() {
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
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
                <Preview />
            </div>
            <div className="col-md-2"></div>
        </div>
        
        
    </div>
  )
}

export default ViewResume