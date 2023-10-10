import styled from 'styled-components'
import { LoginButtonComponent } from './LoginButtonComponent'
import { RegisterButtonComponent } from './RegisterButtonComponent'

export default function SideBarButtonComponent() {
  return (
    <SideBarButtonWrapper>
      <LoginButtonComponent></LoginButtonComponent>
      <RegisterButtonComponent></RegisterButtonComponent>
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
