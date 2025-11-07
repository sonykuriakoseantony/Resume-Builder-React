import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


// add resume : call in UserInputs when Finish button clicked
export const addResumeAPI = async (resumeData)=>{
    return await commonAPI("POST", `${serverURL}/resumes`,resumeData)
}

// view resume :
export const getResumeAPI = async (id) => {
    return await commonAPI("GET", `${serverURL}/resumes/${id}`, {})
}

// Edit Resume: update API call when edit button clicked
export const editResumeAPI = async (id, resumeData) => {
    return await commonAPI("PUT", `${serverURL}/resumes/${id}`, resumeData)
}

// add History:
export const addHistoryAPI = async (resumeHistory)=>{
    return await commonAPI("POST", `${serverURL}/history`,resumeHistory)
}

// get History
export const getHistoryAPI = async () => {
    return await commonAPI("GET", `${serverURL}/history`, {})
}

// remove History : Delete api call when delete button clicked
export const removeHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/history/${id}`, {})
}
