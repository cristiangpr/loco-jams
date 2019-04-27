import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">LOCO•JAMS</h1>
            </Col>
            <Col md="3">

            </Col>
            <Col md="3">

            </Col>
            <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/library" tag={Link}>
                  Library
                </NavLink>
              </NavItem>


            </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
