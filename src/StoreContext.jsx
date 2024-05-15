import React from 'react'

export const storecontext = React.createContext(null);
import userStore from './userStore';

const StoreProvider = ({children}) => {
  return (
    <>
    <storecontext.Provider value={new userStore()}>
        {children}
    </storecontext.Provider>
    </>
  )
}

export default StoreProvider;