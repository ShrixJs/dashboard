import { Route, Routes } from 'react-router-dom';
import LeftSidebar from './common/LeftSidebar';
import routes from '../routes';

import './App.scss';
import GenericPage from './pages/GenericPage';

const App = () => (
  <section className="dashboard">
    <LeftSidebar />
    <Routes>
      {
        routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.path === '/'
                ? <route.component />
                : <GenericPage pageName={route.path.slice(1)} />
              }
          />
        ))
      }
    </Routes>
  </section>
);

export default App;
