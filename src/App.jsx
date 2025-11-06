import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationContainer from './components/navigation/NavigationContainer.jsx';
import PageProps from './components/pages/PageProps.jsx';
import PageUseState from './components/pages/PageUseState.jsx';
import PageMethodMap from './components/pages/PageMethodMap.jsx';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<PageProps />} />
          <Route path="/use-state" element={<PageUseState />} />
          <Route path="/map" element={<PageMethodMap />} />
        </Routes>
      </div>
    </Router>
  );
}
