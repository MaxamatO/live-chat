import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// Create a styled component for the login form container
export const LoginFormContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

// Create a styled component for form elements (e.g., input, button)
export const FormField = styled.div`
  margin-bottom: 15px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
export const GoBack = styled.button``

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Handle the login logic here
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <LoginFormContainer>
      <h2>Login</h2>
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
        <Button onClick={handleLogin}>Login</Button>
      </FormField>
      <GoBack onClick={goHome}>Go back</GoBack>
    </LoginFormContainer>
  )
}
