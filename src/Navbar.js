import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">Finovia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/marketdata">MarketData</Nav.Link>
            <Nav.Link href="/loaneligibility">Loan Eligibility</Nav.Link>
            <Nav.Link href="/frauddetection">Loan Eligibility</Nav.Link>

            <Nav.Link href="#api">API Portal</Nav.Link>

          </Nav>
      </Navbar>
      <br />
      </>
      )
    }
      
export default ColorSchemesExample;
