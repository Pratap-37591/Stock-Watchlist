import Home from "./Screens/Home/Home";
import Watch from "./Screens/Watchlist/Watch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
    
      <Container>
        <Row>
          <Col>
            <Home />
          </Col>
          <Col>
            <Watch />
          </Col>
        </Row>
      </Container>
 
  );
}

export default App;
