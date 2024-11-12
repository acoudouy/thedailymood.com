import { Action, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import undoable, { excludeAction } from 'redux-undo'

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import user from './reducers/user'
import storage from './storage.ts'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authState', 'user', 'scenes', 'videoForm', 'project'],
}

const rootReducer = combineReducers({
  user,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }), // Thunk middleware is included by default in getDefaultMiddleware
  })

  const persistor = persistStore(store)
  // persistor.purge()
  return { store, persistor }
}

// Update types to reflect the new structure of the store
export type AppStore = ReturnType<typeof makeStore>['store']
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
