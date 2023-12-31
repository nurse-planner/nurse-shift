import commonAxios from '@/lib/axios';
import { AddScheduleBodyType } from '..';
export default async function addSchedule(data: AddScheduleBodyType) {
  try {
    await commonAxios.post('/schedule', data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
