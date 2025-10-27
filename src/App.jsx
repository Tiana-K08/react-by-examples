import ParentGreeting from './components/props/data/ParentGreeting.jsx';
import ParentProfile from './components/props/object/ParentProfile.jsx';
import ParentProfileDest from './components/props/destructuring/ParentProfileDest.jsx';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ParentGreeting />
      <ParentProfile />
      <ParentProfileDest />
    </div>
  );
}

export default App;
