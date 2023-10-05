import commonAxios from '@/lib/axios';
export default async function fetchScheduleList() {
  try {
    const res = await commonAxios.get('/schedule/all');
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
