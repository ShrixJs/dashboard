import LineChart from './components/LineChart';
import TransactionsTable from './components/TransactionsTable';

import './Transactions.scss';

const Transcations = () => {
  return (
    <section className="transactions">
      <div className="transactions-left-side">
        <div>
          <LineChart />
        </div>
        <div className="send-money">
          <div className="send-money-header">
            <h3>Send Money To</h3>
            <button>+ Add new</button>
          </div>
        </div>
      </div>
      <div className="transactions-right-side">
        <TransactionsTable />
      </div>
    </section>
  );
}

export default Transcations;