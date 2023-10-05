import { Dayjs } from 'dayjs';

export type Schedule = {
  id: string;
  key: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  created: boolean;
};

export type EditScheduleFormType = {
  id: string;
  title: string;
  content: string;
  range: [Dayjs, Dayjs];
};
