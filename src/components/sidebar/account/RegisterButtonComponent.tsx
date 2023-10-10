import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export function RegisterButtonComponent() {
  const navigate = useNavigate()
  return (
    <div>
      <RegisterButton onClick={() => navigate('/register')}>
        Register
      </RegisterButton>
    </div>
  )
}

const RegisterButton = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  &:hover {
    cursor: pointer;
    color: darkgray;
  }
`
