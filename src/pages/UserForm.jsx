import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
  return (
    <>
      {/* {Form steps} */}
      <div>
        
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <UserInputs />
          </div>
          <div className="col-md-6">
            <Preview />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm