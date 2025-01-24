import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../shared/context/AuthProvider'

export const SignOut = () => {
  const auth: any | { singOut: () => void } = useAuth()

  const navigate = useNavigate()
  useEffect(() => {
    if (auth === null) return
    navigate('/signIn/registration')
  }, [auth, navigate])
  return auth.signOut(() => {})
}
