import styled from 'styled-components'

interface Props {
  placeholder: string
  onClick: () => {}
}

export function ButtonSign({ placeholder, onClick }: Props) {
  return <Button onClick={onClick}>{placeholder}</Button>
}

const Button = styled.button``
