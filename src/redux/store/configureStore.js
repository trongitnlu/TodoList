import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import { persistStore, persistReducer } from 'redux-persist';

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todoReducer'],
  version: 1.0,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
