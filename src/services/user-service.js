import httpClient from "@/environment/environment";


const userService = {}

userService.getUser = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/user/all');
    return cli.data;
}

export default userService