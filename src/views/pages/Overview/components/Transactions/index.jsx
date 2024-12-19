import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersThunk, selectContacts } from '../../../../../store/usersSlice';

import LineChart from './components/LineChart';
import TransactionsTable from './components/TransactionsTable';
import Carousel from '../../../../common/Carousel';
import AddContactModal from './components/AddContactModal';

import avatar from  '../../../../../assets/images/avatar-placeholder.png';
import './Transactions.scss';

const COLORS = [
  '#fcefe2',
  '#effcef',
  '#e6f5f9',
  '#f4f6f9'
];

const renderContact = (name, icon, index) => {
  const colorIndex = (index % 4);

  return (
    <div className="contact" style={{ backgroundColor: COLORS[colorIndex] }}>
      <img src={icon ? icon : avatar} alt="contact avatar" />
      <p>{name}</p>
    </div>
  );
};

const Transcations = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = users?.map((user, i) => {
    return (
      {
        id: user.name,
        component: renderContact(user.name, user.icon, i),
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
            <button className="add-contact" onClick={() => setIsModalOpen(!isModalOpen)}><i className="fa-solid fa-plus" />Add new</button>
          </div>
          <div className="contacts">
            <Carousel slides={slides} slidesToShow={5} dots={false} />
          </div>
        </div>
      </div>
      <div className="transactions-right-side">
        <TransactionsTable />
      </div>
      <AddContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </section>
  );
};

export default Transcations;