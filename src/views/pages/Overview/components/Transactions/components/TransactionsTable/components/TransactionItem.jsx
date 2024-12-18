import avatar from '../../../../../../assets/images/avatar-placeholder.png';


const TransactionItem = ({ name, date, status, amount }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-user-container">
        <img src={avatar} alt="user avatar" />
        <div className="transaction-user-info">
          <p>{date}</p>
          <p>{name}</p>
        </div>
      </div>
      <div className="transaction-details">
        <p>{status}</p>
        <p>{amount}</p>
        <button>
        <i className="fa-solid fa-ellipsis-vertical" />
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;