import React, { useEffect } from 'react';
import NavBar  from './NavBar';
import { useStore } from '../Stores/Store';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import LoadingComponent from './LoadingComponent';
import ActivityDashboard from '../../Features/Activities/Dashboard/ActivityDashboard';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
