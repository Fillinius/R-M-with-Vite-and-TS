import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../shared/context/AuthProvider'

export const SignOut = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth === null) return
    auth.signOut(() => {})
    navigate('/signIn/registration')
  }, [auth, navigate])

  return null
}
