import { useState } from 'react';
import { useSelector } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars-2';

import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from '../../../../../../../store/usersSlice';

import TransactionItem from './components/TransactionItem';

import { STATUSES } from '../../../../../../../constants';
import './TransactionTable.scss';

const TransactionsTable = () => {
  const [sortBy, setSortBy] = useState('newest');
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersLoading);
  const hasError = useSelector(selectUsersError);

  const sortedUsers = users.slice().sort((a, b) => {
    if (sortBy === 'oldest') return new Date(a.registered) - new Date(b.registered);

    return new Date(b.registered) - new Date(a.registered);
  });

  return (
    <div className="transactions-table">
      <div className="transactions-header">
        <h3>Transactions</h3>
        <ul className="transaction-filters">
          <li><button className={sortBy === 'newest' ? 'active' : ''} type="button" onClick={() => setSortBy('newest')}>Newest</button></li>
          <li><button className={sortBy === 'oldest' ? 'active' : ''} type="button" onClick={() => setSortBy('oldest')}>Oldest</button></li>
        </ul>
      </div>
      <div className="transaction-items">
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
                  id={user.id}
                  status={STATUSES[Math.round(Math.random())]}
                  amount={(Math.round(Math.random() * 5000 + 1))}
                  />))
                }
              </Scrollbars>
            )
        }
        {
          (hasError || sortedUsers === 0) &&  <p className="no-data">No transaction data available</p>
        }
      </div>
    </div>
  );
};

export default TransactionsTable;