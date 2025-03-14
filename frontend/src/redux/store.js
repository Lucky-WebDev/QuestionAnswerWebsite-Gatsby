import rootReducer from './reducer'
import thunk from 'redux-thunk'

import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const rootPersistConfig = {
  key: 'user',
  storage
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)
