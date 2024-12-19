import './styles/NotificationsBar.scss';
import avatar from '../../assets/images/avatar-placeholder.png';

// fix avatar bg

const NotificationsBar = () => {
  return (
    <div className="notifications-bar">
      <h3>Dashboard</h3>
      <div className="user-controls">
        <div className="buttons">
          <button><i className="fa-regular fa-envelope" /></button>
          <button><i className="fa-regular fa-bell" /></button>
        </div>
        <div className="user">
          <img className="avatar" src={avatar} alt="avatar" />
          <p>Anik Deb</p>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
    </div>
  );
}

export default NotificationsBar;