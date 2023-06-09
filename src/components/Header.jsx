import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === "/" ? "btn btn-success" : "btn btn-light"
            }
          >
            Home
          </Navbar.Brand>
        </Link>
        <Link to="/add">
          <Navbar.Brand
            className={
              location.pathname === "/add" ? "btn btn-success" : "btn btn-light"
            }
          >
            Add
          </Navbar.Brand>
        </Link>
        <Link to="/contacts">
          <Navbar.Brand
            className={
              location.pathname === "/contacts"
                ? "btn btn-success"
                : "btn btn-light"
            }
          >
            Contacts
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
