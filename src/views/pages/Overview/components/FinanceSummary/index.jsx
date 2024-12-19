import Carousel from '../../../../common/Carousel';
import cardImg from '../../../../../assets/images/card-placeholder.png';
import { FINANCE_METRICS } from '../../../../../configs';

import './FinanceSummary.scss';

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

  const cardSlide = {
    id: 'card',
    component: <img src={cardImg} alt="credit-card" />,
  };

  const slides = Array(5).fill(cardSlide);

  return (
    <section className="finance-summary">
      <div className="card">
        <div className="card-title">
          <h5>My Card</h5>
          <button><i className="fa-solid fa-ellipsis-vertical" /></button>
        </div>
        <div className="carousel-container">
          <Carousel slides={slides} slidesToShow={1} dots />
        </div>
      </div>
      <div className="financial-metrics">
        {FINANCE_METRICS.map((metric) => (
          <div key={metric.type} className="metric-card">
            <div className="metric-title">
              <h5>{metric.type}</h5>
              <i className="fa-solid fa-arrow-trend-up" />
            </div>
            <p className="amount">{formatCurrency(metric.amount)}</p>
            <p className="amount-info">{`${(metric.comparison * 100).toFixed(1)}% than last month`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceSummary;