import httpClient from "@/environment/environment";


export const getUser = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/user/all');
    return cli.data;
}

export const registerUser = async(user)=>{
    const {data} = await httpClient.post('http://localhost:3000/mande/user/add',{user});
    console.log(data);
    return data;
    
}