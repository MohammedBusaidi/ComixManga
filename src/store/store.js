import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReduceer } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; 
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }

  console.log('type:', action.type);
  console.log('payload:', action.payload);
  console.log('currentState:', store.getState());

  next(action);

  console.log('next state:', store.getState());
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const sagaMiddlware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware, sagaMiddlware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddlware.run(rootSaga);

export const persistor = persistStore(store);