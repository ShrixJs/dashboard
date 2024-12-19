import { Link, useLocation } from 'react-router-dom';

import { NAV_PAGES, OPTIONS } from '../../constants';

import logo from '../../assets/images/logo.png';
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
     <nav className="nav-controls">
       {
          NAV_PAGES.map((page) =>
            <Link key={page.title} to={page.route}>
              <div className={location.pathname === page.route ? 'active' : '' }>
                <i className={`fa-solid ${page.icon} fa-fw`} />
                <p>{page.title}</p>
              </div>
            </Link>
      )}
     </nav>
     <ul className="options">
       {OPTIONS.map((option) => <li key={option.title}><i className={`fa-solid ${option.icon} fa-fw`} /><p>{option.title}</p></li>)}
     </ul>
   </aside>
  );
};

export default LeftSidebar;