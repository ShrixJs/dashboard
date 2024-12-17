import logo from '../../assets/images/logo.png';

import './styles/LeftSidebar.scss';

const NAV_PAGES = [
    {
      title: 'Overview',
      icon: 'fa-table',
    },
    {
      title: 'Message',
      icon: 'fa-envelope',
    },
    {
      title: 'Analytics',
      icon: 'fa-chart-line',
    },
    {
      title: 'Payment',
      icon: 'fa-credit-card',
    },
    {
      title: 'Transaction',
      icon: 'fa-arrow-right-arrow-left',
    },
    {
      title: 'My Wallet',
      icon: 'fa-wallet',
    },
    {
      title: 'Profile',
      icon: 'fa-user',
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

const LeftSidebar = () => (
  <aside className="left-sidebar">
    <div className="sidebar-title">
      <img src={logo} alt="dashboard logo" />
      <h4>grapeslab</h4>
    </div>
    <p>Main Menu</p>
    <ul className="nav-controls">
        {NAV_PAGES.map((page) => <li key={page.title}><i className={`fa-solid ${page.icon}`} /><p>{page.title}</p></li>)}
    </ul>
    <ul className='options'>
        {OPTIONS.map((option) => <li key={option.title}><i className={`fa-solid ${option.icon}`} /><p>{option.title}</p></li>)}
    </ul>
  </aside>
);


export default LeftSidebar;