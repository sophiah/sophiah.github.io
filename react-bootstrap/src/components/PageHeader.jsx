import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

const navbarStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '120px',
  width: '100%',
  padding: '0px'
};

const topStyle = {
  backgroundColor: '#E7CA6B',
  flex: '7',
  position: 'relative',
  width: '100%',
  top: '0px'
};

const bottomStyle = {
  backgroundColor: 'white',
  flex: '3',
  display: 'flex'
};

const overlayTextStyle = {
  position: 'absolute',
  top: '75px',
  left: '20%',
  transform: 'translate(-20%, -50%)', 
  display: 'flex',
  alignItems: 'center'
};

const profileImage = {
  maxWidth: '120px',
  maxHeight: '120px',
  height: 'auto',
  width: 'auto'
}

const pageHeaderListItem = {
  border: '0',
  backgroundColor: 'transparent',
  alignItems: 'flex-end',
  display: 'flex'
}


function PageHeader() {
  return(
    <Navbar style={navbarStyle}>
    <div style={topStyle}></div>
    <div style={bottomStyle}>
        <ListGroup horizontal style={overlayTextStyle}>
          <ListGroup.Item style={pageHeaderListItem}><Image src="/bob.jpeg" style={profileImage} roundedCircle /></ListGroup.Item>
          <ListGroup.Item style={pageHeaderListItem} className="page-header-text"><h1>King Bob</h1></ListGroup.Item>
        </ListGroup>
    </div>
    </Navbar>
  );
}

export default PageHeader