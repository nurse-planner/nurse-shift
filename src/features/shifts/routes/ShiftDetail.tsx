import dayjs from 'dayjs';
import { Schedule } from '..';
import { useEffect } from 'react';
import fetchShiftList from '../api/fetchShiftList';

export const ShiftDetail = () => {
  const schedule: Schedule = {
    id: '1',
    key: '1',
    startDate: '2023-10-01',
    endDate: '2023-10-31',
    created: true,
    nurseCount: 2,
  };
  const date = dayjs(schedule.startDate, 'YYYY-MM-DD');

  const getShiftList = async () => {
    const res = await fetchShiftList(schedule.startDate);
    console.log(res);
  };
  useEffect(() => {
    getShiftList();
  }, []);
  return (
    <>
      <h2>
        {date.year()}년 {date.month() + 1}월
      </h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            {}
          </tr>
        </thead>
      </table>
    </>
  );
};
