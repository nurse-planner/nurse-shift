import dayjs from 'dayjs';
import { Shift } from '..';
import { useEffect, useState } from 'react';
import fetchShiftList from '../api/fetchShiftList';
import { useLocation } from 'react-router';
import { FloatButton } from 'antd';
import { FolderAddTwoTone } from '@ant-design/icons';
import exportExcel from '../utils/exportExcel';

export const ShiftDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const startDate = queryParams.get('startDate');

  const [shiftList, setShiftList] = useState([] as Shift[]);
  const date = dayjs(startDate, 'YYYY-MM-DD');

  const getShiftList = async () => {
    if (startDate != null) {
      const res = await fetchShiftList(startDate);
      setShiftList(res);
    }
  };
  const onClickExport = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const exportData: any[] = [];
    shiftList.forEach((shift) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const shiftData: any = {};
      shiftData.id = shift.id;
      shiftData.name = shift.name;
      for (let index = 0; index < shift.duties.length; index++) {
        shiftData[`${index + 1}`] = shift.duties[index];
      }
      exportData.push(shiftData);
    });

    exportExcel(exportData, `${date.year()}년_${date.month()}월_근무표`);
  };
  useEffect(() => {
    getShiftList();
  }, []);

  return (
    <>
      <h2>
        {date.year()}년 {date.month() + 1}월
      </h2>
      <table className='min-w-full border-collapse bg-white'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='border p-2'>id</th>
            <th className='border p-2'>name</th>
            {shiftList.length > 0 &&
            shiftList[0].duties &&
            shiftList[0]?.duties.length > 0
              ? shiftList[0].duties.map((_, index) => (
                  <th key={index} className='border p-2'>
                    {index + 1}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {shiftList.map((shift, shiftIndex) => (
            <tr key={shiftIndex} className='hover:bg-gray-100'>
              <td className='border p-2'>{shift.id}</td>
              <td className='border p-2'>{shift.name}</td>
              {shift.duties.map((duty, dutyIndex) => (
                <td key={dutyIndex} className='border p-2'>
                  {duty.length > 0 ? duty : 'O'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <FloatButton
        icon={<FolderAddTwoTone />}
        type='primary'
        onClick={onClickExport}
      />
    </>
  );
};
