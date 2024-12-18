import NotificationsBar from '../../common/NotificationsBar';

import './GenericPage.scss';

const GenericPage = ({ pageName }) => {
  return (
    <main className="generic-page">
      <NotificationsBar />
      <div>
        {pageName}
      </div>
    </main>
  );
}

export default GenericPage;