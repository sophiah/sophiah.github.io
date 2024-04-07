import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as allIcons from "react-icons/fc";

function GeneralCardList(props) {
  if (! props.content ) {
    return null;
  }

  return (
    <Row className='general-card'>
        <Col>
            <Card>
            <Card.Title>
                {props.content.title}
            </Card.Title>
            <Card.Body>
                <Card.Text>
                  <ul>
                  {props.content.list.map((item, index) => (
                    <li>{item}</li>
                  ))}
                  </ul>
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    </Row>
  );
}

export default GeneralCardList;