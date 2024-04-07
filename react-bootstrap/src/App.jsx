import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './components/PageHeader';
import Introduction from './components/Introduction';
import GeneralCard from './components/General-Card';
import GeneralCardList from './components/General-CardList';
import yaml from 'js-yaml';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {fetchData();}, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.yaml'); 
      const fileContents = await response.text(); 

      const parsedData = yaml.load(fileContents);
      setData(parsedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return(
    <>
      <PageHeader />
      <Container style={{width: '80%', marginTop: '30px'}} fluid>
      <Introduction />
      {data && <GeneralCard content={data.aboutMe} icon="FcBusinessman" />}
      <Row>
        <Col>{data && <GeneralCardList content={data.courses} icon="FcBusinessman" />}</Col>
        <Col>{data && <GeneralCardList content={data.skills} icon="FcBusinessman" />}</Col>
      </Row>
      {data && <GeneralCard content={data.contact} icon="FcBusinessman" />}
    </Container>
    </>
  );
}

export default App
