import httpClient from "@/environment/environment";


export const getWorker = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/worker/all');
    return cli.data;
}

export const registerWorker = async(worker)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/worker/add',worker);
    console.log(data);
    return data;
}

export const bussyWorker = async(worker)=>{
    const {data} = await httpClient.put('http://localhost:3000/mande/worker/delete',worker);
    console.log(data);
    return data;
}