import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawercontextData {
  isDrawerOpen: boolean,
  toggleDrawerOpen: () => void,
}

const DrawerContext = createContext({} as IDrawercontextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      { children }
    </DrawerContext.Provider>
  )
}