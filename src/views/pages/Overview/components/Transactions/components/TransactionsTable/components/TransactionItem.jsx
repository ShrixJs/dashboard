import './TransactionItem.scss';

const TransactionItem = ({ name, date, icon, status, amount }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

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
        <p className="transaction-status">{status}</p>
        <p className="transaction-amount">{amount}</p>
        <button className="transaction-settings">
          <i className="fa-solid fa-ellipsis-vertical" />
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;