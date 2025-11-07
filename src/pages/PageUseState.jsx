import Counter from '../components/examples/use-state/counter/Counter.jsx';
import Text from '../components/examples/use-state/text/Text.jsx';
import PageContainer from '../components/examples/use-state/states/PageContainer.jsx';
import InClassPageContainer from '../components/examples/use-state/states-in-class/InClassPageContainer.jsx';

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
