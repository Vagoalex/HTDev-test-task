import { BrowserRouter as Router } from 'react-router-dom';
import NotesFooter from '../notes-footer/NotesFooter';
import NotesHeader from '../notes-header/NotesHeader';
import AnimatedRoutes from '../pages/animated-routes/AnimatedRoutes';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NotesHeader />
        <AnimatedRoutes />
        <NotesFooter />
      </Router>
    </div>
  );
};

export default App;
