import { Box, Button, Divider, Paper, Stack } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <>
      <Box component="section">
        <Paper elevation={3} className='m-5 p-5 text-center'>
          <h2>Name of Applicant</h2>
          <h5>Job Title</h5>
          <p><span>location</span> | <span>email</span> | <span>phone</span></p>
          <div>
            <a href="" target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>GITHUB</a><span> | </span>
            <a href="" target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>LINKEDIN</a><span> | </span>
            <a href="" target='_blank' className='me-1 fw-semibold' style={{fontSize : '14px'}}>PORTFOLIO</a>
          </div>
          <Divider sx={{fontSize:'25px'}}>Summary</Divider>
          <p style={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat molestias eum dolorem dicta. Ipsam maiores pariatur totam qui porro temporibus soluta magni corporis officia amet, sequi adipisci tempora ratione.</p>
          <Divider sx={{fontSize:'25px'}}>Education</Divider>
          <h5>Course</h5>
          <p><span>college</span> | <span>university</span> | <span>passout</span></p>
          <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
          <h5>jType</h5>
          <p><span>company</span> | <span>clocation</span> | <span>duration</span></p>
          <Divider sx={{fontSize:'25px'}}>Skills</Divider>
          <Stack direction={'row'} spacing={2} sx={{ flexWrap: 'wrap' }} justifyContent={'space-evenly'}>
              <Button id='btnName' variant='contained' className='m-1'>React</Button>
              <Button id='btnName' variant='contained' className='m-1'>React</Button>
              <Button id='btnName' variant='contained' className='m-1'>React</Button>
              <Button id='btnName' variant='contained' className='m-1'>React</Button>
              <Button id='btnName' variant='contained' className='m-1'>React</Button>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Preview