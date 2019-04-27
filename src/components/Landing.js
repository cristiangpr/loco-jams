import React from "react";
// react plugin used to create charts
import '../Landing.css'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components


class Landing extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>

        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../assets/img/cercuri.png")}
            />

            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">

              <section className="container" id="landing">

            <div className="col-md-12" id="space">  <Button className="btn btn-primary"  href="/library"> <h1 className="hero-title">Turn the music up!</h1></Button></div>
              <section className="row" id="selling-points">
                <div className="col" id="column-1">
                  <h2 className="point-title">Choose your music</h2>
                  <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
                </div>
                <div className="col" id="column-2">
                  <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                  <p className="point-description">No arbitrary limits. No distractions.</p>
                </div>
                <div className="col" id="column-3">
                  <h2 className="point-title">Mobile enabled</h2>
                  <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                </div>
              </section>

              </section>
              </Row>
            </div>
          </div>



        </div>
      </>
    );
  }
}

export default Landing;
