import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bg-light">
      {/* Main Section */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Finovia Connect</h1>
          <p>Your all-in-one platform for powerful financial services and APIs.</p>
          <Button variant="light" href="#get-started" size="lg">
            Get Started
          </Button>
        </Container>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Features</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body align="center">
                  <Card.Title align="center">Fraud Detection </Card.Title>
                  <Card.Text>
                  This feature uses advanced algorithms and AI to detect potentially fraudulent activities. Businesses can set custom risk thresholds to flag suspicious transactions, monitor patterns. With predictive risk analytics, businesses can take proactive steps to protect themselves </Card.Text>
                  <Button align="center" variant="primary" href="/docs/payments">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>  
            <Col md={4}>
              <Card>
                <Card.Body align="center">
                  <Card.Title align="center">Market Data</Card.Title>
                  <Card.Text>
                  Access real-time and historical financial market data, including stock prices, currency exchange rates, commodity prices, and more. MarketData provides businesses with critical insights to help make informed financial decisions, track market trends, and integrate live data into their applications                  </Card.Text>
                  <Button align="center" variant="primary" href="/docs/fraud-detection">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body align="center">
                  <Card.Title align="center">Loan Eligibility </Card.Title>
                  <Card.Text>
                  Evaluate your business's eligibility for various loan options based on financial metrics such as revenue, credit score, and debt-to-income ratio. Our Loan Eligibility API helps businesses assess their creditworthiness, making it easier to secure the capital they need for growth                  </Card.Text>
                  <Button align="center" variant="primary" href="/docs/analytics">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">How It Works</h2>
          <Row>
            <Col md={6}>
              <h5>Step 1: Sign Up</h5>
              <p>Register your business to access the suite of financial APIs. Secure and easy onboarding.</p>
            </Col>
            <Col md={6}>
              <h5>Step 2: Choose from Services</h5>
              <p>Choose from our wide range of APIs and integrate them seamlessly into your applications.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <h5>Step 3: Monitor Performance</h5>
              <p>Access real-time analytics and monitor  usage to optimize performance and business outcomes.</p>
            </Col>
            <Col md={6}>
              <h5>Step 4: Scale Your Business</h5>
              <p>Scale your operations and reach new customers by leveraging our powerful fintech infrastructure.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-5">
        <Container>
          <h2>Ready to unlock the power of Finovia</h2>
          <p>Sign up today and start integrating the most powerful financial services into your apps.</p>
          <Button variant="primary" size="lg" href="#get-started">Get Started</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2024 FinTech API Connect. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
