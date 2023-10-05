import commonAxios from '@/lib/axios';
export default async function fetchScheduleList() {
  try {
    commonAxios.get('/schedule/all');
  } catch (error) {
    console.error(error);
    return [];
  }
}
