import React, { PureComponent } from 'react';
import Scenes from './screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store/configureStore';

const storeConfig = configureStore();
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <Scenes />
        </PersistGate>
      </Provider>
    );
  }
}
