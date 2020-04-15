import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
//redux stuff
import { Provider } from 'react-redux'; //connection
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


//useEffect: If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  
  return (
  <Provider store={store}>
    <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Alert/>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>

  </Provider>
  
)};

export default App;
