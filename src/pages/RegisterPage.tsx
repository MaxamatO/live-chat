import { useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  FormField,
  GoBack,
  Input,
  Label,
  LoginFormContainer,
} from './LoginPage'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// Reuse the styled components from the login form example

const SignUpFormContainer = styled(LoginFormContainer)`
  /* Reuse styles from the login form */
`

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = async () => {
    const { data, status } = await axios.post(
      'http://localhost:3000/register',
      { email: email, password: password, rePassword: confirmPassword },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    console.log(data)
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <SignUpFormContainer>
      <h2>Sign Up</h2>
      <FormField>
        <Label>Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label>Password:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label>Confirm Password:</Label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </FormField>
      <GoBack onClick={goHome}>Go back</GoBack>
    </SignUpFormContainer>
  )
}
