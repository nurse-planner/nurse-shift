import { Nurse, NurseFormType } from '..';

export default function checkValidNurse(
  nurseList: Nurse[],
  nurse: NurseFormType,
  isNew: boolean
) {
  const res = {
    success: false,
    msg: '',
  };
  const hasPreceptor: boolean = nurse.preceptorId != null;
  if (nurse.isPregnant && nurse.dutyKeep == 2) {
    res.msg = '임신한 간호사는 Night dutyKeep을 가질 수 없습니다.';
    return res;
  }
  for (const n of nurseList) {
    if (n.id == nurse.id && isNew) {
      res.msg = `다른 간호사(${n.name})와 id가 중복됩니다.`;
      return res;
    }
    if (
      hasPreceptor &&
      nurse.preceptorId == n.id &&
      n.dutyKeep != 0 &&
      nurse.dutyKeep != 0 &&
      n.dutyKeep != nurse.dutyKeep
    ) {
      res.msg = `프리셉터와 프리셉티는 서로 다른 duty keep을 가질 수 없습니다.`;
      return res;
    }
  }
  res.success = true;
  return res;
}
