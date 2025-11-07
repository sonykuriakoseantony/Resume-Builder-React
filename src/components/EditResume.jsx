import React, { useRef, useState } from 'react'
import { MdEditDocument } from 'react-icons/md'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import { editResumeAPI } from '../services/allAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function EditResume({ resumeData, setResumeData }) {

    console.log(resumeData);

    const skillRef = useRef();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = skill => {
        if (resumeData.skills?.map(data => data.toLowerCase()).includes(skill.toLowerCase())) {
            alert("Given Skill is already present!")
        }
        else {
            setResumeData({ ...resumeData, skills: [...resumeData.skills, skill] })
        }
        skillRef.current.value = ""
    }

    const removeSkill = skill => {
        if (resumeData.skills?.includes(skill)) {
            setResumeData({ ...resumeData, skills: resumeData.skills?.filter(item => item != skill) })
        }
        else {
            alert("Given Skill is not present!")
        }
    }

    const updateResume = async () => {
        const { id, fullName, jobTitle, location } = resumeData
        if (!fullName || !jobTitle || !location) {
            alert("Fill the information completely!")
        }
        else {
            try {
                console.log("api call to save resume details");
                const result = await editResumeAPI(id, resumeData)
                console.log(result);
                if (result.status == 200) {
                    alert("Resume updated")
                    handleClose()
                }
            }
            catch (err) {
                console.log(err);

            }
        }
    }

    return (
        <div>
            <button className='btn text-warning fs-2 me-2' onClick={handleOpen}>
                <MdEditDocument />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal Details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className="p-3 row">
                                <TextField value={resumeData?.fullName} onChange={e => setResumeData({ ...resumeData, fullName: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.jobTitle} onChange={e => setResumeData({ ...resumeData, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.location} onChange={e => setResumeData({ ...resumeData, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" className='mb-4' />
                            </div>
                        </div>
                        {/* Contact Details */}
                        <div>
                            <h3>Contact Details</h3>
                            <div className="p-3 row">
                                <TextField value={resumeData?.email} onChange={e => setResumeData({ ...resumeData, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.phone} onChange={e => setResumeData({ ...resumeData, phone: e.target.value })} id="standard-basic-phone" label="Phone Number" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.github} onChange={e => setResumeData({ ...resumeData, github: e.target.value })} id="standard-basic-github" label="Github Profile Link" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.linkedin} onChange={e => setResumeData({ ...resumeData, linkedin: e.target.value })} id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.portfolio} onChange={e => setResumeData({ ...resumeData, portfolio: e.target.value })} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" className='mb-4' />
                            </div>
                        </div>
                        {/* Educational details */}
                        <div>
                            <h3>Educational Details</h3>
                            <div className="p-3 row">
                                <TextField value={resumeData?.course} onChange={e => setResumeData({ ...resumeData, course: e.target.value })} id="standard-basic-course" label="Course Name" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.college} onChange={e => setResumeData({ ...resumeData, college: e.target.value })} id="standard-basic-college" label="College Name" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.university} onChange={e => setResumeData({ ...resumeData, university: e.target.value })} id="standard-basic-university" label="University" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.passoutYear} onChange={e => setResumeData({ ...resumeData, passoutYear: e.target.value })} id="standard-basic-passout" label="Year of Passout" variant="standard" className='mb-4' />
                            </div>
                        </div>
                        {/* Professional details */}
                        <div>
                            <h3>Professional Details</h3>
                            <div className="p-3 row">
                                <TextField value={resumeData?.jobType} onChange={e => setResumeData({ ...resumeData, jobType: e.target.value })} id="standard-basic-jType" label="Job or Internship" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.company} onChange={e => setResumeData({ ...resumeData, company: e.target.value })} id="standard-basic-company-name" label="Company Name" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.clocation} onChange={e => setResumeData({ ...resumeData, clocation: e.target.value })} id="standard-basic-clocation" label="Company Location" variant="standard" className='mb-4' />
                                <TextField value={resumeData?.duration} onChange={e => setResumeData({ ...resumeData, duration: e.target.value })} id="standard-basic-duration" label="Duration" variant="standard" className='mb-4' />
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3>Skills & Certifications</h3>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <input ref={skillRef} type="text" placeholder='Enter your skill' className='form-control' />
                                <Button variant='text' onClick={() => addSkill(skillRef.current.value)}>ADD</Button>
                            </div>
                            <h5>Added Skills : </h5>
                            <div className='d-felx flex-wrap justify-content-start p-3'>
                                {/* {Duplicated according to input skills} */}

                                {
                                    resumeData?.skills?.map(skill => (
                                        <Button onClick={() => removeSkill(skill)} key={skill} variant='contained' className='m-1'>{skill} <FaXmark className='ms-1' /></Button>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className='row p-3'>
                                <TextField onChange={e => setResumeData({ ...resumeData, summary: e.target.value })} id="standard-basic-summary" label="Write a short summary about yourself" multiline variant="standard" className='mb-4' value={resumeData?.summary} />
                            </div>
                        </div>
                        {/* Update button */}
                        <button className="btn btn-success" onClick={()=>updateResume()}>Save Changes</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default EditResume