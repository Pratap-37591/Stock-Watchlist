import React, { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../Home/Home.css";
import axios from "axios";

const AppKey = "NVV4NC6QKOY7ZS6U";

const Home = () => {
  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const watchlist = useMemo(() => {
    const respose = axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=${AppKey}`
    );
    setSearch();
  });

  const searchhandle = (e) => {
    const stock = e.target.value;
    setSearch(stock);
    setQuery(stock);
  };

  return (
    <div>
      <Navbar className="bg-danger">
        <Container>
          <h2 className="display-6 fs-3 text-white">Home</h2>
          <Form>
            <Form.Control
              type="search"
              value={search}
              onChange={searchhandle}
              placeholder="Search"
              className="ms-auto custom-input"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
      {watchlist.join(",")}
    </div>
  );
};

export default Home;
