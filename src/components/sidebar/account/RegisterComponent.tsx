import styled from 'styled-components'

export function RegisterComponent() {
  return (
    <div>
      <RegisterButton>Register</RegisterButton>
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
