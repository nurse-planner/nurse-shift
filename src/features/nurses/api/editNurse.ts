import commonAxios from "@/lib/axios";
import { Nurse } from "../types";

export default async function editNurse(nurse: Nurse) {
  try {
    await commonAxios.patch("/nurse", nurse);
  } catch (error) {
    console.error(error);
    return [];
  }
}
