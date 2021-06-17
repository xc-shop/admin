import React, { FC } from 'react';
import './App.css';
import AppRouter from './router';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'mobx-react';
import { store, StoreContext } from 'stores';

const App: FC = () => {
  return (
    <Provider {...store} className="App">
      <StoreContext.Provider value={store}>
        <AppRouter />
      </StoreContext.Provider>
    </Provider>
  );
};

export default hot(App);