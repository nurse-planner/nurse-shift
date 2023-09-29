import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MainLayout } from '@/layout';
import { Spin } from 'antd';
import { lazyImport } from '@/utils/lazyImport';

const { Nurses } = lazyImport(() => import('@/features/nurses'), 'Nurses');

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className='h-full w-full flex items-center justify-center'>
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
    path: '/dashboard',
    element: <App />,
    children: [
      { path: 'nurse/*', element: <Nurses /> },
      { path: '*', element: <Navigate to='nurse' /> },
    ],
  },
];
