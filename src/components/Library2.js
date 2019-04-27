
 import React, { Component } from 'react';
  import albumData from './../data/albums';
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
   import { Link } from 'react-router-dom';

 class Library extends Component {
   constructor(props) {
     super(props);
      this.state = { albums: albumData };
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



                {
             this.state.albums.map( (album, index) =>
                <Link to={`/album/${album.slug}`} key={index}>
                 {album.title}
                 <img src={album.albumCover} alt={album.title} />
                 <div>{album.title}</div>
                 <div>{album.artist}</div>
                 <div>{album.songs.length} songs</div>
                </Link>
             )
           }



                </Row>
              </div>
            </div>




          </div>
        </>
      );
    }
    }

export default Library;
