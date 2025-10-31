import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      
      <div className='container-fluid text-light' style={{backgroundColor : 'rgb(152 85 118)'}}>
        <div className="row overflow-hidden p-0">
          <div className="col-md-6 overflow-hidden p-0" style={{alignSelf : 'stretch'}}>
            <img width={'100%'} className=' overflow-hidden' src="https://img.freepik.com/free-vector/flat-404-error-template_23-2147740353.jpg" alt="" />
          </div>
          <div className="col-md-6" style={{alignSelf : 'stretch'}}>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{width : '100%', height : '100%'}}>
              <h1 style={{fontSize : '70px', textAlign : 'center'}}>Uh oh!</h1>
        <p>Visit our Home page to start over</p>
        <Link to={'/'} style={{color : 'white'}}>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error