// store/index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Persistor } from 'redux-persist/lib/types';
import logger from 'redux-logger';

import { getStorage } from '~/services/storage/storage';
import { settingsSagas, settingsSlice, IStateSettings } from './settings';
import { parentsSlice, IStateParents } from './parents';
import { childrenSlice, IStateChildren } from './children';
import { commonSlice } from './common/slice';
import { EStateName } from './types';
import { IS_WEB } from '~/constants';

// Root saga
function* rootSaga() {
  yield all([
    // ...parentsSagas,
    // ...childrenSagas,
    ...settingsSagas,
  ]);
}

// Storage selection
const storage = getStorage()

// Persist configs
const settingsPersistConfig: PersistConfig<IStateSettings> = {
  key: EStateName.settings,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['lang'],
};

const parentsPersistConfig: PersistConfig<IStateParents> = {
  key: EStateName.parents,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['entities'],
};

const childrenPersistConfig: PersistConfig<IStateChildren> = {
  key: EStateName.children,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['entities'],
};

// Combine reducers
const settingsReducer = IS_WEB
  ? settingsSlice.reducer
  : persistReducer<IStateSettings>(settingsPersistConfig, settingsSlice.reducer);

const parentsReducer = IS_WEB
  ? parentsSlice.reducer
  : persistReducer<IStateParents>(parentsPersistConfig, parentsSlice.reducer);

const childrenReducer = IS_WEB
  ? childrenSlice.reducer
  : persistReducer<IStateChildren>(childrenPersistConfig, childrenSlice.reducer);

const rootReducer = combineReducers({
  [EStateName.common]: commonSlice.reducer,
  [EStateName.settings]: settingsReducer,
  [EStateName.parents]: parentsReducer,
  [EStateName.children]: childrenReducer,
});

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store once
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }).concat(__DEV__ ? [sagaMiddleware, logger] : [sagaMiddleware]),
  devTools: __DEV__,
});

sagaMiddleware.run(rootSaga);

// export const persistor: Persistor = persistStore(store);
export const persistor: Persistor | null = IS_WEB ? null : persistStore(store);

// Types
export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
