import commonAxios from '@/lib/axios';
import { Nurse } from '../types';

export default async function addNurse(nurse: Nurse) {
  try {
    const resp = await commonAxios.post('/nurse', nurse);
    console.log(resp);
  } catch (error) {
    console.error(error);
    return [];
  }
}
