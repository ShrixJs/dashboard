import { Route, Routes } from 'react-router-dom';

import LeftSidebar from './common/LeftSidebar';
import GenericPage from './pages/GenericPage';

import routes from '../routes';

import './App.scss';

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
