import { Outlet } from 'react-router-dom';

import './Page.css';

export default function PageDynamicRoutes() {
  return (
    <div className="main-wrapper">
      <Outlet />
    </div>
  );
}
