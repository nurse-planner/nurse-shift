import commonAxios from '@/lib/axios';
import { Nurse } from '../types';

export default async function getNurses(): Promise<Nurse[]> {
  try {
    const resp = await commonAxios.get('/nurse');
    const list: Nurse[] = resp.data;
    if (list.length > 0) {
      list.forEach((nurse) => {
        nurse.key = nurse.id;
      });
      return list;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
