import React from "react";
import ColorSchemesExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketData from "./MarketData";
import LoanEligibility from "./LoanEligibility";
import FraudDetection from "./FraudDetection";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container } from 'react-bootstrap';

// <Route path="/marketdata" element={<MarketData />} />

function App() {
  return (
    <Router>
      <ColorSchemesExample />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loaneligibility" element={<LoanEligibility />} />
          <Route path="/frauddetection" element={<FraudDetection />} />
          <Route path="/marketdata" element={<MarketData />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
