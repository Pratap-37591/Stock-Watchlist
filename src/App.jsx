import Home from "./Screens/Home/Home";
import Watch from "./Screens/Watchlist/Watch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Screens/Home/Home.css";

function App() {
  return (
    <>
      <h2 className="text-center p-5 display-3">Stock Watchlist</h2>
      <Container  fluid className="watchlist-container px-5">
        <Row>
          <Col>
            <Home />
          </Col>
          <Col>
            <Watch />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
