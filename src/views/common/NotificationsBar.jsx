import './styles/NotificationsBar.scss';
import avatar from '../../assets/images/avatar-placeholder.png';

// fix avatar bg

const NotificationsBar = () => {
  return (
    <div className="notifications-bar">
      <h3>Dashboard</h3>
      <div className="user-controls">
        <div className="buttons">
          <button>b1</button>
          <button>b2</button>
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