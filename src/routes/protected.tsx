import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { MainLayout } from "@/components/Layout";
import { Spin } from "antd";
import { lazyImport } from "@/utils/lazyImport";

const { Nurses } = lazyImport(() => import("@/features/nurses"), "Nurses");
const { NotFound } = lazyImport(() => import("@/features/misc"), "NotFound");

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spin spinning={true} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/nurse-shift/dashboard/",
    element: <App />,
    children: [
      { path: "nurse/*", element: <Nurses /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
