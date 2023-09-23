import styled from 'styled-components'
import { MainContentHeader } from './MainContentHeader'
import { MessageBox } from './MessageBox'
import { InputMessage } from './Input'

export function MainContent() {
  return (
    <Container>
      <MainContentHeader></MainContentHeader>
      <MessageBox></MessageBox>
      <InputMessage></InputMessage>
    </Container>
  )
}

const Container = styled.div`
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`
