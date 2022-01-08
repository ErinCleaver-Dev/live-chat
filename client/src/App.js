import logo from './logo.svg';
import Chat from "./components/chat"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Chat/>
    </Container>
  );
}

export default App;
