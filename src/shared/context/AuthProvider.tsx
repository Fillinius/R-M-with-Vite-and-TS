import { createContext, useContext, useState } from 'react'
import { KEYUSER } from '../../feature/registration/SignIn'

const AuthContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

interface ValueProp {
  user: string | null
  signIn: (data: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(
    () => localStorage.getItem(KEYUSER) || null
  )

  const signIn = (newUser: string | null | any, callback: () => void) => {
    setUser(newUser)
    localStorage.setItem(KEYUSER, newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem(KEYUSER)
    callback()
  }

  const value: ValueProp | any = {
    user,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
