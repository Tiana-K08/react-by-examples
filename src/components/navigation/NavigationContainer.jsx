import { NavLink } from 'react-router-dom';

import './NavigationContainer.css';

export default function NavigationContainer() {
  return (
    <div className="nav-wrapper">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
      >
        Props
      </NavLink>
      <NavLink
        to="/use-state"
        className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
      >
        useState
      </NavLink>
      <NavLink
        to="/map"
        className={({ isActive }) => (isActive ? 'nav-link-active' : '')}
      >
        .map()
      </NavLink>
    </div>
  );
}
