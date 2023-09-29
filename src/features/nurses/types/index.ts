import { BaseEntity } from "@/types";

export type Nurse = {
  isPregnant: boolean;
  role: number; // 0 : 주니어, 1 : 미들, 2 : 시니어
  dutyKeep: null | number; // 0 : null, 1: day , 2 : night
  preseptorId : string | null;
} & BaseEntity;

export default Nurse;
