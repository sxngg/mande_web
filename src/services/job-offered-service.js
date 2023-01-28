import httpClient from "@/environment/environment";

export const getJobOfferedByWorkId = async(work_id)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/jobs/${work_id}`);
    return data;
}


export const getJobOfferedByWorker = async(workerBack)=>{
    //console.log(workerBack);
    const {data} = await httpClient.get(`http://localhost:3000/mande/jobs/worker/${workerBack.email}/${workerBack.phone_number}`);
    return data;    
}

export const addJobOffered = async(job)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/jobs/add',job);
    return data;

}

export const updateSignedJobOffered = async(jobId)=>{
    const {data} = await httpClient.put(`http://localhost:3000/mande/jobs/signed/${jobId}/false`);
    return data;
}



export const bussyJobOffered = async(job_offered_id)=>{
    const {data} = await httpClient.put(`http://localhost:3000/mande/jobs/delete/${job_offered_id}`);
    return data;
}