import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export function LoginButtonComponent() {
  const navigate = useNavigate()

  return (
    <div>
      <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
    </div>
  )
}

const LoginButton = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  &:hover {
    cursor: pointer;
    color: darkgray;
  }
`
