import httpClient from "@/environment/environment";

export const getWorkNameByWorkId = async(work_id)=>{
    const {data} = await httpClient.get(`http://localhost:3000/mande/work/name/${work_id}`);
    return data;
}