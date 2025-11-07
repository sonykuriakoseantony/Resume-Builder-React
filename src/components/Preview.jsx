import { Box, Button, Divider, Paper, Stack } from '@mui/material'
import React from 'react'

function Preview({resumeData}) {
  return (
    <>
      <Box component="section">
        <Paper elevation={3} className='m-5 p-5 text-center'>
          <h2>{resumeData?.fullName}</h2>
          <h5>{resumeData?.jobTitle}</h5>
          <p><span>{resumeData?.location}</span> | <span>{resumeData?.email}</span> | <span>{resumeData?.phone}</span></p>
          <div>
            <a href={resumeData?.github} target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>GITHUB</a><span> | </span>
            <a href={resumeData?.linkedin} target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>LINKEDIN</a><span> | </span>
            <a href={resumeData?.portfolio} target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>PORTFOLIO</a>
          </div>
          <Divider sx={{fontSize:'25px', marginTop : '20px', marginBottom : '10px'}}>Summary</Divider>
          <p style={{textAlign:'center'}}>{resumeData?.summary}</p>
          <Divider sx={{fontSize:'25px', marginTop : '20px', marginBottom : '10px'}}>Education</Divider>
          <h5>{resumeData?.course}</h5>
          <p><span>{resumeData?.college}</span> | <span>{resumeData?.university}</span> | <span>{resumeData?.passoutYear}</span></p>
          <Divider sx={{fontSize:'25px', marginTop : '20px', marginBottom : '10px'}}>Work Experience</Divider>
          <h5>{resumeData?.jobType}</h5>
          <p><span>{resumeData?.company}</span> | <span>{resumeData?.clocation}</span> | <span>{resumeData?.duration}</span></p>
          <Divider sx={{fontSize:'25px', marginTop : '20px', marginBottom : '10px'}}>Skills</Divider>
          <Stack direction={'row'} spacing={2} sx={{ flexWrap: 'wrap' }} justifyContent={'space-evenly'}>
              {
                resumeData?.skills?.map((skill, index)=>(
                  <Button key={index}  variant='contained' className='m-1'>{skill}</Button>
                ))
              }
              
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Preview