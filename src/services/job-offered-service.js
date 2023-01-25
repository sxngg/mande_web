import httpClient from "@/environment/environment";

export const addJobOffered = async(job)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/jobs/add',job);
    console.log(data);
    return data;
    
}