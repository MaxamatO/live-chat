import styled from 'styled-components'

export function MessageBox() {
  const messages = [
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'Stream quantifying Vermont',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
    {
      message: 'madfaklat',
      user: 'Leonel',
      date: 'Sat Sep 23 2023 12:25:32 GMT+0200 (Central European Summer Time)',
    },
  ]
  return (
    <Container>
      <ul>
        {messages.map((message, idx) => (
          <li key={idx}>
            <Username>{message.user} </Username>

            <DateSpan>
              {new Intl.DateTimeFormat('en-PL').format(new Date(message.date))}
            </DateSpan>
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 85px;
  overflow-y: auto;
  height: calc(100vh - 185px);
  li {
    margin: 0.5rem 0;
  }
  p {
    margin-top: 0.25rem;
  }
`

const Username = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  margin-right: 5px;
`

const DateSpan = styled.span`
  color: darkgray;
`
