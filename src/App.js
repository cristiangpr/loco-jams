import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                  <ExamplesNavbar />
  <div className="wrapper">
                    <Container>
                        <Row>
                            <Col>
                        

                                <Route exact path="/" component={Landing} />
                                <Route path="/library" component={Library} />
                                  <Route path="/album" component={Album} />

                            </Col>
                        </Row>
                    </Container>
                    </div>

                            <Footer />
            </div>
        );
    }
}

export default App;
