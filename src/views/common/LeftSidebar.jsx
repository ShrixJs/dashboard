import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import './styles/LeftSidebar.scss';

const NAV_PAGES = [
    {
      title: 'Overview',
      icon: 'fa-table',
      route: '/'
    },
    {
      title: 'Message',
      icon: 'fa-envelope',
      route: '/message',
    },
    {
      title: 'Analytics',
      icon: 'fa-chart-line',
      route: '/analytics',
    },
    {
      title: 'Payment',
      icon: 'fa-credit-card',
      route: '/payment',
    },
    {
      title: 'Transaction',
      icon: 'fa-arrow-right-arrow-left',
      route: '/transaction'
    },
    {
      title: 'My Wallet',
      icon: 'fa-wallet',
      route: '/my-wallet'
    },
    {
      title: 'Profile',
      icon: 'fa-user',
      route: '/profile',
    }
];

const OPTIONS = [
  {
    title: 'Support',
    icon: 'fa-headset',
  },
  {
    title: 'Settings',
    icon: 'fa-gear',
  },
  {
    title: 'Log out',
    icon: 'fa-arrow-right-from-bracket',
  }
]

const LeftSidebar = () => {
  const location = useLocation();

 return (
  <aside className="left-sidebar">
    <div className="sidebar-title">
      <img src={logo} alt="dashboard logo" />
      <h4>grapeslab</h4>
    </div>
    <h5 className="nav-controls-label">Main Menu</h5>
    <ul className="nav-controls">
        {NAV_PAGES.map((page) => <li key={page.title} className={location.pathname === page.route ? 'active' : '' }><Link to={page.route}><i className={`fa-solid ${page.icon} fa-fw`} /><p>{page.title}</p></Link></li>)}
    </ul>
    <ul className="options">
        {OPTIONS.map((option) => <li key={option.title}><i className={`fa-solid ${option.icon} fa-fw`} /><p>{option.title}</p></li>)}
    </ul>
  </aside>
  );
}

export default LeftSidebar;