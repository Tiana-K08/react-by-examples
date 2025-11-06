import { NavLink } from 'react-router-dom';

import './NavigationContainer.css';

export default function NavigationContainer() {
  return (
    <div className="nav-wrapper">
      <NavLink to="/">Props</NavLink>
      <NavLink to="/use-state">useState</NavLink>
      <NavLink to="/map">.map()</NavLink>
    </div>
  );
}
