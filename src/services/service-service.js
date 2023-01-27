import httpClient from "@/environment/environment";

export const getServiceByUser = async(user_email)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/service/${user_email}`);
    console.log(data);
    return data;
}

export const getServiceByJobOfferedId = async(job_offered_id)=>{
    console.log("SERVICE SERVICE",job_offered_id);
    const {data} = await httpClient.get(`http://localhost:3000/mande/service/${job_offered_id}`);
    console.log(data);
    return data;
}

export const addService = async(service)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/service/add',service);
    console.log(data);
    return data;
}