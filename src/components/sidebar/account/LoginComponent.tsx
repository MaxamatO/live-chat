import styled from 'styled-components'

export function LoginComponent() {
  return (
    <div>
      <LoginButton>Login</LoginButton>
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
