import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './navigation/Layout.jsx';
import PageProps from './pages/PageProps.jsx';
import PageUseState from './pages/PageUseState.jsx';
import PageMethodMap from './pages/PageMethodMap.jsx';
import PageDynamicRoutes from './pages/PageDynamicRoutes.jsx';
import UserList from './components/examples/dynamic-routes/UserList.jsx';
import UserFile from './components/examples/dynamic-routes/UserFile.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import PageError from './pages/PageError.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <PageProps /> },
      { path: 'use-state', element: <PageUseState /> },
      { path: 'map', element: <PageMethodMap /> },
      {
        path: 'dynamic-routes',
        element: <PageDynamicRoutes />,
        children: [
          { index: true, element: <UserList /> },
          { path: 'user/:id', element: <UserFile /> },
          { path: '*', element: <PageNotFound /> },
        ],
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
