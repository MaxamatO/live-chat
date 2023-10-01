import styled from 'styled-components'
import { MainContentHeader } from './MainContentHeader'
import { MessageBox } from './MessageBox'
import { InputMessage } from './Input'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { Message } from 'interfaces/Message'

export function MainContent() {
  const [message, setMessage] = useState('')
  const [socketUrl] = useState('ws://127.0.0.1:3000/ws')
  const [messageHistory, setMessageHistory] = useState<Message[]>([])
  const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
    onOpen() {
      sendMessage('This is client!')
    },
    shouldReconnect() {
      return true
    },
  })
  function onChange(e: any) {
    setMessage(e.target.value)
  }

  function onSendMessage() {
    console.log('Im sending')
    sendMessage(message)
    setMessage('')
  }

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage.data)

      const receivedMessage = JSON.parse(lastMessage.data) as Message
      setMessageHistory((prev) => [...prev, receivedMessage])
    }
  }, [lastMessage])

  return (
    <Container>
      <MainContentHeader></MainContentHeader>
      <MessageBox messageHistory={messageHistory}></MessageBox>
      <InputMessage
        value={message}
        message={{
          user: { username: 'Leon' },
          date: '19.09.2023',
          message: 'Just a message',
        }}
        onChange={(e) => onChange(e)}
        onSend={onSendMessage}
      ></InputMessage>
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
