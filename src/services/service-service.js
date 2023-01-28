import httpClient from "@/environment/environment";

export const getServiceByUser = async(user_email)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/service/${user_email}`);
    return data;
}

export const getServiceByJobOfferedId = async(job_offered_id)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/service/${job_offered_id}`);
    return data;
}

export const getAllServicePaid = async (job_offered_id)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/service/paid/${job_offered_id}`);
    return data;
}

export const updateDoneService = async(serviceId) =>{
    const {data} = await httpClient.put(`http://localhost:3000/mande/service/status/${serviceId}/true`);
    return data;
}

export const addService = async(service)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/service/add',service);
    return data;
}