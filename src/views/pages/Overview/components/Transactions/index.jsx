import LineChart from './components/LineChart';
import TransactionsTable from './components/TransactionsTable';

import avatar from '../../../../../assets/images/avatar-placeholder.png';

import './Transactions.scss';
import Carousel from '../../../../common/Carousel';

const Transcations = () => {
  const renderContact = (name) => (
    <div className="contact">
      <img src={avatar} alt="contact avatar" />
      <p>{name}</p>
    </div>
  )

  const slides = ['Peter', 'George', 'Sebastian', 'Jake', 'Roy'].map((name) => ({ id: name, component:renderContact(name)}));

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
          <div className="contacts">
              <Carousel slides={slides} slidesToShow={5}  dots={false} />
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