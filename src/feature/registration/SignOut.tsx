import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../shared/context/AuthProvider'

const SignOut = () => {
  const auth = useAuth()

  const navigate = useNavigate()
  useEffect(() => {
    navigate('/signIn/registration')
  }, [auth, navigate])
  return auth.signOut(() => {})
}

export default SignOut
