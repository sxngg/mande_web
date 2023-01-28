import httpClient from "@/environment/environment";


export const getWorker = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/worker/all');
    return cli.data;
}

export const getWorkerByEmailAndPhone = async(worker) => {
    const cli = await httpClient.get(`http://localhost:3000/mande/worker/byKey/${worker.email}/${worker.phone_number}`);
    return cli.data;
}

export const updateIsActiveWorker = async(worker) =>{
    const {data} = await httpClient.put(`http://localhost:3000/mande/worker/${worker.email}/${worker.email}/true`);
    return data;
}

export const registerWorker = async(worker)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/worker/add',worker);
    return data;
}

export const bussyWorker = async(worker)=>{
    const {data} = await httpClient.put('http://localhost:3000/mande/worker/delete',worker);
    return data;
}