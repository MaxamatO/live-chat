import styled from 'styled-components'

export function InputMessage() {
  return <InputStyle placeholder="Message John Doe" />
}

const InputStyle = styled.input`
  padding: 1rem;
  border-radius: 7px;
  border: 3px solid darkgray;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  position: fixed;
  bottom: 10px;
  width: calc(100% - 220px);
  &:hover,
  &:active,
  &:focus {
    border: 3px solid dimgray;
  }
`
