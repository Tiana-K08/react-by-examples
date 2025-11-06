import Counter from '../examples/use-state/counter/Counter.jsx';
import Text from '../examples/use-state/text/Text.jsx';
import PageContainer from '../examples/use-state/states/PageContainer.jsx';
import InClassPageContainer from '../examples/use-state/states-in-class/InClassPageContainer.jsx';

import './Page.css';

export default function PageUseState() {
  return (
    <div className="main-wrapper">
      <Counter />
      <Text />
      <PageContainer />
      <InClassPageContainer />
    </div>
  );
}
