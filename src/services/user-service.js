import httpClient from "@/environment/environment";


export const getUser = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/user/all');
    return cli.data;
}

export const registerUser = async(userA)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/user/add',userA);
    console.log(data);
    return data;
    
}