import ParentGreeting from './components/props/data/ParentGreeting.jsx';
import ParentProfile from './components/props/object/ParentProfile.jsx';
import ParentProfileDest from './components/props/destructuring/ParentProfileDest.jsx';
import ParentButton from './components/props/function/ParentButton.jsx';
import ParentCards from './components/props/children/ParentCards.jsx';
import ParentCardOne from './components/props/children/ParentCardOne.jsx';
import ParentCardTwo from './components/props/children/ParentCardTwo.jsx';
import ParentCardThree from './components/props/children/ParentCardThree.jsx';

import Counter from './components/use-state/counter/Counter.jsx';
import Text from './components/use-state/text/Text.jsx';

import ListsContainer from './components/method-map/list-container/ListsContainer.jsx';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ParentGreeting />
      <ParentProfile />
      <ParentProfileDest />
      <ParentButton />
      <ParentCards />
      <ParentCardOne />
      <ParentCardTwo />
      <ParentCardThree />

      <Counter />
      <Text />

      <ListsContainer />
    </div>
  );
}

export default App;
