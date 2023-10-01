import commonAxios from "@/lib/axios";

import { AuthUser } from "../types";

export const getUser = (): Promise<AuthUser> => {
  return commonAxios.get("/auth/me");
};
