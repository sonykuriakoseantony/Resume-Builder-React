import React from 'react'
import Preview from '../components/Preview'
import { FaBackward, FaFileDownload } from 'react-icons/fa'
import { MdEditDocument } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI'
import EditResume from '../components/EditResume'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ViewResume() {
    React.useEffect(() => {
        getResumeData();
    }, [])

    const [resumeData, setResumeData] = React.useState(null);
    const { id } = useParams();
    const getResumeData = async () => {

        const resumeId = id;
        console.log(resumeId);

        if (!resumeId) {
            alert("No Resume Id is available!")
        }
        else {
            try {
                const response = await getResumeAPI(resumeId)
                if (response.status >= 200 && response.status < 300) {
                    setResumeData(response.data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

    }

    const downloadPDF = async () => {
        const input = document.getElementById("preview");
        console.log(input);

        if (!input) {
            console.error("Resume element not found!");
            return;
        }
        const doc = new jsPDF();

        const canvas = await html2canvas(input, { scale: 2 })
        const imageURL = canvas.toDataURL('image/png')
        const imageWidth = doc.internal.pageSize.getWidth();
        const imageHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imageURL, 'PNG', 0, 0, imageWidth, imageHeight)
        doc.save(`${resumeData?.fullName}-resume.pdf`)
        const localDate = new Date()
        const timestamp = `${localDate.toLocaleDateString()}, ${localDate.toLocaleTimeString()}`

        try {
            await addHistoryAPI({ timestamp, imageURL })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-md-1"></div>
                <div className="col-md-10 text-center">
                    <h1>View Resume</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='btn text-primary fs-2 me-2'>
                            <FaFileDownload onClick={downloadPDF} />
                        </button>
                        <EditResume resumeData={resumeData} setResumeData={setResumeData}/>
                        <Link className='btn text-danger fs-2 me-2' to={'/history'}>
                        <IoReload />
                        </Link>
                        <Link to={'/resume'} className='btn text-dark fs-2 me-2'>
                            <FaBackward />
                        </Link>
                    </div>
                    <div id='preview'>
                        <Preview resumeData={resumeData} />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>


        </div>
    )
}

export default ViewResume