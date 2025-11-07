import NavigationContainer from './NavigationContainer.jsx';
import { Outlet } from 'react-router-dom';

import './Layout.css';

const Layout = () => {
  return (
    <div className="page-wrapper">
      <NavigationContainer />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
