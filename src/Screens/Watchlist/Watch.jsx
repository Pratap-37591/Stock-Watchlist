import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Watch = () => {
  return (
    <Navbar className="bg-warning">
      <Container fluid>
        <h2 className="display-6 fs-3 text-white">Watch List</h2>
      </Container>
    </Navbar>
  );
};

export default Watch;
