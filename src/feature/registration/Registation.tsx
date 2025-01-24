import * as React from 'react'
import TextField from '../../shared/form/TextField.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../shared/context/AuthProvider.js'
import { Button } from '@mui/material'

const INITIALSTATEREG = {
  name: '',
  password: '',
  id: '',
}

const Registration = () => {
  const [data, setData] = React.useState(INITIALSTATEREG)

  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()
  const from = location.state?.from || '/'

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    auth.signIn(JSON.stringify(data), () => {
      navigate(from, { replace: true })
    })
  }

  const handleRedirect = () => {
    navigate('/signIn')
  }

  return (
    <>
      <div className="register_box">
        <h3>Registration</h3>
        <Button variant="outlined" onClick={handleRedirect}>
          SignIn
        </Button>
      </div>
      <div className="register">
        <form className="register_form" onSubmit={handleSubmit}>
          <TextField
            label="Ведите Ваше имя"
            name="name"
            value={data.name}
            type="text"
            onChange={handleChange}
            id={data.name}
          />
          <TextField
            label="Ведите Ваш пароль"
            name="password"
            value={data.password}
            type="text"
            onChange={handleChange}
            id={data.password}
          />
          <Button variant="contained" type="submit">
            Регистрация нового пользователя
          </Button>
        </form>
      </div>
    </>
  )
}

export default Registration
