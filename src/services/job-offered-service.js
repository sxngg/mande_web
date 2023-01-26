import httpClient from "@/environment/environment";

export const getJobOfferedByWorkId = async(work_id)=>{
    console.log(work_id);
    const {data} = await httpClient.get(`http://localhost:3000/mande/jobs/${work_id}`);
    console.log(data);
    return data;
}

export const addJobOffered = async(job)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/jobs/add',job);
    console.log(data);
    return data;
    
}