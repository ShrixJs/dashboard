import './TransactionTable.scss';

const TransactionsTable = () => {
  return (
    <div className="transactions-table">
      <div className="transactions-header">
        <h3>Transactions</h3>
        <ul className="transaction-filters">
          <li><button>Newest</button></li>
          <li><button>Oldest</button></li>
        </ul>
      </div>
    </div>
  );
}

export default TransactionsTable;