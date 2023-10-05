import commonAxios from '@/lib/axios';
export default async function fetchShiftList(startDate: string) {
  try {
    commonAxios.get('/schedule', {
      params: {
        date: startDate,
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
