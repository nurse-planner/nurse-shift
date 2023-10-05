import { Dayjs } from 'dayjs';

export type Schedule = {
  startDate: string;
  endDate: string;
  created: boolean;
  nurseCount: number;
  shiftList?: Shift[];
};

export type EditScheduleFormType = {
  id: string;
  title: string;
  content: string;
  range: [Dayjs, Dayjs];
};

export type Shift = {
  id: string;
  name: string;
  duties: string[];
};

export type AddScheduleFormType = {
  title: string;
  content: string;
  startDate: Dayjs;
  sleepingOff: null | number;
  maxNurse: number;
  minNurse: number;
  timeOut: null | number;
  noe: boolean;
  nod: boolean;
  non: boolean;
  eod: boolean;
  ddddd: boolean;
  dddde: boolean;
};

export type AddScheduleBodyType = {
  title: string;
  content: string;
  startDate: string;
  sleepingOff: null | number;
  maxNurse: number;
  minNurse: number;
  timeOut: null | number;
  patterns: string[];
};
