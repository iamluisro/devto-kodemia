import * as React from 'react'

const AppContext = React.createContext()
AppContext.displayName = 'AppContext'

function AppProvider({children}) {
  const [contextUser, setContextUser] = React.useState('Erick')
  const [money, setMoney] = React.useState(0)
  const value = { contextUser, setContextUser, money, setMoney }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useAppContext() {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}


export {AppProvider, useAppContext}
