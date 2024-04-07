import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Introduction() {
  return (
    <Row className='introduction'>
        <Col>
            <Card>
            <Card.Body>
                <Card.Text>
                Bob is a Minion who is more childish and immature than most of the other Minions. 
                He is described as a "Little Brother" who finds love in anything and everything, including a rat (who he named Poochy) he found in a sewer in the Minions film. 
                He also enjoys bedtime stories and playing with his favorite stuffed teddy bear, Tim. 
                However, in the audition scene in Despicable Me 2 (having grown since the time of Minions), 
                    he became more plumper which made him look more like the short and plump Minions with spiky hair, just no hair. 
                Is also shown more mature, albeit still playful, as well as more of a goofball like all the other Minions.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Body>
                <Image src="/king-bob.jpeg" rounded />
            </Card.Body>
            </Card>
        </Col>
    </Row>
  );
}

export default Introduction;