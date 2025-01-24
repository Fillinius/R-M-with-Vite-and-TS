import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export const PrivetRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth()
  const location = useLocation()
  if (auth === null) return <p>Err auth</p>

  if (auth.user === null) {
    return (
      <Navigate
        to="/signIn/registration"
        state={{ from: location.pathname }}
        replace
      />
    )
  }
  return children
}
