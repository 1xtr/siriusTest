import React from 'react';
import {AppNavigator} from './src/navigations/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
