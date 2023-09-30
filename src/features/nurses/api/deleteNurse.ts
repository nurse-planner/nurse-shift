import commonAxios from '@/lib/axios';

export default async function deleteNurse(nurseId: string) {
  try {
    await commonAxios.delete('/nurse', {
      data: {
        id: nurseId,
      },
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
