
import './App.css';
import {BrowserRouter as  Router, Route} from 'react-router-dom';
import Login from './Login';
import './Login.css';
import Register from './Register';

import './Register.css';



function App() {
  return (
    <div className="app">
      {/* <div>
      <h1> Welcome to ReactJs</h1>

      </div>
       */}

      
      <Router>
        <switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path="/register">
          <Register />
          </Route>

        </switch>
      </Router>
      
    </div>
  );
}

export default App;
