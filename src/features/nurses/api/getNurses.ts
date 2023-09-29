
import  commonAxios from '@/lib/axios';


export default async function getNurses() {
    try {
        const resp = await commonAxios.get("/nurse");
        console.log(resp)
    } catch (error) {
        console.error(error);
    }
    
}