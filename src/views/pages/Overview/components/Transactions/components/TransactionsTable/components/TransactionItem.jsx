import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteUser } from '../../../../../../../../store/usersSlice';
import { formatCurrency } from '../../../../../../../../helpers';

import './TransactionItem.scss';

const TransactionItem = ({ name, date, icon, status, amount, id }) => {
  const dispatch = useDispatch();
  const [shouldShowContextMenu, setShouldShowContextMenu] = useState();
  const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
  };

  const contextMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!contextMenuRef?.current?.contains(e.target)) {
      setShouldShowContextMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div className="transaction-actions">
          <p className="transaction-amount">{`${Math.random() > 0.5 ? '+' : '-'} ${formatCurrency(amount)}`}</p>
          <button ref={contextMenuRef} className="transaction-settings" onClick={() => setShouldShowContextMenu(!shouldShowContextMenu)}>
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
    </div>
  );
};

export default TransactionItem;