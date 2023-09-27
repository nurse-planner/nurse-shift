import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { MainLayout } from "@/layout";
import { Spin } from "antd";

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
    path: "/app",
    element: <App />,
    children: [
      { path: "nurse", element: <div>간호사</div> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
