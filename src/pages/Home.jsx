import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Landing Section */}
      <div style={{height:'90vh', backgroundImage:'url(https://img.freepik.com/free-vector/people-asking-questions-businesspeople_74855-6602.jpg?semt=ais_hybrid&w=740&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat : 'no-repeat', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 rounded shadow p-5" style={{backgroundColor:'rgba(255,255,255,0.6'}}>
                <h3>Designed to get hired. Your skills, your story, your next job - all in one.</h3>
                <Link to={'/resume'} className='btn text-light' style={{backgroundColor: 'purple'}}>Build your Resume</Link>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* {Tools section} */}
      <div className="container mb-5 pb-5">
        <h2 className='text-center my-5'>Tools</h2>
        <div className="row align-items-center">
          <div className="col-md-6 p-5">
            <h5>Resume</h5>
            <p>Create unlimited free resumes and easily edit them later</p>
            <h5>Cover Letters</h5>
            <p>Easily write professional cover letters</p>
            <h5>Jobs</h5>
            <p>Automatically receive new and relevant job posting</p>
            <h5>Applications</h5>
            <p>Effortlessly manage and track your job applications in an organized manner</p>
          </div>
          <div className="col-md-6">
            <img className='w-75' src="https://static.vecteezy.com/system/resources/previews/009/454/029/non_2x/business-cv-resume-template-design-vector.jpg" alt="resume template" />
          </div>
        </div>
      </div>
      {/* {pics} */}
      <div style={{height:'90vh', backgroundImage:'url(https://images.unsplash.com/photo-1698006150156-3779d5c2306c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=857)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat : 'no-repeat', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'></div>

      {/* {Testimony section} */}
      <div className="container">
        <h2 className='text-center my-5'>Testimony</h2>
        <div className="row align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-5 pb-5">
            <h5 className='mb-5'>Trusted by worldwide professionals</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
              <div className="col-md-3">
                <img className='w-75' src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg" alt="resume template" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home