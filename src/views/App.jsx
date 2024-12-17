import LeftSidebar from './common/LeftSidebar';
import Overview from './pages/Overview';

import './App.scss';

const App = () => (
    <section className="dashboard">
      <LeftSidebar />
      <Overview />
    </section>
);

export default App
