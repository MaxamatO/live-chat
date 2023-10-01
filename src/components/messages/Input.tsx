import { Message } from 'interfaces/Message'
import styled from 'styled-components'

interface Props {
  message: Message
  onSend: () => void
  onChange: (e: any) => void
  value: string
}

export function InputMessage({ message, onSend, onChange, value }: Props) {
  return (
    <InputContainer>
      <InputStyle
        value={value}
        onChange={(e) => onChange(e)}
        placeholder="Message John Doe"
      />
      <SendButton onClick={onSend}>Send</SendButton>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: calc(100% - 220px);
  display: flex;
  height: fit-content;
  position: fixed;
  bottom: 10px;
  align-items: center;
  justify-content: space-evenly;
`

const SendButton = styled.button`
  background-color: transparent;
  padding: 5px;
  color: black;
  width: fit-content;
  height: fit-content;
  position: fixed;
  right: 40px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: lightgray;
  }
`

const InputStyle = styled.input`
  padding: 1rem;
  border-radius: 7px;
  border: 3px solid darkgray;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  &:hover,
  &:active,
  &:focus {
    border: 3px solid dimgray;
  }
`
