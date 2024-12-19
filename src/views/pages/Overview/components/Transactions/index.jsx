import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersThunk, selectUsers } from '../../../../../store/usersSlice';

import LineChart from './components/LineChart';
import TransactionsTable from './components/TransactionsTable';
import Carousel from '../../../../common/Carousel';

import './Transactions.scss';

const renderContact = (name, icon, color) => (
  <div className={`contact ${color}`}>
    <img src={icon} alt="contact avatar" />
    <p>{name}</p>
  </div>
);

const Transcations = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const colors = ['green', 'yellow', 'blue', 'gray'];
  const slides = users.slice().map((user) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      {
        id: user.name,
        component: renderContact(user.name, user.icon, randomColor)
      }
    );
  });

  useEffect(() => {
    dispatch(fetchUsersThunk(10));
  }, []);

  return (
    <section className="transactions">
      <div className="transactions-left-side">
        <LineChart />
        <div className="send-money">
          <div className="send-money-header">
            <h3>Send Money To</h3>
            <button className="add-contact">+ Add new</button>
          </div>
          <div className="contacts">
            <Carousel slides={slides} slidesToShow={4} dots={false} arrows={true} />
          </div>
        </div>
      </div>
      <div className="transactions-right-side">
        <TransactionsTable />
      </div>
    </section>
  );
};

export default Transcations;