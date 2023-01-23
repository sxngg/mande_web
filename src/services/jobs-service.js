import httpClient from "@/environment/environment";

export const getAllJobs = async() => {
    const cli = await httpClient.get('http://localhost:3000/mande/work/all');
    console.log(cli.data);
    return cli.data;
}
