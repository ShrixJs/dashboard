import { useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import './LineChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maxWidth: 700,
  tension: 0.5,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#333',
      },
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        color: '#333',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `$ ${tooltipItem.raw.toLocaleString()}`;
        },
      },
    },
  },
};

const labels = {
  all: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  day: ['9am', '12pm', '3pm', '6pm'],
  week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  month: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
};

const periods = [
  { label: 'All', value: 'all' },
  { label: 'D', value: 'day' },
  { label: 'W', value: 'week' },
  { label: 'M', value: 'month' },
];


const LineChart = () => {
  const [datasetVisibilityStatus, setdatasetVisibilityStatus] = useState({expenses: true, income: true});
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const data = {
    labels: labels[selectedPeriod],
    datasets: [
     datasetVisibilityStatus.expenses && {
        label: 'Expenses',
        data: [5000, 3000, 3200, 4500, 6500, 7000, 8000, 12000, 15000, 18000],
        borderColor: 'black',
        fill: false,
      },
      datasetVisibilityStatus.income && {
        label: 'Income',
        data: [20000, 25000, 32500, 30500, 40000, 42000, 45000, 55000, 60000, 70000],
        borderColor: 'lightblue',
        fill: false,
      },
    ],
  };

  const handleToggle = (dataset) => {
    setdatasetVisibilityStatus({...datasetVisibilityStatus, [dataset]: !datasetVisibilityStatus[dataset] });
  };

  return (
    <div className="chart-container">
      <div className="custom-filters">
        <ul className="dataset-toggle">
          <li>
            <button
              className={datasetVisibilityStatus.expenses ? 'active' : ''}
              type="button"
              onClick={() => handleToggle('expenses')}
            >
              Expenses
            </button>
          </li>
          <li>
            <button
              className={datasetVisibilityStatus.income ? 'active' : ''}
              type="button"
              onClick={() => handleToggle('income')}
            >
              Income
            </button>
          </li>
        </ul>
        <ul className="period-filter">
          {periods.map((period) => (
            <li key={period.value}>
              <button
                type="button"
                onClick={() => setSelectedPeriod(period.value)}
                className={selectedPeriod === period.value ? 'active' : ''}
              >
                {period.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;