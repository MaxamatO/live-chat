import styled from 'styled-components'
import { LoginComponent } from './LoginComponent'
import { RegisterComponent } from './RegisterComponent'

export default function SideBarButtonComponent() {
  return (
    <SideBarButtonWrapper>
      <LoginComponent></LoginComponent>
      <RegisterComponent></RegisterComponent>
    </SideBarButtonWrapper>
  )
}
const SideBarButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
`
