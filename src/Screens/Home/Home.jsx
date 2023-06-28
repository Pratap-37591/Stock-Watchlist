import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import "../Home/Home.css";
const Home = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar scroll</Navbar.Brand>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="ms-auto custom-input"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
