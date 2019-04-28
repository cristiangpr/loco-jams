
 import React, { Component } from 'react';
  import albumData from './../data/albums';
  import {

    Row

  } from "reactstrap";
   import { Link } from 'react-router-dom';
   import "../Library.css"
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


              <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-center">



              {
           this.state.albums.map( (album, index) =>

              <Link to={`/album/${album.slug}`} key={index}>

               <img className=" img-fluid rounded shadow-lg" src={album.albumCover} alt={album.title} />
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
