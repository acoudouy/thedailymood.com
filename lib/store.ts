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

import clips from './reducers/clips'
import media from './reducers/media'
import project from './reducers/project'
import user from './reducers/user'
import storage from './storage'
import videoFormReducer from './reducers/videoFormSlice'
import sceneReducer, { scenesSlice } from './reducers/scenes'
import activeElement from './reducers/activeElement'
import menuReducer from './reducers/menuSlice' // Import the menuSlice reducer

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authState', 'user', 'scenes', 'videoForm', 'project'],
}

function isActionIgnored(action: Action) {
  return action.type === scenesSlice.actions.updateSceneDetails.type
}

const undoableScenesReducer = undoable(sceneReducer, {
  filter: excludeAction([
    scenesSlice.actions.updateSceneOrder.type,
    scenesSlice.actions.updateSceneDetails.type,
    scenesSlice.actions.addScene.type,
  ]),
})

const rootReducer = combineReducers({
  user,
  scenes: undoableScenesReducer,
  videoForm: videoFormReducer,
  project,
  clips,
  media,
  activeElement,
  menu: menuReducer,
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
