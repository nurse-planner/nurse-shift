import commonAxios from "@/lib/axios";

import { UserResponse } from "../types";

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  const res = await commonAxios.post("/auth/login", data);
  return {
    user: res.data.user,
    jwt: res.data.jwt,
  };
};
