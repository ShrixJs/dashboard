import { useState } from 'react';

import './TransactionItem.scss';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../../../../../store/usersSlice';

const TransactionItem = ({ name, date, icon, status, amount, id }) => {
  const dispatch = useDispatch();
  const [shouldShowContextMenu, setShouldShowContextMenu] = useState();
  const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="transaction-item">
      <div className="transaction-user-container">
        <img src={icon} alt="user avatar" />
        <div className="transaction-user-info">
          <p className="transaction-user-name">{name}</p>
          <p className="transaction-date">{formattedDate}</p>
        </div>
      </div>
      <div className="transaction-details">
        <p className={`transaction-status-${status.toLowerCase()}`}>{status}</p>
        <p className="transaction-amount">{amount}</p>
        <button className="transaction-settings" onClick={() => setShouldShowContextMenu(!shouldShowContextMenu)}>
          <i className="fa-solid fa-ellipsis-vertical" />
          {
            shouldShowContextMenu &&
              <div className="action-menu">
                <button onClick={handleDeleteUser}>Delete</button>
              </div>
          }
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;