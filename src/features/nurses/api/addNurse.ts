import commonAxios from '@/lib/axios';
import { Nurse } from '../types';

export default async function addNurse(nurse: Nurse) {
  await commonAxios.post('/nurse', nurse);
}
