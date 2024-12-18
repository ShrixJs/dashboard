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


const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Expenses',
        data: [5000, 3000, 3200, 4500, 6500, 7000, 8000, 12000, 15000, 18000],
        borderColor: 'black',
        fill: false,
      },
      {
        label: 'Income',
        data: [20000, 25000, 32500, 30500, 40000, 42000, 45000, 55000, 60000, 70000],
        borderColor: 'lightblue',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maxWidth: 800,
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


  return (
    <div className="chart-container">
      <div className="custom-filters">
        <ul className="dataset-toggle">
          <li>
            <button>Expenses</button>
          </li>
          <li>
            <button>Income</button>
          </li>
        </ul>
        <ul className="period-filter">
        <li>
            <button>All</button>
          </li>
          <li>
            <button>D</button>
          </li>
          <li>
            <button>W</button>
          </li>
          <li>
            <button>M</button>
          </li>
        </ul>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;