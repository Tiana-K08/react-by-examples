import ParentGreeting from '../components/examples/props/data/ParentGreeting.jsx';
import ParentProfile from '../components/examples/props/object/ParentProfile.jsx';
import ParentProfileDest from '../components/examples/props/destructuring/ParentProfileDest.jsx';
import ParentButton from '../components/examples/props/function/ParentButton.jsx';
import ParentCards from '../components/examples/props/children/ParentCards.jsx';
import ParentCardOne from '../components/examples/props/children/ParentCardOne.jsx';
import ParentCardTwo from '../components/examples/props/children/ParentCardTwo.jsx';
import ParentCardThree from '../components/examples/props/children/ParentCardThree.jsx';
import InClassParentGreeting from '../components/examples/props/in-class/InClassParentGreeting.jsx';

import './Page.css';

export default function PageProps() {
  return (
    <div className="main-wrapper">
      <ParentGreeting />
      <ParentProfile />
      <ParentProfileDest />
      <ParentButton />
      <ParentCards />
      <ParentCardOne />
      <ParentCardTwo />
      <ParentCardThree />
      <InClassParentGreeting />
    </div>
  );
}
