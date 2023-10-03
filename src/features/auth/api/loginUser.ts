import commonAxios from "@/lib/axios";

import { UserResponse } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return commonAxios.post("/auth/login", data);
};
