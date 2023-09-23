import { MainContent } from 'components/messages/MainContent'
import { SidebarComponent } from 'components/sidebar/SidebarComponent'
import styled from 'styled-components'
export function Layout() {
  return (
    <Container>
      <SidebarComponent />
      <MainContent />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  width: 100vw;
  height: 100vh;
`
