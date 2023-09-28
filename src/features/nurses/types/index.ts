import { BaseEntity } from "@/types";

export type Nurse = {
  isPregnant: boolean;
  role: number; // 0 : 신입, 1: 서드, 2:세미차지, 3: 차지, 4: 수간호사 대리, 5: 수간호사
  preseptorId: string;
  dutyKeep: null | number; // 0 : day , 1 : evening, 2 : night, 4: off
} & BaseEntity;

export default Nurse;
