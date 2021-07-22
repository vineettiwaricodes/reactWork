import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import Login from './Main';
import ForgotPassword from './ForgotPassword'
import Register from './Register';
import Dashboard from './Dashboard'

ReactDOM.render(

  <Router>
   <Route exact path="/" component={Login}/>
   <Route exact path="/register" component={Register}/>
   <Route exact path="/forgot-password" component={ForgotPassword}/>
   <Route exact path="/dashboard" component={Dashboard}/>
    
  </Router>
,
  document.getElementById('root')
);

