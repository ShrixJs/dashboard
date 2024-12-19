import FinanceSummary from './components/FinanceSummary';
import NotificationsBar from '../../common/NotificationsBar';
import Transcations from './components/Transactions';

import './Overview.scss';

const Overview = () => {
  return (
    <main className='overview'>
      <NotificationsBar />
      <FinanceSummary />
      <Transcations />
    </main>
  );
};

export default Overview;