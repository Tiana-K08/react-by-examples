import ParentGreeting from '../examples/props/data/ParentGreeting.jsx';
import ParentProfile from '../examples/props/object/ParentProfile.jsx';
import ParentProfileDest from '../examples/props/destructuring/ParentProfileDest.jsx';
import ParentButton from '../examples/props/function/ParentButton.jsx';
import ParentCards from '../examples/props/children/ParentCards.jsx';
import ParentCardOne from '../examples/props/children/ParentCardOne.jsx';
import ParentCardTwo from '../examples/props/children/ParentCardTwo.jsx';
import ParentCardThree from '../examples/props/children/ParentCardThree.jsx';
import InClassParentGreeting from '../examples/props/in-class/InClassParentGreeting.jsx';

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
