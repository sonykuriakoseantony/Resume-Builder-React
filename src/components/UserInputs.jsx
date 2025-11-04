import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const steps = ['Basic Information', 'Contact Details', 'Educational details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function UserInputs({resumeData,setResumeData}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const skillSuggestionArray = ['HTML5', 'HTML', 'CSS3', 'JavaScript', 'React', 'Figma', 'Selenium', 'Communication', 'Leadership', 'Node.js', 'MongoDB']

  const skillRef = React.useRef();

  console.log(resumeData);
  
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill = skill =>{
    if(resumeData.skills?.map(data=>data.toLowerCase()).includes(skill.toLowerCase())){
      alert("Given Skill is already present!")
    }
    else{
      setResumeData({...resumeData,skills:[...resumeData.skills,skill]})
    }
    skillRef.current.value = ""
  }

  const removeSkill = skill => {
    if(resumeData.skills?.includes(skill)){

      setResumeData({...resumeData,skills:resumeData.skills?.filter(item=>item!=skill)})
    }
    else{
      
      alert("Given Skill is not present!")
    }
  }

  const renderStepContent = stepCount => {
    switch(stepCount){
      case 0 : return (
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" className='mb-4'/>
            <TextField value={resumeData.jobTitle} onChange={e=>setResumeData({...resumeData,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" className='mb-4'/>
            <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" className='mb-4'/>
          </div>
        </div>
      )
      case 1 : return (
        <div>
          <h3>Contact Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" className='mb-4'/>
            <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-phone" label="Phone Number" variant="standard" className='mb-4'/>
            <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-github" label="Github Profile Link" variant="standard" className='mb-4'/>
            <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" className='mb-4'/>
            <TextField value={resumeData.portfolio} onChange={e=>setResumeData({...resumeData,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" className='mb-4'/>
          </div>
        </div>
      )
      case 2 : return (
        <div>
          <h3>Educational Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.course} onChange={e=>setResumeData({...resumeData,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" className='mb-4'/>
            <TextField value={resumeData.college} onChange={e=>setResumeData({...resumeData,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" className='mb-4'/>
            <TextField value={resumeData.university} onChange={e=>setResumeData({...resumeData,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" className='mb-4'/>
            <TextField value={resumeData.passoutYear} onChange={e=>setResumeData({...resumeData,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" className='mb-4'/>
          </div>
        </div>
      )
      case 3 : return (
        <div>
          <h3>Professional Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.jobType} onChange={e=>setResumeData({...resumeData,jobType:e.target.value})} id="standard-basic-jType" label="Job or Internship" variant="standard" className='mb-4'/>
            <TextField value={resumeData.company} onChange={e=>setResumeData({...resumeData,company:e.target.value})} id="standard-basic-company-name" label="Company Name" variant="standard" className='mb-4'/>
            <TextField value={resumeData.clocation} onChange={e=>setResumeData({...resumeData,clocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" className='mb-4'/>
            <TextField value={resumeData.duration} onChange={e=>setResumeData({...resumeData,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" className='mb-4'/>
          </div>
        </div>
      )
      case 4 : return (
        <div>
          <h3>Skills & Certifications</h3>
          <div className="d-flex justify-content-between align-items-center p-3">
            <input ref={skillRef} type="text" placeholder='Enter your skill' className='form-control'/>
            <Button variant='text' onClick={()=>addSkill(skillRef.current.value)}>ADD</Button>
          </div>
          <h5>Suggestions : </h5>
          <div className='d-felx flex-wrap justify-content-start p-3'>
            {
              skillSuggestionArray.map(item => (
                <Button onClick={()=>addSkill(item)} key={item} id={item} variant='outlined' className='m-1'>{item}</Button>
              ))
            }
          </div>
          <h5>Added Skills : </h5>
          <div className='d-felx flex-wrap justify-content-start p-3'>
            {/* {Duplicated according to input skills} */}
            
            {
              resumeData.skills?.map(skill => (
                <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' className='m-1'>{skill} <FaXmark className='ms-1'/></Button>
              ))
            }
          </div>
        </div>
      )
      case 5 : return (
        <div>
          <h3>Summary</h3>
          <div className='row p-3'>
            <TextField onChange={e=>setResumeData({...resumeData, summary:e.target.value})} id="standard-basic-summary" label="Write a short summary about yourself" multiline variant="standard" className='mb-4' defaultValue={'I’m a results-driven Web Developer specializing in creating modern, accessible, and responsive websites that combine clean design with robust functionality. With expertise in HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, jQuery, and React.js, I transform creative ideas into interactive, high-performing web experiences.'}/>
          </div>
        </div>
      )
      default : return null
    }
  }

  return (
    <Box sx={{ width: '100%' }} className="py-5">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished building your Resume
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* {Detailed view} */}
          <Box>
            {renderStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs