import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './components/PageHeader';
import Introduction from './components/Introduction';


function App() {
  return(
    <>
      <PageHeader />
      <Container style={{width: '80%', marginTop: '30px'}} fluid>
      <Introduction />
      <Row>
        <Col>test2</Col>
        <Col>test3</Col>
        <Col>test4</Col>
      </Row>
    </Container>
    </>
  );
}

export default App
