import commonAxios from '@/lib/axios';
export default async function fetchShiftList(startDate: string) {
  try {
    const res = await commonAxios.get('/schedule', {
      params: {
        date: startDate,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
