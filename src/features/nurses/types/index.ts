import { BaseEntity } from '@/types';

export type Nurse = {
  key: string;
  isPregnant: boolean;
  role: number; // 0 : 주니어, 1 : 미들, 2 : 시니어
  dutyKeep: null | number; // 0 : null, 1: day , 2 : night
  preceptorId: string | null;
  offs: string[];
  rests: string[];
  workingYear: number;
} & BaseEntity;

export type NurseFormType = {
  key: string;
  isPregnant: boolean;
  role: number; // 0 : 주니어, 1 : 미들, 2 : 시니어
  dutyKeep: null | number; // 0 : null, 1: day , 2 : night
  preceptorId: string | null;
  off: string;
  rest: string;
  workingYear: number;
} & BaseEntity;

export default Nurse;
