import { createContext, useContext, useState } from 'react'
import { KEYUSER } from '../../feature/registration/SignIn'

interface AuthContextProp {
  user: string | null
  signIn: (data: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}
interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProp | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(
    () => localStorage.getItem(KEYUSER) || null
  )

  const signIn = (newUser: string | null, callback: () => void) => {
    if (!newUser) return
    setUser(newUser)
    localStorage.setItem(KEYUSER, newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem(KEYUSER)
    callback()
  }

  const value: AuthContextProp = {
    user,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
