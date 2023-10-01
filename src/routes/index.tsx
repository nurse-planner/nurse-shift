import { useRoutes } from "react-router-dom";

import { Landing } from "@/features/misc";
// import { useAuth } from "@/lib/auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import storage from "@/utils/storage";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/nurse-shift", element: <Landing /> }];

  const routes = storage.getToken() ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
