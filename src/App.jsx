import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './navigation/Layout.jsx';
import PageProps from './pages/PageProps.jsx';
import PageUseState from './pages/PageUseState.jsx';
import PageMethodMap from './pages/PageMethodMap.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PageProps /> },
      { path: 'use-state', element: <PageUseState /> },
      { path: 'map', element: <PageMethodMap /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
