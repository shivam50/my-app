import React, { useState, useEffect } from 'react';
//import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LineChart } from '@mui/x-charts/LineChart';
//import axios from 'axios';

function MarketData() {


 

 const [marketData, setMarketData] = useState([]);

 useEffect(() => {
    fetch('http://localhost:5001/v1/marketdata')
      .then(response => response.json())
      .then(data => setMarketData(data))
      
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(marketData);
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Button variant="success">
            Nifty is {marketData.length > 0 ? marketData[0].nifty : 'N/A'}
          </Button>
        </Col>
        <Col sm={5}>
          <Button variant="success">
            Sensex is {marketData.length > 0 ? marketData[0].sensex : 'N/A'}
          </Button>
        </Col>
      </Row>

      <LineChart
        xAxis={[
          {
            scaleType: 'band',
            data: marketData.map(d => d.day),
            id: 'days',
            label: 'Day',
          },
        ]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', label: 'Nifty' },
        ]}
        series={[
          { data: marketData.map(d => d.nifty) },
        ]}
        leftAxis="linearAxis"
        height={300}
        width={400}
      />

      <LineChart
        xAxis={[
          {
            scaleType: 'band',
            data: marketData.map(d => d.day),
            id: 'days',
            label: 'Day',
          },
        ]}
        yAxis={[
          { id: 'linearAxis', scaleType: 'linear', label: 'Sensex' },
        ]}
        series={[
          { data: marketData.map(d => d.sensex) },
        ]}
        leftAxis="linearAxis"
        height={300}
        width={400}
      />
    </Container>
  );
}

export default MarketData;
