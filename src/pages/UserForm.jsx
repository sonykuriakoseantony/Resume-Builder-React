import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
  const [resumeData, setResumeData] = React.useState({
    fullName: '',
    jobTitle: '',
    location: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    portfolio: '',
    course: '',
    college: '',
    university:'',
    passoutYear: '',
    jobType: '',
    company: '',
    clocation: '',
    duration: '',
    skills: [],
    summary: ''
  })

  const handleResumeDetails = () =>{

  }

  return (
    <>
      {/* {Form steps} */}
      <div>
        
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <UserInputs resumeData={resumeData} setResumeData={setResumeData}/>
          </div>
          <div className="col-md-6">
            {
              resumeData.fullName &&
              <Preview resumeData={resumeData}/>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm