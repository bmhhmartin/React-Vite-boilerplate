import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './route/AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/media.css';


const App = () => {
  return (
    <div>
        <Router>
          <AppRoute></AppRoute>
        </Router>
    </div>
  );
};

export default App;
