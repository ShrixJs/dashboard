import './FinanceSummary.scss';


// Move to redux
const FINANCE_METRICS = [
  {
    type: 'Balance',
    amount: 97450,
    comparison: 0.088,
  },
  {
    type: 'Spending',
    amount: 44900,
    comparison: 0.071,
  },
  {
    type: 'Investment',
    amount: 38160,
    comparison: 0.079,
  },
  {
    type: 'Profit',
    amount: 32500,
    comparison: 0.034,
  },
]

const formatCurrency = (amount) => (
  amount
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2
    })
    .replace('$', '$ ')
);

const FinanceSummary = () => {
  return (
    <section className="finance-summary">
      <div className="card">
        <div className="card-title">
          <h5>My Card</h5>
          <button>opts</button>
        </div>
        <div className="carousel-container">Carousel Placeholder</div>
      </div>
      <div className="financial-metrics">
        {FINANCE_METRICS.map((metric) => (
          <div key={metric.type} className="metric-card">
            <div className="metric-title">
              <h5>{metric.type}</h5>
              <i className="fa-solid fa-arrow-trend-up" />
            </div>
            <p className="amount">{formatCurrency(metric.amount)}</p>
            <p>{`${(metric.comparison * 100).toFixed(1)}% than last month`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FinanceSummary;