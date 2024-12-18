import NotificationsBar from '../../common/NotificationsBar';

const GenericPage = ({ pageName }) => {
  return (
    <>
      <NotificationsBar />
      <main>
        <div>
          {pageName}
        </div>
      </main>
    </>
  );
}

export default GenericPage;