import React from "react";
// react plugin used to create charts
import '../Landing.css'
// reactstrap components
import {
Row
} from "reactstrap";

// core components


class Landing extends React.Component {


  render() {
    return (
      <>


            <div className="col-md-12" id="space"> <h1 className="hero-title"><span> LOCO•JAMS</span> </h1></div>

            <div className="content-center">

              <Row className="row-grid justify-content-between align-items-center text-left">

              <section className="container" id="landing">


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





      </>
    );
  }
}

export default Landing;
