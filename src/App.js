import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './redux/sagas';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Сartoons from './components/Сartoons';
import CartoonInfo from './components/CartoonInfo';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: yellow;
`;

const App = () => {
	const saga = createSagaMiddleware();
	const store = createStore(
  	rootReducer,
  	applyMiddleware(saga)
	);

saga.run(sagaWatcher)
  return (
  	<Provider store={store}>
    	<AppWrapper className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/cartoons/:id">
              <CartoonInfo />
            </Route>
            <Route path="/" exact>
              <Сartoons />
            </Route>
          </Switch>
        </BrowserRouter>
    	</AppWrapper>
    </Provider>
  );
};

export default App;