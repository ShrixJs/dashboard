import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { NAV_PAGES, OPTIONS } from '../../configs';

import './styles/LeftSidebar.scss';

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
};

export default LeftSidebar;