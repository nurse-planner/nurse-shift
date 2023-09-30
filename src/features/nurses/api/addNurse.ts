import commonAxios from '@/lib/axios';
import { Nurse } from '../types';

export default async function addNurse(nurse: Nurse) {
  try {
    await commonAxios.post('/nurse', nurse);
  } catch (error) {
    console.error(error);
    return [];
  }
}
