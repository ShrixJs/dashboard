import FinanceSummary from './components/FinanceSummary';
import NotificationsBar from './components/NotificationsBar';

import './Overview.scss';

const Overview = () => {
  return (
    <main className='overview'>
      <NotificationsBar />
      <FinanceSummary />
    </main>
  );
}

export default Overview;