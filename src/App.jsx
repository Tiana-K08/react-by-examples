import ParentGreeting from './components/props/data/ParentGreeting.jsx';
import ParentProfile from './components/props/object/ParentProfile.jsx';
import ParentProfileDest from './components/props/destructuring/ParentProfileDest.jsx';
import ParentButton from './components/props/function/ParentButton.jsx';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ParentGreeting />
      <ParentProfile />
      <ParentProfileDest />
      <ParentButton />
    </div>
  );
}

export default App;
