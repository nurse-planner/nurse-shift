import dayjs from 'dayjs';
import { Schedule, Shift } from '..';
import { useEffect, useState } from 'react';
import fetchShiftList from '../api/fetchShiftList';
import { useLocation } from 'react-router';

export const ShiftDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // 예를 들어, URL이 /example?page=2라면, pageValue는 "2"가 됩니다.
  const startDate = queryParams.get('startDate');

  const [shiftList, setShiftList] = useState([] as Shift[]);
  const date = dayjs(startDate, 'YYYY-MM-DD');

  const getShiftList = async () => {
    if (startDate != null) {
      const res = await fetchShiftList(startDate);
      setShiftList(res);
    }
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
            {shiftList.map((_, index) => (
              <th>{index + 1}</th>
            ))}
          </tr>
        </thead>
      </table>
    </>
  );
};
