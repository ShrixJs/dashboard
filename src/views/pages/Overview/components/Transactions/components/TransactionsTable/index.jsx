import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUsers, selectUsersLoading } from '../../../../../../../store/usersSlice';
import TransactionItem from './components/TransactionItem';

import './TransactionTable.scss';
import Scrollbars from 'react-custom-scrollbars-2';

const TransactionsTable = () => {
  const [sortBy, setSortBy] = useState('newest');
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersLoading);

  const sortedUsers = users.slice().sort((a, b) => {
    if (sortBy === 'oldest') return new Date(a.registered) - new Date(b.registered);

    return new Date(b.registered) - new Date(a.registered);
  });

  return (
    <div className="transactions-table">
      <div className="transactions-header">
        <h3>Transactions</h3>
        <ul className="transaction-filters">
          <li><button className={sortBy === 'newest' && 'active'} type="button" onClick={() => setSortBy('newest')}>Newest</button></li>
          <li><button className={sortBy === 'oldest' && 'active'} type="button" onClick={() => setSortBy('oldest')}>Oldest</button></li>
        </ul>
      </div>
      <div className="transaction items">
        {
          !isLoading &&
            (
              <Scrollbars autoHide style={{ width: '100%', height: 500 }}>
                {
                sortedUsers.map((user, i) => (
                  <TransactionItem
                  key={`${user.name}-${user.date}-${i}`}
                  name={user.name}
                  date={user.registered}
                  icon={user.icon}
                  status={'Completed'}
                  amount={(Math.random() * 100 + 1).toFixed(2)}
                  />))
                }
              </Scrollbars>
            )
        }
      </div>
    </div>
  );
};

export default TransactionsTable;