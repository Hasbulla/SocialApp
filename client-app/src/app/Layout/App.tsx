import NavBar  from './NavBar';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../Stores/Store';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import LoadingComponent from './LoadingComponent';
import HomePage from '../../Features/Home/HomePage';
import NotFound from '../../Features/Errors/NotFound';
import LoginForm from '../../Features/Users/LoginForm';
import TestErrors from '../../Features/Errors/TestError';
import ServerError from '../../Features/Errors/ServerError';
import ModalContainer from '../Common/Modals/ModalContainer';
import { Route, Switch, useLocation } from 'react-router-dom';
import ActivityForm from '../../Features/Activities/Form/ActivityForm';
import ActivityDetails from '../../Features/Activities/Details/ActivityDetails';
import ActivityDashboard from '../../Features/Activities/Dashboard/ActivityDashboard';

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-error' component={ServerError} />
                <Route path='/login' component={LoginForm} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
