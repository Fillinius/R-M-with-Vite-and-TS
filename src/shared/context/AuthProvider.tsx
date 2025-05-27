import { createContext, useContext, useState } from 'react'
import { KEYUSER } from '../../feature/registration/SignIn'
import { TUser } from '../type/type'

interface IAuthContext {
  user: TUser | null
  signIn: (data: TUser, callback: () => void) => void
  signOut: (callback: () => void) => void
}

const AuthContext = createContext<IAuthContext | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => localStorage.getItem(KEYUSER) || null)

  const signIn = (newUser: TUser, callback: () => void) => {
    setUser(newUser)
    localStorage.setItem(KEYUSER, newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem(KEYUSER)
    callback()
  }

  const value = {
    user,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
