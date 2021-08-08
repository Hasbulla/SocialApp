import React from 'react';
import NavBar  from './NavBar';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import HomePage from '../../Features/Home/HomePage';
import NotFound from '../../Features/Errors/NotFound';
import TestErrors from '../../Features/Errors/TestError';
import ServerError from '../../Features/Errors/ServerError';
import { Route, Switch, useLocation } from 'react-router-dom';
import ActivityForm from '../../Features/Activities/Form/ActivityForm';
import ActivityDetails from '../../Features/Activities/Details/ActivityDetails';
import ActivityDashboard from '../../Features/Activities/Dashboard/ActivityDashboard';

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container style={{marginTop: '7em'}}>
            <Switch>
              <Route exact path='/Activities' component={ActivityDashboard} />
              <Route path='/Activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
              <Route path='/Errors' component={TestErrors} />
              <Route path='/server-error' component={ServerError} />
              <Route component={NotFound} />
            </Switch>
            
          </Container>
        </>
      )} />
   
    </>
  );
}

export default observer(App);
