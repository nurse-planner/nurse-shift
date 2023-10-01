import commonAxios from "@/lib/axios";

import { UserResponse } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return commonAxios.post("/auth/signup", data);
};
