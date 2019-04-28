import React, { Component } from 'react';
import {

    Container,
    Row,
    Col,


} from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

class App extends Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
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
            <div className="wrapper">
                  <ExamplesNavbar />


            <div className="page-header">
              <img
                alt="..."
                className="path"
                src={require("./assets/img/blob.png")}
              />
              <img
                alt="..."
                className="path2"
                src={require("./assets/img/path2.png")}
              />




              <img
                alt="..."
                className="shapes circle"
                src={require("./assets/img/cercuri.png")}
              />
              <Container>

                  <Row>
                      <Col>


                          <Route exact path="/" component={Landing} />
                          <Route path="/library" component={Library} />
                            <Route path="/album/:slug" component={Album} />

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
