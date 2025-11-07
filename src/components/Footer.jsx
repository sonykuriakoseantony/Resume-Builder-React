import { FaFacebook, FaHeart } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { FaSquareInstagram } from 'react-icons/fa6'
import { MdAttachEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

function Footer() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5 text-white font-bold" style={{backgroundColor : 'purple'}}>
      <h2>Contact Us</h2>
      <a className='text-white text-decoration-none' href="mailto:resumebuilder@mail.com"><MdAttachEmail className='me-1'/>resumebuilder@mail.com</a>
      <a tel="902145873"><FaPhone className='me-1'/>902145873</a>
      <h3 className='mt-4'>Connect with Us</h3>
      <div className="d-flex gap-3 mb-4">
        <RiWhatsappFill size={25}/>
        <FaFacebook size={25}/>
        <FaSquareInstagram size={25}/>
      </div>
      <p className='mb-0'>Designed & built with <FaHeart color='red'/> using React</p>
    </div>
  )
}

export default Footer