'use client'
// Import ReactNode for children prop type
import React, { useRef, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore } from '../lib/store'
import { setInitialUserState } from '../lib/reducers/user'

// Define the type for the component's props
interface StoreProviderProps {
  children: ReactNode
}

// Define a type for the structure stored in storeRef
interface StoreRef {
  store: any // Consider specifying a more detailed type based on your store configuration
  persistor: any // Same as above, specify a detailed type if possible
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<StoreRef | null>(null)

  if (!storeRef.current) {
    const { store, persistor } = makeStore()
    store.dispatch(setInitialUserState())
    storeRef.current = { store, persistor }
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
