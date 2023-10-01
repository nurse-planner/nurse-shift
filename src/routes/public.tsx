import { lazyImport } from "@/utils/lazyImport";

const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

export const publicRoutes = [
  {
    path: "/nurse-shift/auth/*",
    element: <AuthRoutes />,
  },
];
