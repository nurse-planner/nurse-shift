import commonAxios from '@/lib/axios';
export default async function addShift() {
  try {
    await commonAxios.post('/schedule', {
      startDate: '2023-10-05',
      title: 'titleeeee',
      sleepingOff: 8,
      maxNight: 15,
      minNurse: 3,
      maxNurse: 5,
      timeout: 3,
      patterns: ['NNN'], // 없으면 []
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
