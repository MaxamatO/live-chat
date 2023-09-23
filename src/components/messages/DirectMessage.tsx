import styled from 'styled-components'
import { Status } from 'components/sidebar/SidebarComponent'

export function DirectMessage() {
  const people = ['bot', 'Jane Doe', 'James', 'Annd Schwarz', 'Arny']
  return (
    <>
      <MessageTitles>
        <h2>Messages</h2>
        <i className="fas fa-plus"></i>
      </MessageTitles>
      <MessageList>
        {people.map((person) => (
          <MessageItem key={person}>
            <Status></Status>
            {person}
          </MessageItem>
        ))}
      </MessageList>
    </>
  )
}

const MessageTitles = styled.div`
  margin: 2rem 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h2 {
    font-size: 1rem;
  }
`

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const MessageItem = styled.li`
  margin: 0.25rem 0;
`
