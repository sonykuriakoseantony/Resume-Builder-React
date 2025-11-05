import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


// add resume : call in UserInputs when Finish button clicked
export const addResumeAPI = async (resumeData)=>{
    return await commonAPI("POST", `${serverURL}/resumes`,resumeData)
}

// view resume :
export const getResumeAPI = async (id) => {
    return await commonAPI("GET", `${serverURL}/resumes/${id}`)
}