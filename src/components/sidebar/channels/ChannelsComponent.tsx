import styled from 'styled-components'

export function ChannelsComponent() {
  const channels = ['announcements', 'general', 'frontend', 'backend', 'random']
  return (
    <>
      <ChannelTitles>
        <h2>Channels</h2>
        <i className="fas fa-plus"></i>
      </ChannelTitles>
      <ChannelList>
        {channels.map((channel) => (
          <ChannelItem key={channel}>#{channel}</ChannelItem>
        ))}
      </ChannelList>
      <Button className="channel-button">
        <i className="fas fa-plus"></i> Add channel
      </Button>
    </>
  )
}

const ChannelTitles = styled.div`
  margin-top: 2rem 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h2 {
    font-size: 1rem;
  }
`

const ChannelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ChannelItem = styled.li`
  margin: 0.25rem 0;
`

const Button = styled.button`
  background-color: transparent;
  padding: 5px;
  color: white;
  border: none;
  &.channel-button {
    margin-top: 1rem;
    i {
      margin-right: 5px;
    }
  }
`
